-- MySQL Workbench Synchronization
-- Generated: 2023-01-14 14:29
-- Model: New Model
-- Version: 1.0
-- Project: HR_Unified
-- Author: Kunal Dixit

SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION';

ALTER TABLE `HR_Unified`.`Applications` 
DROP FOREIGN KEY `fk_Applications_HR_Agency_Employee1`,
DROP FOREIGN KEY `fk_Applications_Jobs1`;

ALTER TABLE `HR_Unified`.`Employees_HR_Agency` 
DROP FOREIGN KEY `fk_HR_Agency_Employee_HR_Agency1`;

ALTER TABLE `HR_Unified`.`Candidates_HR_Agency-LINK_Table` 
DROP FOREIGN KEY `fk_Candidates_has_HR_Agency_Candidates`;

ALTER TABLE `HR_Unified`.`Candidates` 
CHARACTER SET = utf8 , COLLATE = utf8_general_ci ;

ALTER TABLE `HR_Unified`.`Jobs` 
CHARACTER SET = utf8 , COLLATE = utf8_general_ci ;

ALTER TABLE `HR_Unified`.`Applications` 
CHARACTER SET = utf8 , COLLATE = utf8_general_ci ,
ADD COLUMN `application_outcome` VARCHAR(45) NULL DEFAULT NULL AFTER `Jobs_order_id`,
CHANGE COLUMN `application_date` `application_initiation_date` DATETIME NULL DEFAULT NULL ;

ALTER TABLE `HR_Unified`.`HR_Agencies` 
CHARACTER SET = utf8 , COLLATE = utf8_general_ci ;

ALTER TABLE `HR_Unified`.`Employees_HR_Agency` 
CHARACTER SET = utf8 , COLLATE = utf8_general_ci ;

ALTER TABLE `HR_Unified`.`Candidates_HR_Agency-LINK_Table` 
CHARACTER SET = utf8 , COLLATE = utf8_general_ci ,
DROP COLUMN `target_position`,
ADD COLUMN `position_job` VARCHAR(100) NOT NULL AFTER `HR_Agency_agency_id`;

CREATE TABLE IF NOT EXISTS `HR_Unified`.`Skill_set_level` (
  `skill_lvl_id` INT(11) NOT NULL AUTO_INCREMENT,
  `skill_level` VARCHAR(45) NOT NULL,
  PRIMARY KEY (`skill_lvl_id`))
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8;

CREATE TABLE IF NOT EXISTS `HR_Unified`.`Skills_Table` (
  `skill_id` INT(11) NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(150) NOT NULL,
  PRIMARY KEY (`skill_id`))
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8;

CREATE TABLE IF NOT EXISTS `HR_Unified`.`Candidates_has_Skills_Table` (
  `Candidates_candidate_id` INT(11) NOT NULL,
  `Skills_Table_skill_id` INT(11) NOT NULL,
  `Skill_set_level_skill_lvl_id` INT(11) NOT NULL,
  `last_assessment_date` DATETIME NOT NULL,
  PRIMARY KEY (`Candidates_candidate_id`, `Skills_Table_skill_id`),
  INDEX `fk_Candidates_has_Skills_Table_Skills_Table1_idx` (`Skills_Table_skill_id` ASC) VISIBLE,
  INDEX `fk_Candidates_has_Skills_Table_Candidates1_idx` (`Candidates_candidate_id` ASC) VISIBLE,
  INDEX `fk_Candidates_has_Skills_Table_Skill_set_level1_idx` (`Skill_set_level_skill_lvl_id` ASC) VISIBLE,
  CONSTRAINT `fk_Candidates_has_Skills_Table_Candidates1`
    FOREIGN KEY (`Candidates_candidate_id`)
    REFERENCES `HR_Unified`.`Candidates` (`candidate_id`)
    ON DELETE NO ACTION
    ON UPDATE CASCADE,
  CONSTRAINT `fk_Candidates_has_Skills_Table_Skills_Table1`
    FOREIGN KEY (`Skills_Table_skill_id`)
    REFERENCES `HR_Unified`.`Skills_Table` (`skill_id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_Candidates_has_Skills_Table_Skill_set_level1`
    FOREIGN KEY (`Skill_set_level_skill_lvl_id`)
    REFERENCES `HR_Unified`.`Skill_set_level` (`skill_lvl_id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8;

ALTER TABLE `HR_Unified`.`Applications` 
ADD CONSTRAINT `fk_Applications_HR_Agency_Employee1`
  FOREIGN KEY (`HR_Agency_Employee_emp_id`)
  REFERENCES `HR_Unified`.`Employees_HR_Agency` (`emp_id`)
  ON DELETE NO ACTION
  ON UPDATE CASCADE,
ADD CONSTRAINT `fk_Applications_Jobs1`
  FOREIGN KEY (`Jobs_order_id`)
  REFERENCES `HR_Unified`.`Jobs` (`job_id`)
  ON DELETE NO ACTION
  ON UPDATE CASCADE;

ALTER TABLE `HR_Unified`.`Employees_HR_Agency` 
ADD CONSTRAINT `fk_HR_Agency_Employee_HR_Agency1`
  FOREIGN KEY (`HR_Agency_agency_id`)
  REFERENCES `HR_Unified`.`HR_Agencies` (`agency_id`)
  ON DELETE NO ACTION
  ON UPDATE CASCADE;

ALTER TABLE `HR_Unified`.`Candidates_HR_Agency-LINK_Table` 
ADD CONSTRAINT `fk_Candidates_has_HR_Agency_Candidates`
  FOREIGN KEY (`Candidates_candidate_id`)
  REFERENCES `HR_Unified`.`Candidates` (`candidate_id`)
  ON DELETE RESTRICT
  ON UPDATE CASCADE;


SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;
