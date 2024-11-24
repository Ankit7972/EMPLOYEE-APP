const EmployeeModel = require("../Models/EmployeeModel");

// Create a new employee
const createEmployee = async (req, res) => {
  try {
    const body = req.body;
    body.profileImage = req.file ? req.file.path : null;
    const emp = new EmployeeModel(body);
    await emp.save();
    res.status(201).json({
      message: "Employee created",
      success: true,
    });
  } catch (err) {
    res.status(500).json({
      message: "Internal server error",
      success: false,
      error: err,
    });
  }
};

// find all employee
const getAllEmployee = async (req, res) => {
  try {
    const emps = await EmployeeModel.find({});
    res.status(200).json({
      message: "All Employees",
      success: true,
      data: emps,
    });
  } catch (err) {
    res.status(500).json({
      message: "Internal server error",
      success: false,
      error: err,
    });
  }
};

//find employee by id
const getEmployeeById = async (req, res) => {
  try {
    const { id } = req.params;
    const emp = await EmployeeModel.findOne({ _id: id });
    res.status(200).json({
      message: "Get Employees Details",
      success: true,
      data: emp,
    });
  } catch (err) {
    res.status(500).json({
      message: "Internal server error",
      success: false,
      error: err,
    });
  }
};

//delete employee
const deleteEmployeeById = async (req, res) => {
  try {
    const { id } = req.params;
    const emp = await EmployeeModel.findByIdAndDelete({ _id: id });
    res.status(200).json({
      message: "Employees Deleted",
      success: true,
    });
  } catch (err) {
    res.status(500).json({
      message: "Internal server error",
      success: false,
      error: err,
    });
  }
};

module.exports = {
  createEmployee,
  getAllEmployee,
  getEmployeeById,
  deleteEmployeeById,
};
