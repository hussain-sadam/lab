<?php

namespace Drupal\entities_import;

use Drupal\file\Entity\File;

/**
 * Defines File functionalities. 
 */
class FileDetails {  

  /**
   * Create File Details.
   */
  public static function create($filename, $file_folder_path) {
    $file = File::create();
    $destination = $file_folder_path . '/' . $filename;
    $file->setFileUri($destination);
    $file->setFileName($filename);
    $file->setPermanent();
    $file->save();  
    return $file->id();
  }

  /**
   * Update File Details.
   */
  public static function Update($items = [], $fileIDs, $file_folder_path) {    
    $index = 0;
    $items_count = count($items);
    $arrFileID = [];
    foreach($fileIDs as $fid) {
      if(isset($items[$index])) {
        $arrFileID[] = $fid['target_id'];       
        $destination = $file_folder_path . '/' . $items[$index];
        $file = File::load($fid['target_id']);
        if(!empty($file)) {
          $file->setFileUri($destination);
          $file->setFileName($items[$index]);
          $file->setPermanent();
          $file->save(); 
        }
      }      
      $index++;
    }
    for($i = 0; $i < $index; $i++) {
      if(isset($items[$i])) {        
        unset($items[$i]);
      }      
    }         
    if(count($items) > 0) {     
      foreach($items as $filename) {
        $arrFileID[] = self::create($filename, $file_folder_path); 
      }      
    } 
    if(count($fileIDs) > $items_count) {
      for($i = 0; $i < $items_count; $i++) {
        if(isset($fileIDs[$i])) {        
          unset($fileIDs[$i]);
        }      
      }
      self::delete($fileIDs);     
    }     
    return $arrFileID;
  }

  /**
   * Delete Files.
   */
  public static function delete($fids) {
    foreach ($fids as $key => $value) {
      $file = File::load($value['target_id']);
      if(!empty($file)) {
        $file->delete();
      }      
    }
  } 
  
}
