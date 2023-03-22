<?php

namespace Drupal\entities_import\Form;

use Drupal\Core\Entity\EntityForm;
use Drupal\Core\Entity\EntityTypeManagerInterface;
use Drupal\Core\Form\FormStateInterface;
use Drupal\Core\Messenger\MessengerInterface;
use Symfony\Component\DependencyInjection\ContainerInterface;
use Drupal\taxonomy\Entity\Vocabulary;
use Drupal\entities_import\ImportUtilities;
use Drupal\entities_import\ReadExcel;
use Drupal\entities_import\GenerateExcelData;
use Drupal\taxonomy\Entity\Term;
use Drupal\file\Entity\File;
use Drupal\Core\Url;

/**
 * Form handler for the entity add and edit forms.
 */
class EntitiesImportTypeForm extends EntityForm {

  /**
   * Constructs an Entities Import Type Form object.
   *
   * @param \Drupal\Core\Entity\EntityTypeManagerInterface $entityTypeManager
   *   The entityTypeManager.
   */
  public function __construct(EntityTypeManagerInterface $entityTypeManager) {
    $this->entityTypeManager = $entityTypeManager;
  }

  /**
   * {@inheritdoc}
   */
  public static function create(ContainerInterface $container) {
    return new static(
      $container->get('entity_type.manager')
    );
  }

  /**
   * {@inheritdoc}
   */
  public function form(array $form, FormStateInterface $form_state) {
    $form = parent::form($form, $form_state); 
    
    $form = [
      '#attributes' => array('enctype' => 'multipart/form-data'),
    ];    
  
    $validators = [
      'file_validate_extensions' => ImportUtilities::FILE_UPLOAD_FORMAT
    ];

    $entity = $this->entity;
    
    if(!empty($entity->id())) {
      $form['import_link'] = [
        '#type' => 'link',
        '#title' => $this->t('Import @id', ['@id' => $entity->id()]),
        '#url' => Url::fromRoute('entities_import.file_upload', ['type' => $entity->id()]),        
        '#attributes' => [
          'class' => [
            'btn btn-primary button button--primary import-btn',
          ],
        ],
      ];      
    }
   
    $form['label'] = [
      '#type' => 'textfield',
      '#title' => $this->t('Name'),
      '#maxlength' => 255,
      '#default_value' => $entity->label(),
      '#description' => $this->t("Name of the services type."),
      '#required' => TRUE,
    ];
    $form['id'] = [
      '#type' => 'machine_name',
      '#default_value' => $entity->id(),
      '#machine_name' => [
        'exists' => [$this, 'exist'],
      ],
      '#disabled' => !$entity->isNew(),
    ];    
    $form['entity_type'] = [
      '#type' => 'radios',
      '#options' => [
                      'content_type' => 'Content type',
                      'taxonomy' => 'Taxonomy',
                    ],
      '#title' => $this->t('Entity Type'),        
      '#weight' => 1,
      '#required' => TRUE,
      '#default_value' => isset($entity->entity_type) ? $entity->entity_type : '',
    ];
    $form['content_type'] = [
      '#type' => 'radios',      
      '#options' => $this->getContentTypeList(),
      '#title' => $this->t('Content Type'),
      '#default_value' => isset($entity->content_type) ? $entity->content_type : '',
      //'#required' => TRUE,
      '#description' => $this->t('Please choose the Content Type to import.'),
      '#weight' => 2,
      '#states' => [
        'visible' => [
          ':input[name="entity_type"]' => ['value' => 'content_type'],
        ],
      ],
      
    ];
    $form['taxonomy'] = [
      '#type' => 'radios',      
      '#options' => $this->getVocabularyList(),
      '#title' => $this->t('Vocabularies'),
      '#default_value' => isset($entity->taxonomy)? $entity->taxonomy : '',
      //'#required' => TRUE,
      '#description' => $this->t('Please choose the vocabulary to import.'),
      '#weight' => 3,
      '#states' => [
        'visible' => [
          ':input[name="entity_type"]' => ['value' => 'taxonomy'],
        ],
      ],
      
    ]; 
    $moduleHandler = \Drupal::service('module_handler');
    if($moduleHandler->moduleExists('language')) {
      $form['language_code'] = [
        '#type' => 'radios',      
        '#options' => $this->getLanguageCodeList(),
        '#title' => $this->t('Language Code'),
        '#required' => TRUE,
        '#default_value' => isset($entity->language_code) ? $entity->language_code : '',      
        '#description' => $this->t('Please choose the Language Code to import.'),
        '#weight' => 3,
      ];
    }
       
    $form['unique_value_fields'] = [
      '#type' => 'textarea',
      '#title' => $this->t('Unique value fields'),
      '#default_value' => isset($entity->unique_value_fields) ? $entity->unique_value_fields : '',
      '#required' => TRUE,
      '#description' => $this->t('Mention Unique value fields to update if already exists. Enter multiple fields in the next line.'),
      '#weight' => 4,      
    ];
    $form['title'] = [
      '#type' => 'textfield',
      '#title' => $this->t('Title Field Name'),
      '#maxlength' => 255,
      '#default_value' => isset($entity->title) ? $entity->title : '',
      '#description' => $this->t("Please mention the title field name. If leave blank, unique fields will be used to set title."),    
      '#weight' => 5,
    ];
    $form['file_path'] = [
      '#type' => 'textfield',
      '#title' => $this->t('File field folder path'),
      '#maxlength' => 255,
      '#default_value' => isset($entity->file_path) ? $entity->file_path : '',
      '#description' => $this->t("Please mention the name of the folder(inside : /sites/default/files) where the files will be stored. Example : article"),    
      '#weight' => 5,
    ];
    $form['file'] = [
      '#type' => 'managed_file',
      '#name' => 'file',
      '#title' => $this->t('Sample Excel Template'),
      '#size' => 20,
      '#weight' => 6,      
      '#default_value' => isset($entity->file) ? $entity->file : '',
      '#description' => $this->t('Upload Excel format file (Optional). (example : xlsx, xls, csv)'),
      '#upload_validators' => $validators,
      '#upload_location' => ImportUtilities::FILE_UPLOAD_URL,
    ];      
    
    return $form;
  }  

  /**
   * {@inheritdoc}
   */
  public function save(array $form, FormStateInterface $form_state) {
    $entity = $this->entity; 
    $excel_file = $form_state->getValue('file');
    if(!empty($excel_file)) {
      $file = File::load($excel_file[0]);
      $file->setPermanent();
      $file->save(); 
    }     
    $status = $entity->save();    

    if ($status === SAVED_NEW) {
      $this->messenger()->addMessage($this->t('The %label entity created.', [
        '%label' => $entity->label(),
      ]));
    }
    else {
      $this->messenger()->addMessage($this->t('The %label entity updated.', [
        '%label' => $entity->label(),
      ]));
    }

    $form_state->setRedirect('entity.entities_import_type.collection');
  }

  /**
   * Helper function to check whether a configuration entity exists.
   */
  public function exist($id) {
    $entity = $this->entityTypeManager->getStorage('entities_import_type')->getQuery()
      ->condition('id', $id)
      ->execute();
    return (bool) $entity;
  }

   /**
   * Get content type list.
   */
  public function getLanguageCodeList() {
    $langcodes = \Drupal::languageManager()->getLanguages();
    $arr_langcode = [];
    foreach($langcodes as $key => $langcode) {
      $arr_langcode[$key] = $langcode->getName();
    }
    return $arr_langcode;
  }

  /**
   * Get content type list.
   */
  public function getContentTypeList() {
    $types = $this->entityTypeManager->getStorage('node_type')->loadMultiple();
    foreach($types as $key => $value) {
      $content_type[$key] = $value->get('name');      
    }
    return $content_type;
  }

  /**
   * Get Vocabulary List.
   */
  public function getVocabularyList() {
    $vocabularies = Vocabulary::loadMultiple();
    $vocabulariesList = [];
    foreach ($vocabularies as $vid => $vocablary) {
      $vocabulariesList[$vid] = $vocablary->get('name');
    }
    return $vocabulariesList;
  }

}