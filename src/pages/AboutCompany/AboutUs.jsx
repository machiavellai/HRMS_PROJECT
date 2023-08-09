import React from "react";
import Navbar from "../../layouts/Navbar/Navbar";
import CompanyInfo from "./CompanyInfo";
import OfficeImage from "./Officeimage";
import Footer from "../../layouts/Footer/Footer";
import Sidebar from "../../layouts/Sidebar/Sidebar";
import "./AboutUs.scss";
export default function AboutUs() {
  return (
    <div className="about-us-page">
      <Navbar />
      <Sidebar />
      <CompanyInfo />
      <OfficeImage />
      <Footer />
    </div>
  );
}
