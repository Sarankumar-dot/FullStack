const exp = require("express");
const cors = require("cors");
const mysql = require("mysql2/promise");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const SECRET_KEY = "mysecretkey";

const app = exp();

app.use(exp.json());
app.use(cors());

let db;

async function connect() {
  try {
    db = await mysql.createConnection({
      host: "localhost",
      user: "root",
      password: "7639",
      database: "studentdb",
    });
    console.log("database connected successfully");
  } catch (e) {
    console.log(e.message);
  }
}

connect();

function verifyToken(req, res, next) {
  const authHeader = req.headers.authorization;
  console.log(req.headers.authorization);
  const token = authHeader.split(" ")[1];
 

  if (!token) {
    res.status(404).json({
      message: "token not found",
    });
  }

  try {
    const verifyToken = jwt.verify(token, SECRET_KEY);

    req.user = verifyToken;
    next();
  } catch (e) {
    return res.json({
      message: "invalid token",
    });
  }
}

app.post("/register", async (req, res) => {
  const { email, password } = req.body;

  if (!email || !password) {
    return res.status(400).json({
      message: "Email and password are required",
    });
  }

  const check = "select * from login where email = ?";
  const [rows] = await db.query(check, [email]);

  if (rows.length > 0) {
    return res.status(409).json({
      message: "email already exists",
    });
  }

  try {
    const hash = await bcrypt.hash(password, 10);
    console.log(hash);
    const query = "insert into login(email,password) values (?,?)";
    const result = await db.query(query, [email, hash]);

    res.status(201).json({
      message: "user registered",
    });
  } catch (e) {
    res.status(400).json({
      message: "error occured",
    });
  }
});

app.post("/login", async (req, res) => {
  const { email, password } = req.body;

  if (!email || !password) {
    return res.status(400).json({
      message: "Email and password are required",
    });
  }

  try {
    const query = "select password from login where email = ?";
    const [rows] = await db.query(query, [email]);

    if (rows.length === 0) {
      return res.status(404).json({
        message: "User not found",
      });
    }
    const storedPassword = rows[0].password;

    const isMatch = await bcrypt.compare(password, storedPassword);

    // console.log(hash === storedPassword);
    if (isMatch) {
      const token = jwt.sign({ email: email }, SECRET_KEY, {
        expiresIn: "1h",
      });
      res.json({
        message: "password match : login successful",
        token: token,
      });
    } else {
      res.status(401).json({
        message: "password doesnt match",
      });
    }
  } catch (e) {
    console.log(e.message);
  }
});

app.get("/getStudents", verifyToken, async (req, res) => {
  console.log(req.user);

  const query = "select * from student";

  try {
    const [rows] = await db.query(query);

    res.status(200).json({
      rows,
    });
  } catch (e) {
    res.status(500).json({
      message: e.message,
    });
  }
});

app.listen(3000, "localhost", () => {
  console.log("server is listening");
});
