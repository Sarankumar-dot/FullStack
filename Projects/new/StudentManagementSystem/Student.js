require("dotenv").config();

const express = require("express");
const mysql = require("mysql2/promise");
const cors = require("cors");

const app = express();

app.use(express.json());
app.use(cors());

let db;

// Database Connection
async function connectDB() {
  try {
    db = mysql.createPool({
      host: process.env.DB_HOST,
      user: process.env.DB_USER,
      password: process.env.DB_PASSWORD,
      database: process.env.DB_NAME,

      connectionLimit: 10,
      waitForConnections: true,
      queueLimit: 0,
    });

    console.log("Database Connected");
  } catch (err) {
    console.log(err.message);
  }
}

connectDB();

// =========================
// Add Student
// =========================

app.post("/addStudent", async (req, res) => {
  const { name, age, email } = req.body;

  if (!name || !age || !email) {
    return res.status(400).json({
      message: "All fields are required",
    });
  }

  try {
    const [result] = await db.query(
      "INSERT INTO student(name, age, email) VALUES (?, ?, ?)",
      [name, age, email],
    );

    res.status(201).json({
      message: "Student added successfully",
      studentId: result.insertId,
    });
  } catch (err) {
    res.status(500).json({
      message: err.message,
    });
  }
});

// =========================
// Get All Students
// =========================

app.get("/getAllStudents", async (req, res) => {
  try {
    const [rows] = await db.query("SELECT * FROM student");

    res.status(200).json(rows);
  } catch (err) {
    res.status(500).json({
      message: err.message,
    });
  }
});

// =========================
// Get Student By ID
// =========================

app.get("/getStudent/:id", async (req, res) => {
  const { id } = req.params;

  try {
    const [rows] = await db.query("SELECT * FROM student WHERE id = ?", [id]);

    if (rows.length === 0) {
      return res.status(404).json({
        message: "Student not found",
      });
    }

    res.status(200).json(rows[0]);
  } catch (err) {
    res.status(500).json({
      message: err.message,
    });
  }
});

// =========================
// Update Student Name
// =========================

app.put("/updateStudent", async (req, res) => {
  const { id, name } = req.body;

  if (!id || !name) {
    return res.status(400).json({
      message: "Id and name are required",
    });
  }

  try {
    const [result] = await db.query(
      "UPDATE student SET name = ? WHERE id = ?",
      [name, id],
    );

    if (result.affectedRows === 0) {
      return res.status(404).json({
        message: "Student not found",
      });
    }

    res.status(200).json({
      message: "Update successful",
    });
  } catch (err) {
    res.status(500).json({
      message: err.message,
    });
  }
});

// =========================
// Update Student Email
// =========================

app.put("/updateEmail/:id", async (req, res) => {
  const { id } = req.params;
  const { email } = req.body;

  if (!email) {
    return res.status(400).json({
      message: "Email is required",
    });
  }

  try {
    const [result] = await db.query(
      "UPDATE student SET email = ? WHERE id = ?",
      [email, id],
    );

    if (result.affectedRows === 0) {
      return res.status(404).json({
        message: "Student not found",
      });
    }

    res.status(200).json({
      message: "Email updated successfully",
    });
  } catch (err) {
    res.status(500).json({
      message: err.message,
    });
  }
});

// =========================
// Delete Student
// =========================

app.delete("/deleteStudent/:id", async (req, res) => {
  const { id } = req.params;

  try {
    const [result] = await db.query("DELETE FROM student WHERE id = ?", [id]);

    if (result.affectedRows === 0) {
      return res.status(404).json({
        message: "Student not found",
      });
    }

    res.status(200).json({
      message: "Delete successful",
    });
  } catch (err) {
    res.status(500).json({
      message: err.message,
    });
  }
});

// =========================
// Student Count
// =========================

app.get("/studentCount", async (req, res) => {
  try {
    const [rows] = await db.query(
      "SELECT COUNT(*) AS totalStudents FROM student",
    );

    res.status(200).json(rows[0]);
  } catch (err) {
    res.status(500).json({
      message: err.message,
    });
  }
});

// sending employee attendance details

app.get("/employeeAttendance", async (req, res) => {
  try {
    const query = `SELECT
                employee.name,
                EmployeeAttendance.status
            FROM employee
            INNER JOIN EmployeeAttendance
            ON employee.id =
            EmployeeAttendance.employee_id`;

    const [rows] = await db.query(query);

    res.status(200).json(rows);
  } catch (e) {
    res.status(500).json({
      message: e.message,
    });
  }
});

// PAGINATION

app.get("/getStudents", async (req, res) => {
  const page = parseInt(req.query.page);
  const limit = parseInt(req.query.limit);

  const offset = (page - 1) * limit;
  const query = `SELECT * from students limit ? offset ?`;

  try {
    const [rows] = await db.query(query, [limit, offset]);

    res.json(rows);
  } catch (e) {
    res.json({
      message: e.message,
    });
  }
});

// =========================
// Server
// =========================

app.listen(process.env.PORT, () => {
  console.log(`Server running on port ${process.env.PORT}`);
});
