<?php

namespace Drupal\entities_import\Form;

use Drupal\Core\Form\FormBase;
use Drupal\Core\Form\FormStateInterface;
use Drupal\Core\Entity\EntityTypeManagerInterface;
use Symfony\Component\DependencyInjection\ContainerInterface;
use Drupal\Component\Serialization\Json;
use Drupal\entities_import\ImportUtilities;
use Drupal\entities_import\ReadExcel;
use Drupal\entities_import\GenerateExcelData;
use Drupal\entities_import\FieldDetails;
use Drupal\taxonomy\Entity\Vocabulary;
use Drupal\taxonomy\Entity\Term;
use Drupal\user\Entity\User;
use Drupal\file\Entity\File;

/**
 * Implements the Form for File Upload. 
 */
class FileUploadForm extends FormBase {

  /**
   * The entity type manager.
   *
   * @var \Drupal\Core\Entity\EntityTypeManagerInterface
   */
  protected $entityTypeManager;  

  /**
   * Constructor.
   *
   * @param \Drupal\Core\Entity\EntityTypeManagerInterface $entityTypeManager
   *   The entity type manager.
   */
  public function __construct(EntityTypeManagerInterface $entity_type_manager) {
    $this->entityTypeManager  = $entity_type_manager;
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
  public function buildForm(array $form, FormStateInterface $form_state) {

    $form = [
      '#attributes' => array('enctype' => 'multipart/form-data'),
    ];    
  
    $validators = [
      'file_validate_extensions' => ImportUtilities::FILE_UPLOAD_FORMAT
    ];    
    $form['file'] = [
      '#type' => 'managed_file',      
      '#title' => $this->t('Excel File'),
      '#size' => 20,
      '#weight' => 3,
      '#required' => TRUE,
      '#description' => $this->t('Upload Excel format file. (example : xlsx, xls, csv)'),
      '#upload_validators' => $validators,
      //'#upload_location' => ImportUtilities::FILE_UPLOAD_URL,
    ];
    
    $form['actions']['#type'] = 'actions';
    $form['actions']['submit'] = [
      '#type' => 'submit',
      '#value' => $this->t('Submit'),
      '#button_type' => 'primary',
    ];

    return $form;
  }  
    
  /**
   * {@inheritdoc}
   */
  public function getFormId() {
    return 'entities_file_upload';
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

  public static function getTitleArrayIndex($node, $entity, $bundle) {    
    $arr_target_bundle = FieldDetails::getReferenceFieldBundle($entity, $bundle);    
    $title = [];   
    foreach($node['unique_fields'] as $field => $value) {
      if(array_key_exists($value, $arr_target_bundle)) {         
        $term = Term::load($node['node'][$value]);        
        if(!empty($term)) {
          $name = $term->getName(); 
          $title[] = $name;   
        }
      }
      else {
        $title[] = $node['node'][$value];
      }
    }    
    $node['title'] = implode("-", $title);
    return $node;
  }

  
  /**
   * {@inheritdoc}
   */
  public function validateForm(array &$form, FormStateInterface $form_state) {    
    
  }  

  /**
   * {@inheritdoc}
   */
  public function submitForm(array &$form, FormStateInterface $form_state) {
    $type = \Drupal::request()->query->get('type');
    if(!empty($type)) {      
      $file = \Drupal::entityTypeManager()->getStorage('file')->load($form_state->getValue('file')[0]);    
      $file_name = $file->get('uri')->value;
      $results = ReadExcel::readExcelData($file_name); 
      $headers = $results['fields'];      
      $arrFields = array_combine($headers, $results['header']);
      $entity_obj = \Drupal::entityTypeManager()->getStorage('entities_import_type')->loadByProperties(['id' => $type]);
      $entity_obj = reset($entity_obj);
      $entity_type = $entity_obj->get('entity_type');  
      $file_path = $entity_obj->get('file_path'); 
      $item = [];
      if($entity_type == 'content_type') {
        $bundle = $entity_obj->get('content_type');
        $entity = 'node';
      }
      else {
        $bundle = $entity_obj->get('taxonomy');
        $entity = 'taxonomy_term';
      } 
      $title = $entity_obj->get('title');
      $unique_value_fields =  $entity_obj->get('unique_value_fields');
      $arr_unique = explode("\n", $unique_value_fields);      
      foreach($arr_unique as $key => $value) {
        $arr_unique_fields[$key] = trim($value);
      }           
      $item['file_folder_path'] = ImportUtilities::ENTITY_FILE_UPLOAD_URL . $file_path;
      $item['entity_type'] = $entity_type;
      $item['bundle'] = $bundle;
      $item['unique_fields'] = $arr_unique_fields;
      if(!empty($entity_obj->get('language_code'))) {
        $language_code = $entity_obj->get('language_code');
        $item['language_code'] = $language_code;   
      }
       
      $arr_target_bundle = FieldDetails::getReferenceFieldBundle($entity, $bundle);
      //print_r($arr_target_bundle);
      //exit;
      $arr_cardinality = FieldDetails::getFieldCardinality($entity, $bundle);      
      $node = GenerateExcelData::getExcelArrayIndex($results['results'], $arr_target_bundle, $arr_cardinality, $entity, $bundle, $arrFields);
     
      $total = count($node);
      $batch = [
        'title' => $this->t('Importing Entity Data...'),
        'operations' => [],
        'finished' => '\Drupal\entities_import\DataStorage::entities_import_batch_finished',
        'init_message' => $this->t('Import process is starting.'),
        'progress_message' => $this->t('Processed @current out of @total. Estimated time: @estimate.'),
        'error_message' => $this->t('Error occurred. Failed to import.'),
      ];
      //print_r($node);
      //exit;
      foreach($node as $key => $value) {
        $item['node'] = $value;
        //$item['fields'] = $arrFields;
        if(empty($title)) {
          $item = self::getTitleArrayIndex($item, $entity, $bundle);
        }
        else {
          $item['title'] = $value[$title];
        }
        $item['row'] = $key + 3;
        $batch['operations'][] = [['\Drupal\entities_import\DataStorage', 'save'], [$item]];
      }          
      batch_set($batch);
      //\Drupal::messenger()->addMessage($total . ' ' . $this->t('content has been imported'));
      //$form_state->setRebuild(TRUE);
    }
    
  }

}
