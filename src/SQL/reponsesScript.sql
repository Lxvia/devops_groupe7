DELIMITER //
CREATE PROCEDURE InsertResponse(
    IN formId INT,
    IN questionId INT,
    IN userId INT,
    IN responseText TEXT
)
BEGIN
    DECLARE responseValue INT;

    -- Assign response_value based on the response text
    IF responseText = 'Oui\' THEN
        SET responseValue = 2;
    ELSEIF responseText = 'Ja\' THEN
        SET responseValue = 0;
    ELSEIF responseText = 'N\' THEN
        SET responseValue = 0;
    ELSEIF responseText = 'Pa\' THEN
    SET responseValue = 0;ELSEIF responseText = 'Abs\' THEN
        SET responseValue = 0;
    ELSE
        SET responseValue = 1; -- or handle other cases if necessary
    END IF;

    -- Insert the response into the Responses table
    INSERT INTO Responses (form_id, question_id, user_id, response_text, response_value, submitted_at)
    VALUES (formId, questionId, userId, responseText, responseValue, CURRENT_TIMESTAMP);
END //
DELIMITER ;

DELIMITER //

CREATE PROCEDURE InsertResponsesFromSheet(
    IN formId INT,
    IN sheetData JSON
)
BEGIN
    DECLARE i INT DEFAULT 0;
    DECLARE responseText TEXT;
    DECLARE questionId INT;
    DECLARE userId INT;
    DECLARE responseValue INT;

    -- Loop through each row in the JSON array
    WHILE i < JSON_LENGTH(sheetData) DO
        SET questionId = JSON_UNQUOTE(JSON_EXTRACT(sheetData, CONCAT('$[', i, '].questionId')));
        SET userId = JSON_UNQUOTE(JSON_EXTRACT(sheetData, CONCAT('$[', i, '].userId')));
        SET responseText = JSON_UNQUOTE(JSON_EXTRACT(sheetData, CONCAT('$[', i, '].responseText')));

        -- Determine response value based on response text
        IF responseText = 'Oui, c\'est essentiel' THEN
            SET responseValue = 2;
        ELSEIF responseText = 'Oui, mais ce n\'est pas au centre de nos process' THEN
            SET responseValue = 1;
        ELSEIF responseText = 'Non' THEN
            SET responseValue = 0;
        ELSE
            SET responseValue = NULL;
        END IF;

        -- Insert the response into the Responses table
        INSERT INTO Responses (form_id, question_id, user_id, response_text, response_value, submitted_at)
        VALUES (formId, questionId, userId, responseText, responseValue, CURRENT_TIMESTAMP);

        SET i = i + 1;
    END WHILE;
END //

DELIMITER ;