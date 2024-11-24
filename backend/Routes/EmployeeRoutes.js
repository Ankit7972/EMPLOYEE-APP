const { cloudinaryFileUploader } = require("../Middelwares/FileUploader");
const {
  createEmployee,
  getAllEmployee,
  getEmployeeById,
  deleteEmployeeById,
} = require("../Controllers/EmployeeController");

const routes = require("express").Router();

//home page all employee infomation
routes.get("/", getAllEmployee);

//get employee by ID
routes.get("/:id", getEmployeeById);

//Delete route of Employee
routes.delete("/:id", deleteEmployeeById);

//To create the Employee
routes.post("/", cloudinaryFileUploader.single("profileImage"), createEmployee);

module.exports = routes;
