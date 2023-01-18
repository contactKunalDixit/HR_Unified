-- MySQL Workbench Forward Engineering

SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION';

-- -----------------------------------------------------
-- Schema HR_Unified
-- -----------------------------------------------------

-- -----------------------------------------------------
-- Schema HR_Unified
-- -----------------------------------------------------
CREATE SCHEMA IF NOT EXISTS `HR_Unified` DEFAULT CHARACTER SET utf8 ;
USE `HR_Unified` ;

-- -----------------------------------------------------
-- Table `HR_Unified`.`Candidates`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `HR_Unified`.`Candidates` (
  `candidate_id` INT NOT NULL AUTO_INCREMENT,
  `first_name` VARCHAR(50) NOT NULL,
  `last_name` VARCHAR(50) NOT NULL,
  `email` VARCHAR(255) NOT NULL,
  `age` INT NOT NULL,
  `Yrs_in_current_job` TINYINT NOT NULL,
  `total_Yrs_experience` INT NOT NULL,
  `field_of_work` VARCHAR(80) NOT NULL,
  `education_level` VARCHAR(45) NOT NULL,
  `Address - Unit/street` VARCHAR(150) NOT NULL,
  `Address - city` VARCHAR(60) NOT NULL,
  `zip_code` VARCHAR(30) NOT NULL,
  `Address - state` VARCHAR(50) NOT NULL,
  `Address - country` VARCHAR(50) NOT NULL,
  PRIMARY KEY (`candidate_id`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `HR_Unified`.`Jobs`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `HR_Unified`.`Jobs` (
  `job_id` INT NOT NULL AUTO_INCREMENT,
  `Organisation_name` VARCHAR(90) NOT NULL,
  `job_title` VARCHAR(90) NOT NULL,
  `job_requisition_date` DATETIME NOT NULL,
  PRIMARY KEY (`job_id`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `HR_Unified`.`HR_Agencies`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `HR_Unified`.`HR_Agencies` (
  `agency_id` INT NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(250) NOT NULL,
  `phone` INT NOT NULL,
  `unit_street_address` VARCHAR(145) NOT NULL,
  `city_address` VARCHAR(45) NOT NULL,
  `zip_code` VARCHAR(45) NOT NULL,
  `state` VARCHAR(45) NOT NULL,
  `country` VARCHAR(45) NOT NULL,
  PRIMARY KEY (`agency_id`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `HR_Unified`.`Employees_HR_Agency`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `HR_Unified`.`Employees_HR_Agency` (
  `emp_id` INT NOT NULL AUTO_INCREMENT,
  `first_name` VARCHAR(100) NOT NULL,
  `last_name` VARCHAR(100) NOT NULL,
  `phone` INT NOT NULL,
  `manager_id` VARCHAR(100) NOT NULL,
  `HR_Agency_agency_id` INT NOT NULL,
  PRIMARY KEY (`emp_id`),
  INDEX `fk_HR_Agency_Employee_HR_Agency1_idx` (`HR_Agency_agency_id` ASC) VISIBLE,
  CONSTRAINT `fk_HR_Agency_Employee_HR_Agency1`
    FOREIGN KEY (`HR_Agency_agency_id`)
    REFERENCES `HR_Unified`.`HR_Agencies` (`agency_id`)
    ON DELETE NO ACTION
    ON UPDATE CASCADE)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `HR_Unified`.`Applications`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `HR_Unified`.`Applications` (
  `application_id` INT NOT NULL AUTO_INCREMENT,
  `application_date` DATETIME NULL,
  `HR_Agency_Employee_emp_id` INT NOT NULL,
  `Jobs_order_id` INT NOT NULL,
  PRIMARY KEY (`application_id`),
  INDEX `fk_Applications_HR_Agency_Employee1_idx` (`HR_Agency_Employee_emp_id` ASC) VISIBLE,
  INDEX `fk_Applications_Jobs1_idx` (`Jobs_order_id` ASC) VISIBLE,
  CONSTRAINT `fk_Applications_HR_Agency_Employee1`
    FOREIGN KEY (`HR_Agency_Employee_emp_id`)
    REFERENCES `HR_Unified`.`Employees_HR_Agency` (`emp_id`)
    ON DELETE NO ACTION
    ON UPDATE CASCADE,
  CONSTRAINT `fk_Applications_Jobs1`
    FOREIGN KEY (`Jobs_order_id`)
    REFERENCES `HR_Unified`.`Jobs` (`job_id`)
    ON DELETE NO ACTION
    ON UPDATE CASCADE)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `HR_Unified`.`Candidates_HR_Agency-LINK_Table`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `HR_Unified`.`Candidates_HR_Agency-LINK_Table` (
  `Candidates_candidate_id` INT NOT NULL,
  `HR_Agency_agency_id` INT NOT NULL,
  INDEX `fk_Candidates_has_HR_Agency_HR_Agency1_idx` (`HR_Agency_agency_id` ASC) VISIBLE,
  INDEX `fk_Candidates_has_HR_Agency_Candidates_idx` (`Candidates_candidate_id` ASC) VISIBLE,
  PRIMARY KEY (`Candidates_candidate_id`, `HR_Agency_agency_id`),
  CONSTRAINT `fk_Candidates_has_HR_Agency_Candidates`
    FOREIGN KEY (`Candidates_candidate_id`)
    REFERENCES `HR_Unified`.`Candidates` (`candidate_id`)
    ON DELETE RESTRICT
    ON UPDATE CASCADE,
  CONSTRAINT `fk_Candidates_has_HR_Agency_HR_Agency`
    FOREIGN KEY (`HR_Agency_agency_id`)
    REFERENCES `HR_Unified`.`HR_Agencies` (`agency_id`)
    ON DELETE RESTRICT
    ON UPDATE CASCADE)
ENGINE = InnoDB;


SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;
