<?php

namespace Drupal\import_tests\Controller;

use Drupal\Core\Controller\ControllerBase;
use Symfony\Component\HttpFoundation\Response;

/**
 * Controller for the Import Tests page.
 */
class ImportTestsController extends ControllerBase {

  /**
   * Displays the Import Tests page.
   */
  public function import() {
    // Call the import_tests_import() function to import the CSV data.
    import_tests_import();

    // Return a response indicating that the import was successful.
    $message = $this->t('CSV import complete.');
    $response = new Response($message);
    return $response;
  }

}
