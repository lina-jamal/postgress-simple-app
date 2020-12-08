require("env2")("./config.env");

const { Pool } = require("pg");
const { TEST_DB_URL, DATABASE_URL, DB_URL, NODE_ENV } = process.env;

let dbUrl;
switch (NODE_ENV) {
  case "production":
    dbUrl = DB_URL;
    break;
  case "development":
    dbUrl = DATABASE_URL;
    break;
  case "test":
    dbUrl = TEST_DB_URL;
    break;
  default:
    throw new Error("No Database URL!!!");
}

const options = {
  connectionString: dbUrl,
};

module.exports = new Pool(options);
