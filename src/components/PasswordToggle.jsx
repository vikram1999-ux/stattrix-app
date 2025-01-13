import React, { useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa"; 

const PasswordToggle = () => {
  const [passwordVisible, setPasswordVisible] = useState(false);

  const togglePasswordVisibility = () => {
    setPasswordVisible((prev) => !prev);
  };

  return (
    <div className="mb-3">
      <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
      <div className="input-group">
        <input
          type={passwordVisible ? "text" : "password"} 
          className="form-control"
          id="exampleInputPassword1"
          placeholder="Enter your password"
        />
        <span
          className="input-group-text"
          onClick={togglePasswordVisibility}
          style={{ cursor: "pointer" }}
        >
          {passwordVisible ? <FaEyeSlash /> : <FaEye />}
        </span>
      </div>
    </div>
  );
};

export default PasswordToggle;
