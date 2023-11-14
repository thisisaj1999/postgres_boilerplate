const fs = require("fs");
const db = require("../../config/dbConnection");
const path = require("path");

const createUser = async (req, res) => {
	const userData = req.body;

	if (Object.keys(userData).length === 0) {
		console.log(`🔴  createUser : User's data is required for create`);
		res.json({
			status: 300,
			message: `User's data is required for create`,
		});
		return;
	}

	const firstName = userData?.fName;
	const lastName = userData?.lName;
	const email = userData?.email;
	const phone = userData?.phone;
	const image = userData?.image;

	const insert_users_table = fs
		.readFileSync(
			path.join(__dirname, "../../sql/insert/insert_users_table.sql")
		)
		.toString();

	const insert_images_table = fs
		.readFileSync(
			path.join(__dirname, "../../sql/insert/insert_images_table.sql")
		)
		.toString();

	try {
		const isUserExists = await db.query(
			`SELECT email FROM users WHERE email = $1`,
			[email]
		);

		if (isUserExists?.rowCount === 0) {

			const userValues = [firstName, lastName, email, phone];

			const create_newUser = await db.query(
				insert_users_table,
				userValues
			);

			if (create_newUser.rows.length > 0) {
				const userId = create_newUser.rows[0].id;

				const imageValues = [image, userId];

				const create_newImage = await db.query(
					insert_images_table,
					imageValues
				);

				if (create_newImage.rowCount !== 0) {
					console.log(`🟢  createUser : Data inserted to users table`);
					res.json({
						status: 200,
						message: `Data inserted to users table`,
					});
				}
			}
		} else {
			console.log(`🔴  createUser : This email is already in use`);
			res.json({
				status: 200,
				message: `This email is already in use`,
			});
		}
	} catch (error) {
		console.log(`🔴  createUser : Unable to create a new user`, error);
		res.json({
			status: 200,
			message: `Unable to create a new user`,
			data: error.message,
		});
	}

};

module.exports = createUser;
