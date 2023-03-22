<?php

namespace Drupal\entities_import;

/**
 * Defines common functionalities. 
 */
class CommonUtilities {  

  /**
   * Generate Properties Array.
   */
  public static function generatePropertiesArray($item, $type) { 
    $properties = [];
    $properties[$type] = $item['bundle'];
    foreach($item['unique_fields'] as $key => $value) {
      if(isset($item['node'][$value])) {
        $properties[$value] = $item['node'][$value];          
      }
    }   
    return $properties;
  }
  
  
}
