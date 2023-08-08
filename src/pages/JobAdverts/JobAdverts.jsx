import React from "react";
import JobAdvertisementForm from "./Add/JobAdvertsForm";
import Navbar from "../../layouts/Navbar/Navbar";
import Sidebar from "../../layouts/Sidebar/Sidebar";

export default function JobAdverts() {
  return (
    <div className="container">
      <Navbar />
      <Sidebar />
      <JobAdvertisementForm />
    </div>
  );
}
