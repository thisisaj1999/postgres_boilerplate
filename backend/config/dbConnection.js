const { Client } = require("pg");

const databaseClient = {
	user: "dbadmin",
	host: "192.168.60.21",
	password: "fam@1337",
	database: "fam_testing",
	PORT: 5432,
};

const db = new Client(databaseClient);

db.connect();

module.exports = db;
