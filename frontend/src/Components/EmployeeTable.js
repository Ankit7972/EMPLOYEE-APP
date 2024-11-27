import React from "react";
import { Link } from "react-router-dom";

function EmployeeTable() {
  const headers = ["Name", "Email", "Phone", "Department", "Actions"];

  const TableRow = ({ employee }) => {
    return (
      <tr>
        <td>
          <Link to={`/employee/id`} className="text-decoration-none">
            {"Ankit"}
          </Link>
        </td>
        <td>{"Ankit@123"}</td>
        <td>{"7972640418"}</td>
        <td>{"IT"}</td>
        <td>
          <i
            className="bi bi-pencil-fill text-warning me-4"
            role="button"
            data-bs-toggle="tooltip"
            data-bs-placement="top"
            onClick={() => {}}
          ></i>
          <i
            className="bi bi-trash-fill text-danger"
            role="button"
            data-bs-toggle="tooltip"
            data-bs-placement="top"
            onClick={() => {}}
          ></i>
        </td>
      </tr>
    );
  };

  return (
    <>
      <table className="table table-striped">
        <thead>
          <tr>
            {headers.map((header, i) => (
              <th key={i}>{header}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          <TableRow />
          <TableRow />
          <TableRow />
          <TableRow />
          <TableRow />
        </tbody>
      </table>
    </>
  );
}

export default EmployeeTable;
