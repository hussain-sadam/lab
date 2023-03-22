<?php

namespace Drupal\entities_import;

use Drupal\entities_import\ImportUtilities;
use PhpOffice\PhpSpreadsheet\IOFactory;

/**
 * Defines class to Read Excel. 
 */
class ReadExcel {

  /**
   * Defines method to Read Excel. 
   */
  public static function readExcelData($file_name) {    
    $inputFileName = \Drupal::service('file_system')->realpath($file_name);
    $spreadsheet = IOFactory::load($inputFileName);
    $sheetData = $spreadsheet->getActiveSheet();	
    $objPHPExcel = $spreadsheet->getActiveSheet()->getMergeCells();	
  
    $rows = array();
    //$cellIterator->setIterateOnlyExistingCells(true);
		foreach ($sheetData->getRowIterator() as $row) {     
      $cellIterator = $row->getCellIterator();
      $cellIterator->setIterateOnlyExistingCells(FALSE);
			$cells = [];
			foreach ($cellIterator as $cell) {
				if (\PhpOffice\PhpSpreadsheet\Shared\Date::isDateTime($cell)) {
          $cells[] = $cell->getFormattedValue();
        }
        else {
          $cells[] = trim($cell->getValue());
        }
			}
      $rows[] = $cells;		   
    }
    $headers = array_shift($rows);
    $items['header'] = $headers; 
    // Read from second row.
    $headers = array_shift($rows);
    $items['fields'] = $headers; 
    $results = array_map(function($x) use ($headers){
      return array_combine($headers, $x);
    }, $rows);
    $items['results'] = $results;    
    return $items;
  }
  
}
