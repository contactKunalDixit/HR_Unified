DELIMITER $$
CREATE DEFINER=`root`@`localhost` FUNCTION `insert_random_data_in_Skills_Table`() 
RETURNS int
    READS SQL DATA
BEGIN
    DECLARE counter INT DEFAULT 0;
    WHILE (counter < 100)
    DO
        SET counter = counter + 1;
        SET @name = CONCAT('Skill', counter);
        INSERT INTO Skills_Table (name)
        VALUES ( @name)
    END WHILE;
    RETURN counter;
END$$
DELIMITER ;
