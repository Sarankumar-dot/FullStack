const express = require("express");
const upload = require('../config/multer');

const router = express.Router();

const { getEmployees,getEmployeesById,addEmployee, uploadImage, uploadEmpImage } = require("../controllers/employeeController");

router.get("/employees", getEmployees);
router.get("/employees/:id",getEmployeesById);
router.post("/addEmployee",addEmployee);
router.post("/upload", upload.single("image"), uploadImage);
router.post("/uploadEmp/:id", upload.single("image"), uploadEmpImage);

module.exports = router;
