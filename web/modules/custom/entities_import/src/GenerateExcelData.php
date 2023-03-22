<?php

namespace Drupal\entities_import;

use Drupal\taxonomy\Entity\Term;
use Drupal\entities_import\ImportUtilities;
use Drupal\entities_import\FieldDetails;

/**
 * Defines class to Generate Excel Data. 
 */
class GenerateExcelData {

  //getExcelArrayIndex($results, $arr_target_bundle, $arr_cardinality, $entity, $bundle, $arrFields) { 

  /**
   * Defines method to generate entity details. 
   */
  public static function getExcelArrayIndex($results, $arr_target_bundle, $arr_cardinality, $entity, $bundle, $arrFields) {  
    $node = [];   
    
    foreach($results as $key => $result) {
      foreach($result as $field => $value) {
        $fieldType = FieldDetails::getFieldType($entity, $bundle, $field);  
        //print_r($fieldType); 
        //echo "\n";
        $target_bundle = isset($arr_target_bundle[$field][$field])?$arr_target_bundle[$field][$field] : '';
        $entity_type = isset($arr_target_bundle[$field]['entity_type'])? $arr_target_bundle[$field]['entity_type'] : '';
        $arr_cardinality_field = isset($arr_cardinality[$field])? isset($arr_cardinality[$field]) : '';
        $node = self::validateField($value, $node, $key, $field, $fieldType, $arrFields, $arr_cardinality_field, $bundle, $target_bundle, $entity_type);  
        if(array_key_exists($field, $arr_target_bundle)) {           
          if($arr_target_bundle[$field]['entity_type'] === 'node') {
            if(isset($arr_cardinality[$field]) && $arr_cardinality[$field] == -1) { 
              $node = self::generateEntityReferenceCardinalityArray('type', 'title', 'node', $target_bundle, $value, $node, $key, $field);
            }
            else {
              $node = self::generateEntityReferenceArray('type', 'title', 'node', $target_bundle, $value, $node, $key, $field);
            }      
          }
          else if($arr_target_bundle[$field]['entity_type'] === 'taxonomy_term') {
            if(isset($arr_cardinality[$field]) && $arr_cardinality[$field] == -1) { 
              $node = self::generateEntityReferenceCardinalityArray('vid', 'name', 'taxonomy_term', $target_bundle, $value, $node, $key, $field);
            }
            else {
              $node = self::generateEntityReferenceArray('vid', 'name', 'taxonomy_term', $target_bundle, $value, $node, $key, $field);
            }          
          }
          else if($arr_target_bundle[$field]['entity_type'] === 'paragraph') {           
            $paragraph = self::generateParagraphArray($value, $field, $target_bundle);
            $node[$key][$field]['value'] = $paragraph;  
            $node[$key][$field]['type'] = $fieldType; 
            $node[$key][$field]['p_type'] = $arr_target_bundle[$field][$field];       
          }
        }
        else if($fieldType === 'datetime') {
          $date = self::generateDateArray($value);
          $node[$key][$field] = $date;          
        }
        else if($fieldType === 'daterange') { 
          $arr_date = self::generateDateRangeArray($value);
          $node[$key][$field] = $arr_date;          
        }
        else if($fieldType === 'image' || $fieldType === 'file') { 
          if(isset($arr_cardinality[$field]) && $arr_cardinality[$field] == -1) {
            if(!empty($value)) {
              $arr_field_card = explode(ImportUtilities::SEPERATOR_MULTIVALUE_FIELD, $value);
              $node[$key][$field]['value'] = $arr_field_card;
            }           
          }
          else {
            $node[$key][$field]['value'][] = $value;
          } 
          $node[$key][$field]['type'] = $fieldType;        
        }
        else if(isset($arr_cardinality[$field]) && $arr_cardinality[$field] == -1) {
          if(!empty($value)) {
            $arr_field_card = explode(ImportUtilities::SEPERATOR_MULTIVALUE_FIELD, $value);
            $node[$key][$field] = $arr_field_card;
          }           
        }
        else {
          $node[$key][$field] = $value;
        }
      }      
    }    
    return $node;
  }

  /**
   * Defines method to generate Paragraph Array. 
   */
  public static function generateParagraphArray($value, $field_name, $target_bundle) {
    $arr_paragraph = [];
    if(!empty($value)) {
      $arr_pargh_field = explode('|', $value);
      foreach($arr_pargh_field as $pargh_field) {
        $field_paragraph[] = explode('#', $pargh_field);
      }
      foreach($field_paragraph as $key1 => $paragraph_value) {
        foreach($paragraph_value as $key2 => $paragraph) {
          $temp = explode('*', $paragraph);
          $arr_paragraph[$key1][$temp[0]] = $temp[1];
        }
      }
    }  
    $arr_cardinality = FieldDetails::getFieldCardinality('paragraph', $target_bundle); 
    $arrFields = [];
    $arr_target_bundle = FieldDetails::getReferenceFieldBundle('paragraph', $target_bundle);  
    $arr_paragraph = self::getExcelArrayIndex($arr_paragraph, $arr_target_bundle, $arr_cardinality, 'paragraph', $target_bundle, $arrFields);    
    return $arr_paragraph;
  }

  public static function validateField($value, $node, $key, $field, $fieldType, $arrFields, $cardinality, $bundle, $target_bundle, $entity_type) {
    
    if(in_array($fieldType, ['float', 'integer', 'decimal'])) {
      if($cardinality == -1) {
        if(!empty($value)) {
          $arr_number = explode(ImportUtilities::SEPERATOR_MULTIVALUE_FIELD, $value);
          foreach($arr_number as $number) {
            if(!is_numeric($number)) {
              $node[$key]['error'][] = '{{ ' . $arrFields[$field] . ' }}' . t(' - should be numeric.');
            }
          }
        }       
      }
      else {
        if(!empty($value) && !is_numeric($value)) {
          $node[$key]['error'][] = '{{ ' . $arrFields[$field] . ' }}' . t(' - should be numeric.');
        }
      }           
    }
    else if($fieldType == 'entity_reference') {
      if($entity_type == 'node') { 
        if($cardinality == -1) {
          if(!empty($value)) {
            $arr_field_card = explode(ImportUtilities::SEPERATOR_MULTIVALUE_REFERENCE_FIELD, $value);
            foreach($arr_field_card as $field_card_key => $field_card_value) {
              $properties = self::generatePropertiesArray('type', 'title', $target_bundle, $field_card_value);           
              $entity = EntityDetails::checkEntityExistsByProperties($properties, $entity_type);
              if(empty($entity)) {
                //$node[$key]['error'][] = '{{ ' . $arrFields[$field] . ' }}' . t(' - ' . $field_card_value . ' does not exists.');       
              } 
            }
          }
        }
        else {
          $properties = self::generatePropertiesArray('type', 'title', $target_bundle, $value);           
          $entity = EntityDetails::checkEntityExistsByProperties($properties, $entity_type);
          if(empty($entity)) {
            //$node[$key]['error'][] = '{{ ' . $arrFields[$field] . ' }}' . t(' - ' . $value . ' does not exists.');       
          }
        }
      }      
      else if($entity_type == 'taxonomy_term') {
        if($cardinality == -1) {
          if(!empty($value)) {
            $arr_field_card = explode(ImportUtilities::SEPERATOR_MULTIVALUE_REFERENCE_FIELD, $value);
            foreach($arr_field_card as $field_card_key => $field_card_value) {
              $properties = self::generatePropertiesArray('vid', 'name', $target_bundle, $field_card_value);           
              $entity = EntityDetails::checkEntityExistsByProperties($properties, $entity_type);
              if(empty($entity)) {
                //$node[$key]['error'][] = '{{ ' . $arrFields[$field] . ' }}' . t(' - ' . $field_card_value . ' does not exists.');       
              } 
            }
          }
        }
        else {
          $properties = self::generatePropertiesArray('vid', 'name', $target_bundle, $value);           
          $entity = EntityDetails::checkEntityExistsByProperties($properties, $entity_type);
          if(empty($entity)) {
            //$node[$key]['error'][] = '{{ ' . $arrFields[$field] . ' }}' . t(' - ' . $value . ' does not exists.');       
          }
        }
      }      
    }
    return $node;
  }

  /**
   * Defines method to generate Date Array. 
   */
  public static function generateDateArray($value) {    
    $timestamp = strtotime($value);
    $date = !empty($timestamp)? date('Y-m-d', $timestamp) : '';
    return $date;
  }
  
  /**
   * Defines method to generate Date Range Array. 
   */
  public static function generateDateRangeArray($value) {
    $arr_date = [];
    if(!empty($value)) {
      $arr_value = explode(ImportUtilities::SEPERATOR_DATERANGE_FIELD, $value);      
      $start = isset($arr_value[0])? strtotime($arr_value[0]) : '';
      $end = isset($arr_value[1])? strtotime($arr_value[1]) : '';
      $arr_date['value'] = !empty($start)? date('Y-m-d', $start) : '';
      $arr_date['end_value'] = !empty($end)? date('Y-m-d', $end) : '';
    }    
    return $arr_date;
  }

  /**
   * Defines method to generate Properties Array. 
   */
  public static function generatePropertiesArray($type, $title, $target_bundle, $value) {
    $properties = [
      $type => $target_bundle,
      $title => trim($value),
    ];
    return $properties;
  }

  /**
   * Defines method to generate Entity Reference field with cardinality Array. 
   */
  public static function generateEntityReferenceCardinalityArray($type, $title, $entity_type, $target_bundle, $value, $node, $key, $field) {
    if(!empty($value)) {
      $arr_field_card = explode(ImportUtilities::SEPERATOR_MULTIVALUE_REFERENCE_FIELD, $value);
      foreach($arr_field_card as $field_card_key => $field_card_value) {
        $properties = self::generatePropertiesArray($type, $title, $target_bundle, $field_card_value);           
        $entity = EntityDetails::checkEntityExistsByProperties($properties, $entity_type);
        if(!empty($entity)) {
          $node[$key][$field][$field_card_key] = $entity->id();              
        } 
      }
    }
    else {
      $node[$key][$field] = [];
    }
    return $node;
  }

  /**
   * Defines method to generate Entity Reference field Array. 
   */
  public static function generateEntityReferenceArray($type, $title, $entity_type, $target_bundle, $value, $node, $key, $field) {
    $properties = self::generatePropertiesArray($type, $title, $target_bundle, $value);           
    $entity = EntityDetails::checkEntityExistsByProperties($properties, $entity_type);
    if(!empty($entity)) {
      $node[$key][$field] = $entity->id();              
    }
    else {
      $node[$key][$field] = [];
    }
    return $node;
  }  
  
}
