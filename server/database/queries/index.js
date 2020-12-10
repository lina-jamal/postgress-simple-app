const connection = require("../config/connection");

const getStudent = () => {
  const sql = {
    text:
      " SELECT students.first_name ,students.second_name,students.location,class.name from students inner join class ON class.id = students.class_id  ",
  };
  return connection.query(sql);
};
const getSubject = () => {
  const sql = {
    text: "SELECT * FROM subjects ",
  };
  return connection.query(sql);
};

const addStudentQuery = (classId, firstName, secondName, location) => {
  return connection.query({
    text:
      "INSERT INTO students (class_id,first_name, second_name, location) values ($1, $2, $3,$4) RETURNING *",
    values: [classId, firstName, secondName, location],
  });
};

const getStudentsSubject = () => {
  const sql = {
    text:
      "SELECT students.first_name ,students.second_name,students.location,subjects.name as subject_name,class.name as class_name from students inner join class ON class.id = students.class_id inner join student_subject  ON students.id = student_subject.student_id inner join subjects ON subjects.id = student_subject.subject_id",
  };
  return connection.query(sql);
};
const deleteStudentById = (id) => {
  const sql = {
    text: "DELETE FROM students WHERE id =$1 RETURNING id",
    values: [id],
  };

  return connection.query(sql);
};

module.exports = {
  getStudent,
  getSubject,
  getStudentsSubject,
  addStudentQuery,
  deleteStudentById,
};
