const {
  getStudent,
  getSubject,
  getStudentsSubject,
  addStudentQuery,
  deleteStudentById,
} = require("../database/queries");

const students = [
  {
    first_name: "Ali",
    second_name: "Ali",
    location: "Gaza",
    name: "A",
  },
  {
    first_name: "Shireen",
    second_name: "Shireen",
    location: "Nazareth",
    name: "B",
  },
];
const getStudents = (req, res, next) => {
  res.send({
    data: students,
    statusCode: 200,
  });
};

const getSusbject = (req, res, next) => {};
const addStudent = (req, res, next) => {};

const deleteStudent = (req, res, next) => {};

module.exports = {
  getSusbject,
  getStudents,
  addStudent,
  deleteStudent,
};
