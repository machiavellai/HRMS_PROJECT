import CreateAccountBanner from "./CreateAccountBanner";
import { Link } from "react-router-dom";
import Overlay from "./Overlay";
import React from "react";
import Steps from "./Steps";
import Navbar from "../../layouts/Navbar/Navbar";
import Sidebar from "../../layouts/Sidebar/Sidebar";
export default function Home() {
  return (
    <div className="container-fluid bg-white">
      <div className="container">
        <Navbar />
        <Sidebar/>
        <Overlay />
        <Steps />
        <div className="text-center mb-5">
          <Link to="/jobadvert" className="btn btn-primary rounded shadow">
            Browse All
          </Link>
        </div>
        <CreateAccountBanner />
      </div>
    </div>
  );
}
