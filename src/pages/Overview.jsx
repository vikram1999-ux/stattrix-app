import React from "react";
import AdminSidebar from "../components/AdminSidebar";
import Navbar from "../components/Navbar";

const Overview = () => {
  return (
    <div className="admin-container">
      <AdminSidebar />
      <div className="right-container">
      <Navbar />
      </div>
    </div>
  );
};

export default Overview;
