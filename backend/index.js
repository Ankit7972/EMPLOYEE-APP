const express = require("express");
const cors = require("cors");
const app = express();
const bodyParser = require("body-parser");

require("dotenv").config();
const PORT = process.env.PORT || 8080;
require("./Models/db");
const EmployeeRouter = require("./Routes/EmployeeRoutes");

app.use(cors());
app.use(bodyParser.json());

app.get("/", (req, res) => {
  res.send(" Employee App server is running ");
});

app.use("/api/employees", EmployeeRouter);

app.listen(PORT, () => {
  console.log(`server is running on ${PORT}`);
});
