<?php
namespace Drupal\entities_import\Entity;

use Drupal\Core\Config\Entity\ConfigEntityBase;
use Drupal\entities_import\Entity\EntitiesImportTypeInterface;

/**
 * Defines the Entities Import Type entity.
 *
 * @ConfigEntityType(
 *   id = "entities_import_type",
 *   label = @Translation("Entities Import Type"),
 *   handlers = {
 *     "view_builder" = "Drupal\Core\Entity\EntityViewBuilder",
 *     "list_builder" = "Drupal\entities_import\EntitiesImportTypeListBuilder",
 *     "form" = {
 *       "default" = "Drupal\entities_import\Form\EntitiesImportTypeForm",
 *       "add" = "Drupal\entities_import\Form\EntitiesImportTypeForm",
 *       "edit" = "Drupal\entities_import\Form\EntitiesImportTypeForm",
 *       "delete" = "Drupal\entities_import\Form\EntitiesImportTypeDeleteForm",
 *     },
 *     "route_provider" = {
 *       "html" = "Drupal\entities_import\EntitiesImportTypeHtmlRouteProvider",
 *     },
 *   },
 *   config_prefix = "entities_import_type",
 *   admin_permission = "administer site configuration",
 *   entity_keys = {
 *     "id" = "id",
 *     "label" = "label",
 *     "uuid" = "uuid"
 *   },   
 *   links = {     
 *     "canonical" = "/admin/structure/entities-import/{entities_import_type}",
 *     "add-form" = "/admin/structure/entities-import/add",
 *     "edit-form" = "/admin/structure/entities-import/{entities_import_type}/edit",
 *     "delete-form" = "/admin/structure/entities-import/{entities_import_type}/delete",
 *     "collection" = "/admin/structure/entities-import" 
 *   }
 * )
 */
class EntitiesImportType extends ConfigEntityBase implements EntitiesImportTypeInterface {

  /**
   * The Services ID.
   *
   * @var string
   */
  protected $id;

  /**
   * The Services label.
   *
   * @var string
   */
  protected $label;

  // Your specific configuration property get/set methods go here,
  // implementing the interface.
}