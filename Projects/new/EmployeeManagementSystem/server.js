require("dotenv").config();

const express = require("express");
const cors = require("cors");

const employeeRoutes = require("./routes/employeeRoutes");

const app = express();

app.use(express.json());
app.use(cors());
app.use("/uploads", express.static("uploads"));

app.use(employeeRoutes);

app.listen(process.env.PORT, () => {
  console.log("Server Running");
});
