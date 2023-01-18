-- MySQL Workbench Synchronization
-- Generated: 2023-01-13 16:35
-- Model: New Model
-- Version: 1.0
-- Project: Name of the project
-- Author: Kunal Dixit

SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION';

ALTER TABLE `sql_store`.`order_item_notes` 
DROP COLUMN `product_id`,
DROP COLUMN `order_Id`,
ADD COLUMN `order_items_order_id` INT(11) NOT NULL AFTER `note_id`,
ADD COLUMN `order_items_product_id` INT(11) NOT NULL AFTER `order_items_order_id`,
ADD INDEX `fk_order_item_notes_order_items1_idx` (`order_items_order_id` ASC, `order_items_product_id` ASC) VISIBLE;
;

ALTER TABLE `sql_store`.`order_item_notes` 
ADD CONSTRAINT `fk_order_item_notes_order_items1`
  FOREIGN KEY (`order_items_order_id` , `order_items_product_id`)
  REFERENCES `sql_store`.`order_items` (`order_id` , `product_id`)
  ON DELETE NO ACTION
  ON UPDATE CASCADE;


SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;
