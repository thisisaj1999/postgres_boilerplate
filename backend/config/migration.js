const { Client } = require("pg");
const fs = require("fs");

const databaseMigration = {
	user: "dbadmin",
	host: "192.168.60.21",
	password: "fam@1337",
	port: 5432,
};

const dbMigration = new Client(databaseMigration);

const create_users_table = fs.readFileSync("./sql/create/create_users_table.sql").toString();
const create_images_table = fs.readFileSync("./sql/create/create_images_table.sql").toString();


dbMigration.connect((err) => {
	if (err) {
		console.log(`🔴  Connection Failed : \n`, err);
		return;
	}

	dbMigration.query(
		"SELECT 1 FROM pg_database WHERE datname = 'fam_testing'",
		(err, res) => {
			if (err) {
				console.log(`🔴  Could not check DB existence : \n`, err);
                dbMigration.end();
				return;
			}

			if (res.rowCount === 0) {
				dbMigration.query("CREATE DATABASE fam_testing", (err, res) => {
					if (err) {
						console.log(`🔴  Could not create DB : \n`, err);
                        dbMigration,end();
						return;
					}
					console.log(`🟢  DB Created Successfully`);
                    dbMigration.end();
				});
			} else {
                console.log(`🟢  DB already exists`);
                dbMigration.end();
			}
		}
	);

    const dbClient = {
        ...databaseMigration,
        database: "fam_testing"
    }

    const db = new Client(dbClient);

	db.connect((err) => {
		if (err) {
			console.log(`🔴  Connection Failed : \n`, err);
			return;
		}

		db.query(create_users_table, (err, res) => {
			if (err) {
				console.log(`🔴  Unable to create Users Table : \n`, err);
				return;
			}
			console.log(`🟢  User Table Created`);
		});

		db.query(create_images_table, (err, res) => {
			if (err) {
				console.log(`🔴  Unable to create Images Table : \n`, err);
				return;
			}
			console.log(`🟢  Images Table Created\n`);
		});
	});
});
