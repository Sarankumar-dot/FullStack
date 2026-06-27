const db = require("../config/config");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const login = async (req, res) => {
  const { email, password } = req.body;

  try {
    const query = `select * from users where email = ?`;
    const [rows] = await db.query(query, [email]);

    if (rows.length === 0) {
      return res.status(401).json({
        success: false,
        message: "Invalid credentials",
      });
    }

    const user = rows[0];

    const isMatch = await bcrypt.compare(password, user.password);

    if (isMatch) {
      const token = jwt.sign(
        {
          id: user.id,
          email: user.email,
        },
        process.env.JWT_SECRET,
        {
          expiresIn: "1d",
        },
      );
      return res.status(200).json({
        success: true,
        token,
        message: "login success",
      });
    } else {
      return res.status(401).json({
        success: false,
        message: "Invalid credentials",
      });
    }
  } catch (e) {
    return res.status(500).json({
      success: false,
      message: e.message,
    });
  }
};

const signup = async (req, res) => {
  const { name, email, password } = req.body;

  try {
    const checkIfEmailExist = `select * from users where email = ?`;
    const [rows] = await db.query(checkIfEmailExist, [email]);

    if (rows.length > 0) {
      return res.status(400).json({
        success: false,
        message: "email already exists",
      });
    }

    const query = `insert into users(name,email,password) values(?,?,?)`;
    const hashedPassword = await bcrypt.hash(password, 10);
    const [result] = await db.query(query, [name, email, hashedPassword]);

    if (result.affectedRows > 0) {
      return res.status(201).json({
        success: true,
        message: "user registered",
      });
    } else {
      return res.status(400).json({
        success: false,
        message: "Registration failed",
      });
    }
  } catch (e) {
    return res.status(500).json({
      success: false,
      message: e.message,
    });
  }
};

const dashboard = async (req, res) => {
  return res.status(200).json({
    success: true,
    user : req.user
  });
};

module.exports = { login, signup, dashboard };
