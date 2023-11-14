const db = require("../../config/dbConnection");

const getAllUsers = async (req, res) => {
	const allUsersData = await db.query("Select * from users");

	if (allUsersData?.rows.length > 0) {
		const allImagesData = await db.query("Select * from images");

		if (allImagesData?.rows.length > 0) {
			console.log(`🟢  getAllUsers : All users data fetched successfully`);
			res.json({
				status: 200,
				message: `All users data fetched successfully`,
				data: {
					user_table: allUsersData.rows,
					image_table: allImagesData.rows,
				},
			});
		}
	} else {
		console.log(`🔴  getAllUsers : No user found`);
		res.json({
			status: 404,
			message: `No user found`,
		});
	}
};

module.exports = getAllUsers;
