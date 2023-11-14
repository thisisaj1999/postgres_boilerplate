UPDATE images
SET image_url = COALESCE($1, image_url)
WHERE user_id = $2;