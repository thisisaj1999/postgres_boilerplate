INSERT INTO
    users (first_name, last_Name, email, phone)
VALUES
    ($1, $2, $3, $4) RETURNING id;