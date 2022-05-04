-- MySQL Workbench Forward Engineering

SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION';

-- -----------------------------------------------------
-- Schema lavie
-- -----------------------------------------------------

-- -----------------------------------------------------
-- Schema lavie
-- -----------------------------------------------------
CREATE SCHEMA IF NOT EXISTS `lavie` DEFAULT CHARACTER SET utf8 ;
USE `lavie` ;

-- -----------------------------------------------------
-- Table `lavie`.`atendimentos`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `lavie`.`atendimentos` (
  `paciente_id` INT NOT NULL AUTO_INCREMENT,
  `data_atendimento` DATE NOT NULL,
  `observacao` VARCHAR(400) NOT NULL,
  PRIMARY KEY (`paciente_id`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `lavie`.`pacientes`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `lavie`.`pacientes` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `nome` VARCHAR(90) NOT NULL,
  `email` VARCHAR(20) NOT NULL,
  `idade` DATE NOT NULL,
  `atendimentos_paciente_id` INT NOT NULL,
  PRIMARY KEY (`id`),
  INDEX `fk_paciente_atendimentos_idx` (`atendimentos_paciente_id` ASC) VISIBLE,
  CONSTRAINT `fk_paciente_atendimentos`
    FOREIGN KEY (`atendimentos_paciente_id`)
    REFERENCES `lavie`.`atendimentos` (`paciente_id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `lavie`.`psicologos`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `lavie`.`psicologos` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `nome` VARCHAR(90) NOT NULL,
  `email` VARCHAR(50) NOT NULL,
  `senha` VARCHAR(8) NOT NULL,
  `apresentacao` VARCHAR(200) NOT NULL,
  `atendimentos_paciente_id` INT NOT NULL,
  PRIMARY KEY (`id`),
  INDEX `fk_psicologos_atendimentos1_idx` (`atendimentos_paciente_id` ASC) VISIBLE,
  CONSTRAINT `fk_psicologos_atendimentos1`
    FOREIGN KEY (`atendimentos_paciente_id`)
    REFERENCES `lavie`.`atendimentos` (`paciente_id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;
