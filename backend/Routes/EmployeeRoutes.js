const { cloudinaryFileUploader } = require("../Middelwares/FileUploader");
const { createEmployee } = require("../Controllers/EmployeeController");

const routes = require("express").Router();

routes.get("/", (req, res) => {
  res.send("Get all Employess");
});

//To create the Employee
routes.post("/", cloudinaryFileUploader.single("profileImage"), createEmployee);

module.exports = routes;
