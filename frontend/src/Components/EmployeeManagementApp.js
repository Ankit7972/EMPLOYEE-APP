import React from "react";
import EmployeeTable from "./EmployeeTable";
import { useEffect, useState } from "react";
import { GetAllEmployees } from "../api";

function EmployeeManagementApp() {
  const [employeesData, setEmployeesData] = useState({
    employees: [],
    pagination: {
      currentPage: 1,
      pageSize: 5,
      totalEmployees: 0,
      totalPages: 1,
    },
  });
  const fetchEmployees = async (search = "", page = 1, limit = 5) => {
    console.log("Called fetchEmployees");
    try {
      const data = await GetAllEmployees(search, page, limit);
      console.log(data);
      setEmployeesData(data);
    } catch (err) {
      alert("Error", err);
    }
  };
  useEffect(() => {
    fetchEmployees();
  }, []);

  return (
    <div className="d-flex flex-column justify-content-center align-items-center w-100 p-3">
      <h1>Employee Management App</h1>
      <div className="w-100 d-flex justify-content-center">
        <div className="w-80 border bg-light p-3" style={{ width: "80%" }}>
          <div className="d-flex justify-content-between mb-3">
            <button className="btn btn-primary">Add</button>
            <input
              type="text"
              placeholder="Search Employees..."
              className="form-control w-50"
            />
          </div>
          <EmployeeTable
            employees={employeesData.employees}
            pagination={employeesData.pagination}
          />
        </div>
      </div>
    </div>
  );
}

export default EmployeeManagementApp;
