const {
  getStudent,
  getSubject,
  getStudentsSubject,
  addStudentQuery,
  deleteStudentById,
} = require("../database/queries");

const getStudentsSubjects = (req, res, next) => {
  getStudentsSubject()
    .then(({ rows }) => {
      console.log(rows);
      return res.send({
        data: rows,
        statusCode: 200,
      });
    })

    .catch((err) => next(err));
};
const getStudents = (req, res, next) => {
  getStudent()
    .then(({ rows }) =>
      res.send({
        data: rows,
        statusCode: 200,
      })
    )

    .catch((err) => next(err));
};

const getSusbject = (req, res, next) => {
  getSubject()
    .then(({ rows }) =>
      res.send({
        data: rows,
        statusCode: 200,
      })
    )

    .catch((err) => next(err));
};
const addStudent = (req, res, next) => {
  const { classId, firstName, secondName, location } = req.body;
  addStudentQuery(classId, firstName, secondName, location)
    .then(() => res.redirect("/"))

    .catch(next);
};

const deleteStudent = (req, res, next) => {
  const { id } = req.params;
  deleteStudentById(id)
    .then(() => res.redirect("/"))
    .catch(next);
};

module.exports = {
  getStudentsSubjects,
  getSusbject,
  getStudents,
  addStudent,
  deleteStudent,
};
