<?php
namespace Drupal\conditional_fields\Form;

use Drupal\Core\Form\FormBase;
use Drupal\Core\Form\FormStateInterface;
use Drupal\Core\Ajax\AjaxResponse;
use Drupal\Core\Ajax\HtmlCommand;

class MyCustomForm extends FormBase {

  public function getFormId() {
    return 'conditional_fields_form';
  }

  public function buildForm(array $form, FormStateInterface $form_state) {

    // Add the entity reference field to the form.
    $form['node_reference'] = [
      '#type' => 'entity_autocomplete',
      '#title' => $this->t('Select a node'),
      '#target_type' => 'node',
      '#selection_handler' => 'default',
      '#selection_settings' => [
        'target_bundles' => ['article', 'page'],
      ],
      '#ajax' => [
        'callback' => [$this, 'loadNodeData'],
        'event' => 'autocompleteclose',
        'progress' => [
          'type' => 'throbber',
          'message' => $this->t('Loading node data...'),
        ],
      ],
    ];

    // Add a container for the extra information that will be loaded via AJAX.
    $form['extra_information'] = [
      '#type' => 'container',
      '#attributes' => ['id' => 'extra-information'],
    ];

    // Add a submit button to the form.
    $form['submit'] = [
      '#type' => 'submit',
      '#value' => $this->t('Submit'),
    ];

    return $form;
  }

  public function submitForm(array &$form, FormStateInterface $form_state) {
    // Handle the form submission.
  }

  public function loadNodeData(array &$form, FormStateInterface $form_state) {

    // Load the selected node and get its title.
    $node_id = $form_state->getValue(['node_reference', 'target_id']);
    $node = \Drupal::entityTypeManager()->getStorage('node')->load($node_id);
    $node_title = $node->getTitle();

    // Build the AJAX response.
    $response = new AjaxResponse();
    $response->addCommand(new HtmlCommand('#extra-information', "You selected the node with title: $node_title"));

    return $response;
  }

}
