<?php

namespace Drupal\entities_import;

/**
 * Defines Import Properties. 
 */
final class ImportUtilities {
  
  /**
   * File Upload Url.
   *
   * @var string
   */

  const FILE_UPLOAD_URL = 'public://entities-import/';  

  /**
   * File Upload Url.
   *
   * @var string
   */

  const ENTITY_FILE_UPLOAD_URL = 'public://'; 

  /**
   * Seperator for Multi value fields.
   *
   * @var string
   */

  const SEPERATOR_MULTIVALUE_FIELD = '|'; 

  /**
   * Seperator for Multi value Reference fields.
   *
   * @var string
   */

  const SEPERATOR_MULTIVALUE_REFERENCE_FIELD = '|';

  /**
   * Seperator for Date range fields.
   *
   * @var string
   */

  const SEPERATOR_DATERANGE_FIELD = '|';

  /**
   * File upload format.
   *
   * @var Array
   */
  const FILE_UPLOAD_FORMAT =  ['xlsx xls csv']; 

}
