<?php

namespace Drupal\entities_import\Entity;

use Drupal\views\EntityViewsData;

/**
 * Provides Views data for Entities Import Type.
 */
class EntitiesImportTypeViewsData extends EntityViewsData {

  /**
   * {@inheritdoc}
   */
  public function getViewsData() {
    $data = parent::getViewsData();

    // Additional information for Views integration, such as table joins, can be
    // put here.
    return $data;
  }

}
