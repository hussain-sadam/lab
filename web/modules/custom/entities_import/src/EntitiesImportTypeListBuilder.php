<?php

namespace Drupal\entities_import;

use Drupal\Core\Config\Entity\ConfigEntityListBuilder;
use Drupal\Core\Entity\EntityInterface;
use Drupal\Core\Link;

/**
 * Provides a listing of Entities Import Type.
 */
class EntitiesImportTypeListBuilder extends ConfigEntityListBuilder {

  /**
   * {@inheritdoc}
   */
  public function buildHeader() {
    $header['label'] = $this->t('Name');
    $header['id'] = $this->t('Machine name');
    return $header + parent::buildHeader();
  }

  /**
   * {@inheritdoc}
   */
  public function buildRow(EntityInterface $entity) {
    
    $row['label'] = $entity->label();   
    $row['id'] = $entity->id();    
    // You probably want a few more properties here...

    return $row + parent::buildRow($entity);
  }

}