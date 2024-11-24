const EmployeeModel = require("../Models/EmployeeModel");

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

module.exports = {
  createEmployee,
};
