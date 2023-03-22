<?php

namespace Drupal\entities_import;


/**
 * Defines class to get Entity Translation Details. 
 */
class EntityTranslationDetails {

  /**
   * Defines method to check Node Exists.
   */
  public static function checkIfTranslationExists($node, $langcode) {
    return $node->hasTranslation($langcode);
  }

  /**
   * Get Entity Translation.
   */
  public static function getEntityTranslation($node, $langcode) {
    return $node->getTranslation($langcode);
  }

  /**
   * Add Entity Translation.
   */
  public static function addEntityTranslation($node, $langcode) {
    return $node->addTranslation($langcode);
  }

   /**
   * Add Entity Translation.
   */
  public static function getSiteLanguagesCode() {
    $languages = \Drupal::languageManager()->getLanguages();
    $lang_codes = [];
    foreach ($languages as $language) {
      $lang_codes[] = $language->getId();
    } 
    return $lang_codes;
  }
  
}
