import React from "react";
import overlayVector from "../../assets/images/overlay-vector.svg";

export default function Overlay() {
  return (
    <div className="card-wrapper">
      <div className="card-content">
        <div className="info-section">
          <h2>Total Employees</h2>
          <p>400</p>
        </div>
        <div className="info-section">
          <h2>Retired Employees</h2>
          <p>29</p>
        </div>
        <div className="info-section">
          <h2>Job Views</h2>
          <p>500</p>
        </div>
        <div className="info-section">
          <h2>Applicants</h2>
          <p>72</p>
        </div>
      </div>
    </div>
  );
}
