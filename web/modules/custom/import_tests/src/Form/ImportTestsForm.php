<?php

namespace Drupal\import_tests\Form;

use Drupal\Core\Form\FormBase;
use Drupal\Core\Form\FormStateInterface;
use Drupal\Core\Controller\ControllerBase;
use Drupal\Core\Entity\EntityTypeManagerInterface;
use Drupal\Core\StringTranslation\StringTranslationTrait;
use Symfony\Component\HttpFoundation\RedirectResponse;
use Symfony\Component\HttpFoundation\RequestStack;
use Drupal\taxonomy\Entity\Vocabulary;
/**
 * Provides a form for importing taxonomy terms from a CSV file.
 */
class ImportTestsForm extends FormBase {

  /**
   * {@inheritdoc}
   */
  public function getFormId() {
    return 'import_tests_form';
  }

  /**
   * {@inheritdoc}
   */
  public function buildForm(array $form, FormStateInterface $form_state) {
    $form['#attributes']['enctype'] = 'multipart/form-data';

    $form['csv_file'] = [
      '#type' => 'file',
      '#title' => $this->t('CSV File'),
      '#required' => TRUE,
      '#description' => $this->t('Please upload a CSV file.'),
    ];

    $form['actions']['submit'] = [
      '#type' => 'submit',
      '#value' => $this->t('Import'),
    ];

    return $form;
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
    $file = $form_state->getValue('csv_file');

    if (is_array($file) && !empty($file)) {
      $file = reset($file);
    }

    if (!empty($file)) {
      // Read the contents of the CSV file.
      $handle = fopen($file->getFileUri(), 'r');
      $header = NULL;
      while (($row = fgetcsv($handle, 1000, ',')) !== FALSE) {
        if (!$header) {
          $header = $row;
        }
        else {
          // Create a new term with the values from the CSV row.
          $term = \Drupal::entityTypeManager()->getStorage('taxonomy_term')->create([
            'vid' => 'test',
            'name' => $row[0],
            'field_price' => $row[1],
          ]);
          $term->save();
        }
      }
      fclose($handle);

      $this->messenger()->addStatus($this->t('The CSV file has been imported.'));
    }
    else {
      $this->messenger()->addError($this->t('No file was uploaded.'));
    }
  }

}
