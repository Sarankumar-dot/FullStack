const express = require("express");
const router = express.Router();
const verifyToken = require("../middleware/verifyToken");

const { login,signup,dashboard } = require("../controllers/loginController");

router.post("/login", login);
router.post("/signup" , signup);
router.get("/dashboard",verifyToken,dashboard);

module.exports = router;
