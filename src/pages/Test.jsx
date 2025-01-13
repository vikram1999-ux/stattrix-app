import React from "react";
import AdminSidebar from "../components/AdminSidebar";
import Navbar from "../components/Navbar";

const Test = () => {
  return (
    <div className="admin-container">
      <AdminSidebar />
      <div className="right-container">
      <Navbar />
      </div>
    </div>
  );
};

export default Test;
