import CreateAccountBanner from "./CreateAccountBanner";
import { Link } from "react-router-dom";
import Overlay from "./Overlay";
import React from "react";
import Steps from "./Steps";
import Navbar from "../../layouts/Navbar/Navbar";
import Sidebar from "../../layouts/Sidebar/Sidebar";
import Footer from "../../layouts/Footer/Footer";
import EmployeeStatus from "./EmployeeStatus";
export default function Home() {
  return (
    <div className="container-fluid bg-white">
      <div className="container">
        <Navbar />
        <Overlay />
        <EmployeeStatus />
        <Sidebar />
        <CreateAccountBanner />
        <Footer />
      </div>
    </div>
  );
}
