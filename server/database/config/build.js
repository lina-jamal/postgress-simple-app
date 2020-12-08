const { readFileSync } = require("fs");
const { join } = require("path");

//import the connection
const connection = require("./connection");

//make db build
// const dbBuild = () => {}
const dbBuild = () => {
  const dbFile = readFileSync(join(__dirname, "student.sql")).toString();
  const fakeData = readFileSync(join(__dirname, "fakedata.sql")).toString();

  return connection.query(dbFile).then(() => connection.query(fakeData));
};

module.exports = dbBuild;
