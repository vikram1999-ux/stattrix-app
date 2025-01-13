import React from "react";
import AdminSidebar from "../components/AdminSidebar";
import Navbar from "../components/Navbar";

const Status = () => {
  return (
    <div className="admin-container">
      <AdminSidebar />
      <div className="right-container">
      <Navbar />
      </div>
    </div>
  );
};

export default Status;
