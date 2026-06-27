const exp = require("express");
const cors = require("cors");
const mysql = require("mysql2");

const app = exp();

app.use(cors());
app.use(exp.json());

const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "7639",
  database: "studentdb",
});

db.connect((err) => {
  if (err) {
    console.log(err.message);
  } else {
    console.log("Sql Connected");
  }
});

app.post("/students", (req, res) => {
  const { name, email } = req.body;

  const sql = "INSERT INTO students(name,email) values (?,?)";

  db.query(sql, [name, email], (err, result) => {
    if (err) {
      console.log(err.message);
      res.status(500).json({
        message: "Error inserting data",
      });
    } else {
      res.json({
        message: "Student Registered",
      });
    }
  });
});

app.listen(3000, () => {
  console.log("server is listening");
});
