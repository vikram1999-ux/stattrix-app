import React, { useState, useEffect, useRef } from "react";
import { ExpandMoreIcon, ExpandLessIcon } from './Icons';

const CustomDropdown = ({ options, selectedValue, onSelect, placeholder }) => {
  const [isOpen, setIsOpen] = useState(false); // Track dropdown open/close state
  const dropdownRef = useRef(null); // Reference to dropdown

  // Close dropdown if clicked outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false); // Close dropdown if clicked outside
      }
    };

    document.addEventListener("mousedown", handleClickOutside); // Add event listener for click outside

    // Cleanup event listener on component unmount
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const handleSelect = (option) => {
    onSelect(option); // Notify parent about the selected option
    setIsOpen(false); // Close dropdown
  };

  return (
    <div className="custom-dropdown" ref={dropdownRef}>
      {/* Dropdown Header */}
      <div
        className="dropdown-header"
        onClick={() => setIsOpen(!isOpen)} // Toggle dropdown
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

export default CustomDropdown;
