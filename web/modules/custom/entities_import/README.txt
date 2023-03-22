CONTENTS OF THIS FILE
---------------------

 * Introduction
 * Requirements
 * Installation
 * Configuration
 * Maintainers

INTRODUCTION
------------

It provides user interface to import data from excel or csv file.

It support drupal core and paragraph fields.

Example :
 
         - Text
         - Reference(content/taxonomy)
         - Number
         - Date and Date range
         - file/image        
         - paragraph        

More info:

 * For a full description of the module, visit [the project page]
   (https://www.drupal.org/project/entities_import).  

REQUIREMENTS
------------

This module requires phpoffice/phpspreadsheet library.

INSTALLATION
------------

 * Install the Entities Import module as you would normally install a 
   contributed Drupal module. Visit https://www.drupal.org/node/1897420 
   for further information.    

CONFIGURATION
-------------
  1) Go to /admin/structure/entities-import and click "Add Entities Import Type" button.
  2) Choose entity type.
  3) Please mention the field name in the "Unique value fields".(example: field_tags,title) and
     add multiple field by next line. This field is used to update the content/taxonomy if already exists.
  4) Please mention "Title Field Name" for generating title/name for content/taxonomy. If you fill this 
     field as blank, then "Unique value fields" will be used to generate title/name.
  5) Please mention the folder path for file/image field (example: public://article).
     We need to mention the file/image name in excel. We need to move the file/image
     manually to the server in the mentioned folder path.
  6) After saving entity type, click the edit button to see the "Import article" button.
  7) Click the "Import article" button to import content/taxonomy with current configuration.
  8) You can add multiple configuration entity import type to import content/taxonomy.
  9) Sample template file is available in doc folder. Please follow the same structure in the template.


MAINTAINERS
-----------

Current maintainers:
  Elavarasan R - https://www.drupal.org/user/1902634
