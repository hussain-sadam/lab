<?php

namespace Drupal\entities_import;

/**
 * Defines class to get field details. 
 */
class FieldDetails {

  /**
   * Defines method to get field list. 
   */
  public static function getReferenceFieldBundle($entity, $bundle) {
    $field_defs = \Drupal::service('entity_field.manager')->getFieldDefinitions($entity, $bundle);
    $arr_target_bundle = [];
    foreach ($field_defs as $field_name => $field_definition) {
      if (!empty($field_definition->getTargetBundle())) {
        if ($field_definition->getType() == 'entity_reference' || $field_definition->getType() == 'entity_reference_revisions') {
          if($field_name !== 'parent') {
            if(isset($field_definition->getSettings()['handler_settings']['target_bundles'])) {
              $target_bundles = $field_definition->getSettings()['handler_settings']['target_bundles'];
              if(!empty($target_bundles)) {
                $arr_bundles = [];
                foreach($target_bundles as $key => $value) {
                  $arr_bundles[$field_name] = $value;
                }
                $handler = $field_definition->getSettings()['handler'];
                $arr_handler = explode(':', $handler);           
                $arr_bundles['entity_type'] = $arr_handler[1];
                $arr_target_bundle[$field_name] = $arr_bundles;
              }
            }
          }                   
        }  
      }      
    }   
    return $arr_target_bundle;
  }

  /**
   * Defines method to get field list. 
   */
  public static function getFieldCardinality($entity, $bundle) {
    $arr_cardinality = [];
    $field_defs = \Drupal::service('entity_field.manager')->getFieldDefinitions($entity, $bundle);
    $arr_target_bundle = [];
    foreach ($field_defs as $field_name => $field_definition) {
      $arr_cardinality[$field_name] = $field_definition->getFieldStorageDefinition()->getCardinality();         
    }
    return $arr_cardinality;
  }

  /**
   * Defines method to get field type by field name. 
   */
  public static function getFieldType($entity, $bundle, $field_name) { 
    $fieldType = '';
    if(!empty($field_name)) {
      $field_defs = \Drupal::service('entity_field.manager')->getFieldDefinitions($entity, $bundle);
      $field_definition = $field_defs[$field_name];
      $fieldType = isset($field_definition)? $field_definition->getType() : '';
    }
    return $fieldType;
  }
  
}
