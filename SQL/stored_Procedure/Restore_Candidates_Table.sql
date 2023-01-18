USE HR_Unified;
DROP PROCEDURE IF EXISTS Restore_Candidates;

DELIMITER $$

CREATE PROCEDURE `Restore_Candidates`()
BEGIN
SELECT * FROM HR_Unified.Candidates;
CALL insertinsert_random_data_random_data();
SELECT * FROM HR_Unified.Candidates;
END $$
DELIMITER ;

