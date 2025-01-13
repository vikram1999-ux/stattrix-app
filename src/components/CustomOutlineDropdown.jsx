import React from "react";
import { ExpandMoreIcon, ExpandLessIcon } from './Icons';

const CustomOutlineDropdown = ({ options, selectedValue, onSelect, placeholder, isOpen, onClick }) => {
  const handleSelect = (option) => {
    onSelect(option); // Notify parent about the selected option
    onClick(); // Close dropdown by notifying the parent
  };

  return (
    <div className="custom-outline-dropdown">
      {/* Dropdown Header */}
      <div
        className="dropdown-header"
        onClick={onClick} // Toggle dropdown open/close in parent
      >
        {selectedValue || placeholder || "Select an option"}
        <span className="arrow">
          {isOpen ? (
            <ExpandLessIcon sx={{ fontSize: 27, color: "#2F4258" }} />
          ) : (
            <ExpandMoreIcon sx={{ fontSize: 27, color: "#2F4258" }} />
          )}
        </span>
      </div>

      {/* Dropdown Options */}
      {isOpen && (
        <div className="dropdown-options">
          {options.map((option, index) => (
            <div
              key={index}
              className="dropdown-option"
              onClick={() => handleSelect(option)} // Handle option selection
            >
              {option}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default CustomOutlineDropdown;
