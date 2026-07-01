require("dotenv").config();

const exp = require("express");
const cors = require("cors");

const routes = require("./routes/loginRoutes");

const app = exp();

app.use(exp.json());
app.use(cors());

app.use(routes);

app.listen(3000, "localhost", (e) => {
  console.log("server running");
});
