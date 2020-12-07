const router = require("express").Router();
const path = require("path");

/*
GET: /Notes
POST: /Note
*/

// router.get("/Notes", (req, res, next) => {});

// router.post("/note", (req, res, next) => {});

router.use((req, res, next) => {
  res.sendFile(path.join(__dirname, "..", "public", "404.html"));
});

router.use((err, req, res, next) => {
  res.status(500).send({ message: "internal server error" });
});

module.exports = router;
