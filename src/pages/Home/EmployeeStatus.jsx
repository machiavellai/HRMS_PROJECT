import React from "react";
import overlayVector from "../../assets/images/overlay-vector.svg";
import { useHistory } from "react-router-dom";

export default function EmployeeStatus() {
  const tableStyles = {
    maxWidth: "100%",
    margin: "0 auto",
    borderCollapse: "collapse",
    width: "100%",
  };

  const employeeCardStyles = {
    maxWidth: "100%",
    boxShadow: "0 0 10px rgba(0, 0, 0, 0.1)",
    padding: "2rem",
  };

  const statusStyles = {
    display: "inline-block",
    padding: "0.3rem 1rem",
    borderRadius: "0.25rem",
    fontWeight: "bold",
  };
  return (
    <div className="employee-card">
      <h2 className="employee-heading">Employee Information</h2>
      <table className="employee-table">
        <thead>
          <tr>
            <th>Working Position</th>
            <th>Name</th>
            <th>Working Hours</th>
            <th>Contract Address</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Manager</td>
            <td>John Doe</td>
            <td>Full-time</td>
            <td>123 Main St</td>
            <td className="status-green">Onboarding</td>
          </tr>
          <tr>
            <td>Developer</td>
            <td>Jane Smith</td>
            <td>Part-time</td>
            <td>456 Elm St</td>
            <td className="status-blue">Processed</td>
          </tr>
          <tr>
            <td>Designer</td>
            <td>Michael Johnson</td>
            <td>Full-time</td>
            <td>789 Oak St</td>
            <td className="status-green">Onboarding</td>
          </tr>
          <tr>
            <td>Designer</td>
            <td>Michael Johnson</td>
            <td>Full-time</td>
            <td>789 Oak St</td>
            <td className="status-blue">Processed</td>
          </tr>
          <tr>
            <td>Designer</td>
            <td>Michael Johnson</td>
            <td>Full-time</td>
            <td>789 Oak St</td>
            <td className="status-green">Onboarding</td>
          </tr>
          <tr>
            <td>Designer</td>
            <td>Michael Johnson</td>
            <td>Full-time</td>
            <td>789 Oak St</td>
            <td className="status-red">Offboarding</td>
          </tr>
          <tr>
            <td>Designer</td>
            <td>Michael Johnson</td>
            <td>Full-time</td>
            <td>789 Oak St</td>
            <td className="status-blue">Processed</td>
          </tr>
          <tr>
            <td>Designer</td>
            <td>Michael Johnson</td>
            <td>Full-time</td>
            <td>789 Oak St</td>
            <td className="status-green">Onboarding</td>
          </tr>
          <tr>
            <td>Designer</td>
            <td>Michael Johnson</td>
            <td>Full-time</td>
            <td>789 Oak St</td>
            <td className="status-blue">Processed</td>
          </tr>
          <tr>
            <td>Designer</td>
            <td>Michael Johnson</td>
            <td>Full-time</td>
            <td>789 Oak St</td>
            <td className="status-red">Offboarding</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
