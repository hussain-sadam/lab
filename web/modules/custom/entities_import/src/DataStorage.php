<?php

namespace Drupal\entities_import;

use Drupal\node\Entity\Node;
use Drupal\entities_import\CommonUtilities;
use Drupal\entities_import\FileDetails;
use Drupal\paragraphs\Entity\Paragraph;
use Drupal\entities_import\EntityTranslationDetails;

/**
 * Defines class to data storage interface. 
 */
class DataStorage {

  /**
   * Defines method to save data. 
   */
  public static function save($item, &$context) {
    $flag = 0; 
    $txtstatus = '';
    if (count($item['unique_fields']) > 0) {
      if(!isset($item['node']['error'])) {
        if($item['entity_type'] === 'content_type') {
          $properties = CommonUtilities::generatePropertiesArray($item, 'type');
          $node = EntityDetails::checkNodeExistsByProperties($properties, 'node');       
          if(count($node) === 0) {
            $entity_generate = [
              'type' => $item['bundle']
            ];
            if(isset($item['language_code'])) {
              $entity_generate['langcode'] = $item['language_code'];
            }
            $node = Node::create($entity_generate);
            
            foreach($item['node'] as $key => $value) {
              if(isset($item['node'][$key]['type']) && $item['node'][$key]['type'] === 'entity_reference_revisions') {
                $paragraph = self::getParagraphDetails($item['node'][$key]['value'], $item['node'][$key]['p_type']);
                $node->set($key, $paragraph);
              }
              else if(isset($value['type']) && in_array($value['type'], ['image', 'file'])) {
                if(!empty($value['value'])) {
                  $fileID = [];
                  foreach($value['value'] as $file_key => $file_name) {
                    $fileID[] = FileDetails::create($file_name, $item['file_folder_path']);
                  }
                  $node->set($key, $fileID);
                }
              }
              else {
                $node->set($key, $value);
              }
            }
            if(!empty($item['title'])) {
              $node->set('title', $item['title']); 
            }            
            $node->set('uid', 1);     
            $txtstatus = t('Created Successfully');         
          }
          else {
            $node = reset($node);
            //$node = Node::load($nid);
            if(isset($item['language_code'])) {
              $langcode = $item['language_code'];
              $translated_status = EntityTranslationDetails::checkIfTranslationExists($node, $langcode);	
              if($translated_status) {
                $node = EntityTranslationDetails::getEntityTranslation($node, $langcode);
              }
              else {
                $node = EntityTranslationDetails::addEntityTranslation($node, $langcode);
              }
            }
            foreach($item['node'] as $key => $value) {          
              if(isset($item['node'][$key]['type']) && $item['node'][$key]['type'] === 'entity_reference_revisions') {
                $paragraph = $node->$key->getValue();                
                $paragraph = self::updateParagraphDetails($item['node'][$key]['value'], $item['node'][$key]['p_type'], $node, $key);
                $node->$key = $paragraph;
              }
              else if(isset($value['type']) && in_array($value['type'], ['image', 'file'])) {               
                if(!empty($value['value'])) {
                  $fileIDs = $node->get($key)->getValue();
                  $arrFileID = FileDetails::update($value['value'], $fileIDs, $item['file_folder_path']);
                  $node->$key = $arrFileID;                  
                }
                else {
                  $node->$key = [];
                }
              }
              else {
                $node->$key = $value;
              }
            }  
            if(!empty($item['title'])) {
              $node->title = $item['title'];
            }
            $node->uid = 1;  
            $txtstatus = t('Updated Successfully');              
          }
          $node->save();
          $flag = 1; 
        }
        else if($item['entity_type'] === 'taxonomy') {
          $properties = CommonUtilities::generatePropertiesArray($item, 'vid');
          $term = EntityDetails::checkNodeExistsByProperties($properties, 'taxonomy_term');
          if(count($term) === 0) {
            $entity_generate = [
              'vid' => $item['bundle']
            ];
            if(isset($item['language_code'])) {
              $entity_generate['langcode'] = $item['language_code'];
            }
            $term = Term::create($entity_generate);
            
            foreach($item['node'] as $key => $value) {
              if(isset($item['node'][$key]['type']) && $item['node'][$key]['type'] === 'entity_reference_revisions') {
                $paragraph = self::getParagraphDetails($item['node'][$key]['value'], $item['node'][$key]['p_type']);
                $term->set($key, $paragraph);
              }
              else if(isset($value['type']) && in_array($value['type'], ['image', 'file'])) {
                if(!empty($value['value'])) {
                  $fileID = [];
                  foreach($value['value'] as $file_key => $file_name) {
                    $fileID[] = FileDetails::create($file_name, $item['file_folder_path']);
                  }
                  $term->set($key, $fileID);
                }
              }
              else {
                $term->set($key, $value);
              }
            }
            if(!empty($item['title'])) {
              $term->set('name', $item['title']);  
            }
            $txtstatus = t('Created Successfully');               
          }
          else {
            $term = reset($term);
            if(isset($item['language_code'])) {
              $langcode = $item['language_code'];
              $translated_status = EntityTranslationDetails::checkIfTranslationExists($term, $langcode);	
              if($translated_status) {
                $term = EntityTranslationDetails::getEntityTranslation($term, $langcode);
              }
              else {
                $term = EntityTranslationDetails::addEntityTranslation($term, $langcode);
              }
            }
            foreach($item['node'] as $key => $value) {
              if(isset($item['node'][$key]['type']) && $item['node'][$key]['type'] === 'entity_reference_revisions') {
                $paragraph = $term->$key->getValue();                
                $paragraph = self::updateParagraphDetails($item['node'][$key]['value'], $item['node'][$key]['p_type'], $term, $key);                
                $term->$key = $paragraph;
              }
              else if(isset($value['type']) && in_array($value['type'], ['image', 'file'])) {               
                if(!empty($value['value'])) {
                  $fileIDs = $term->get($key)->getValue();
                  $arrFileID = FileDetails::update($value['value'], $fileIDs, $item['file_folder_path']);
                  $term->$key = $arrFileID;                  
                }
                else {
                  $term->$key = [];
                }
              }
              else {
                $term->$key = $value;
              }
            } 
            if(!empty($item['title'])) {
              $term->name = $item['title'];
            }
            $txtstatus = t('Updated Successfully');               
          }
          $term->save();
          $flag = 1; 
        }
      }
      else {        
        foreach($item['node']['error'] as $key => $error) {
          $context['results']['error'][$item['row']][] = $error;
        }       
      }    
    } 
    if($flag == 1) {
      //$context['results'][] = $txtstatus . ' - ' . $item['title'];
      if(!isset($context['results']['count'])) {
        $context['results']['count'] = 0;
      }
      $context['results']['count'] = $context['results']['count'] + 1;
      $context['message'] = t('Created @title', array('@title' => $item['title']));      
    }
    else {
      //$context['results'][] = 'Failed to create - ' . $item['title'];      
    }
    
    
  }  

  public static function updateParagraphDetails($items, $p_type, $node, $entity_para_field) {    
    $paragraphs = $node->get($entity_para_field)->getValue();
    $ids = array_column($paragraphs, 'target_id');
    $paragraph_storage = \Drupal::entityTypeManager()->getStorage('paragraph');
    $paragraphs_objects = $paragraph_storage->loadMultiple($ids);    
    $index = 0;
    $paragraph = [];
    foreach ($paragraphs_objects as $para) {   
      $paragraph[] = $para;
      foreach($items[$index] as $key => $values) {
        $para->set($key, $values);
      }
      $index++;
      $para->save(); 
    }    
    for($i = 0; $i < $index; $i++) {
      unset($items[$i]);
    }
    if(count($items) > 0) {
      $paragraph = self::getParagraphDetails($items, $p_type, $paragraph); 
    }         
    return $paragraph;
  }  

  public static function getParagraphDetails($items, $p_type, $paragraph = []) {
    //$paragraph = [];
    foreach($items as $key => $values) {
      $arr_paragraph = [];
      $arr_paragraph['type'] = $p_type;
      foreach($values as $field => $value) {
        $arr_paragraph[$field] = $value;
      }
      $paragraph[] = \Drupal\paragraphs\Entity\Paragraph::create($arr_paragraph);
    }
    return $paragraph;
  }
  public static function entities_import_batch_finished($success, $results, $operations) {   
    if ($success) {
      if(isset($results['count'])) {
        \Drupal::messenger()->addMessage(t('Total content created/updated') . ' : ' . $results['count'], 'status', TRUE);
      } 
      if(isset($results['error'])) {
        \Drupal::messenger()->addMessage(t('Content has not been created/updated for the below Row Number.'), 'warning', TRUE);
        foreach($results['error'] as $key => $result) {
          foreach($result as $value) {
            \Drupal::messenger()->addMessage(t('Row number') . ' : ' . $key .  ' - ' . $value, 'warning', TRUE);
          }        
        }
      }
    }
    else {      
      \Drupal::messenger()->addMessage(t('Finished with an error.'), 'error', TRUE); 
      foreach($results['error'] as $key => $result) {
        foreach($result as $value) {
          \Drupal::messenger()->addMessage(t('Row number') . ' : ' . $key .  ' - ' . $value, 'warning', TRUE);
        }        
      }
    }
    
  }
  
}
