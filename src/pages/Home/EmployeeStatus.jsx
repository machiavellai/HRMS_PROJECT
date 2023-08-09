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
            <td>678 Walnut Lane, Brookside, NC 65432</td>
            <td className="status-green">Onboarding</td>
          </tr>
          <tr>
            <td>Developer</td>
            <td>Jane Smith</td>
            <td>Part-time</td>
            <td>456 Elm Avenue, Oakville, NY 54321</td>
            <td className="status-blue">Processed</td>
          </tr>
          <tr>
            <td>Team Lead</td>
            <td>Michael Johnson</td>
            <td>Full-time</td>
            <td>789 Oak St</td>
            <td className="status-green">Onboarding</td>
          </tr>
          <tr>
            <td>developer</td>
            <td>Victor Oghene</td>
            <td>Full-time</td>
            <td>10 Obadiah Street, Akoka, Lagos</td>
            <td className="status-blue">Processed</td>
          </tr>
          <tr>
            <td>Designer</td>
            <td>thomas Shelby</td>
            <td>Full-time</td>
            <td>789 Oak St</td>
            <td className="status-green">Onboarding</td>
          </tr>
          <tr>
            <td>DB amininistrator</td>
            <td>Michael Johnson</td>
            <td>Full-time</td>
            <td>234 Birch Drive, Harmony, WA 23456</td>
            <td className="status-red">Offboarding</td>
          </tr>
          <tr>
            <td>developer</td>
            <td>Michael Johnson</td>
            <td>Full-time</td>
            <td>123 Cherry Street, Appleton, PA 87654</td>
            <td className="status-blue">Processed</td>
          </tr>
          <tr>
            <td>Designer</td>
            <td>Michael Johnson</td>
            <td>Full-time</td>
            <td>987 Cedar Court, Woodland, AZ 76543</td>
            <td className="status-green">Onboarding</td>
          </tr>
          <tr>
            <td>Buisness Analys</td>
            <td>Oji Samuel</td>
            <td>Full-time</td>
            <td>567 Pine Street, Riverside, FL 67890</td>
            <td className="status-blue">Processed</td>
          </tr>
          <tr>
            <td>Project Manager</td>
            <td>chloe Davis</td>
            <td>Full-time</td>
            <td>678 Walnut Lane, Brookside, NC 65432</td>
            <td className="status-red">Offboarding</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
