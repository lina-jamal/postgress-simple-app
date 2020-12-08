const router = require("express").Router();
const path = require("path");
const {
  getSusbject,
  getStudents,
  addStudent,
  deleteStudent,
} = require("./controller");
/*
GET: /students 
POST: /student
delete /student/:id
*/

router.get("/students", getStudents);
router.get("/subjects", getSusbject);
router.post("/student", addStudent);
router.delete("/student/:id", deleteStudent);

router.use((req, res, next) => {
  res.sendFile(path.join(__dirname, "..", "public", "404.html"));
});

router.use((err, req, res, next) => {
  console.log(err);
  res.status(500).send({ message: "internal server error" });
});

module.exports = router;
