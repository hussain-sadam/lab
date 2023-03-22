<?php

namespace Drupal\import_tests\Controller;

use Drupal\Core\Controller\ControllerBase;
use Drupal\Core\Entity\EntityTypeManagerInterface;
use Drupal\Core\StringTranslation\StringTranslationTrait;
use Symfony\Component\HttpFoundation\RedirectResponse;
use Symfony\Component\HttpFoundation\RequestStack;
use Drupal\taxonomy\Entity\Vocabulary;

/**
 * Provides a custom import feature for taxonomy terms of the 'test' vocabulary.
 */
class ImportTestsController extends ControllerBase {

  use StringTranslationTrait;

  /**
   * The entity type manager.
   *
   * @var \Drupal\Core\Entity\EntityTypeManagerInterface
   */
  protected $entityTypeManager;

  /**
   * The request stack.
   *
   * @var \Symfony\Component\HttpFoundation\RequestStack
   */
  protected $requestStack;

  /**
   * Constructs a new ImportTestsController object.
   *
   * @param \Drupal\Core\Entity\EntityTypeManagerInterface $entity_type_manager
   *   The entity type manager.
   * @param \Symfony\Component\HttpFoundation\RequestStack $request_stack
   *   The request stack.
   */
  public function __construct(EntityTypeManagerInterface $entity_type_manager, RequestStack $request_stack) {
    $this->entityTypeManager = $entity_type_manager;
    $this->requestStack = $request_stack;
  }

  /**
   * Provides a custom import feature for taxonomy terms of the 'test' vocabulary.
   */
  public function import() {
    $request = $this->requestStack->getCurrentRequest();

    if ($request->getMethod() == 'POST') {
      $input = $request->request->all();

      if (!empty($input['terms'])) {
        $terms = explode("\n", $input['terms']);

        $vocabulary = $this->entityTypeManager->getStorage('taxonomy_vocabulary')->load('test');

        foreach ($terms as $term_name) {
          $term = $this->entityTypeManager->getStorage('taxonomy_term')->create([
            'name' => trim($term_name),
            'vid' => $vocabulary->id(),
          ]);
          $term->save();
        }

        $this->messenger()->addStatus($this->t('Imported @count terms.', ['@count' => count($terms)]));
      }
      else {
        $this->messenger()->addError($this->t('No terms were specified for import.'));
      }
    }

    $build = [
      '#theme' => 'import_tests_form',
      '#attached' => [
        'library' => [
          'import_tests/import_tests',
        ],
      ],
    ];

    return $build;
  }

}
