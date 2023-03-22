<?php

namespace Drupal\entities_import;

/**
 * Defines class to get entity details. 
 */
class EntityDetails {

  /**
   * Defines method to check Node Exists By Properties.
   */
  public static function checkNodeExistsByProperties($properties, $entity_type) {
    $nodes = \Drupal::entityTypeManager()->getStorage($entity_type)->loadByProperties($properties);
    return $nodes;
  }

  /**
   * Get term id by name.
   */
  public static function getTermByProperties($properties) {
    $terms = \Drupal::entityTypeManager()->getStorage('taxonomy_term')->loadByProperties($properties);  
    $terms = reset($terms);
    return $terms;
  }

  /**
   * Defines method to check Entity Exists By Properties.
   */
  public static function checkEntityExistsByProperties($properties, $entity_type) {
    $entity = \Drupal::entityTypeManager()->getStorage($entity_type)->loadByProperties($properties);
    $entity = reset($entity);
    return $entity;
  }
  
}
