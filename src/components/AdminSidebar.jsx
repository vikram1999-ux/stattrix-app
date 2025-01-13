import React, { useEffect, useState, useRef } from "react";
import logo from '../assets/images/logo.svg';
import { GridViewOutlinedIcon, ExpandMoreOutlinedIcon, ExpandLessOutlinedIcon } from './Icons';
import { Link, useLocation } from "react-router-dom";

const AdminSidebar = () => {
  const location = useLocation();

  const [showModal, setShowModal] = useState(false);
  const [phoneActive, setPhoneActive] = useState(window.innerWidth < 1100);

  const resizeHandler = () => {
    setPhoneActive(window.innerWidth < 1100);
  };

  useEffect(() => {
    window.addEventListener("resize", resizeHandler);

    return () => {
      window.removeEventListener("resize", resizeHandler);
    };
  }, []);

  return (
    <>
      {phoneActive && (
        <button id="hamburger" onClick={() => setShowModal(true)}>
          <GridViewOutlinedIcon />
        </button>
      )}

      <aside
        style={{
          width: phoneActive ? "20rem" : "auto",
          height: "100vh",
          position: phoneActive ? "fixed" : "static",
          top: 0,
          left: phoneActive && showModal ? "0" : phoneActive ? "-20rem" : "0",
          transition: "all 0.5s ease",
          backgroundColor: "var(--theme-color-light)",
          boxShadow: "0 0 21px 0 rgba(89, 102, 122, .1)",
          overflowY: "auto",
        }}
      >
        <div className="header-logo" style={{ padding: "25px" }}>
          <img src={logo} alt="Stattrix Logo" />
        </div>
        <DivOne location={location} />

        {phoneActive && (
          <button id="close-sidebar" onClick={() => setShowModal(false)}>
            Close
          </button>
        )}
      </aside>
    </>
  );
};

const DivOne = ({ location }) => (
  <div>
    <ul className="custom-parent" style={{  }}>
      <Li
        url="/admin/dashboard"
        text="Dashboard"
        Icon={GridViewOutlinedIcon}
        location={location}
        submenu={[
          { url: "/admin/dashboard/overview", text: "Overview" },
          { url: "/admin/dashboard/status", text: "Status" },
        ]}
      />
      <Li
        url="/admin/test"
        text="Test"
        Icon={GridViewOutlinedIcon}
        location={location}
      />
    </ul>
  </div>
);
const Li = ({ url, text, location, Icon, submenu }) => {
  const [submenuOpen, setSubmenuOpen] = useState(false);
  const submenuRef = useRef(null);  // Reference to the submenu to measure height

  // Updated `isActive` logic to include default state for Dashboard
  const isActive =
    location.pathname === url || // Exact match for the main URL
    (submenu && submenu.some((item) => location.pathname === item.url)) || // Match submenu URLs
    (url === "/admin/dashboard" &&
      (location.pathname === "/admin" || location.pathname === "/admin/dashboard")); // Default Dashboard case

  const toggleSubmenu = (e) => {
    e.preventDefault();
    setSubmenuOpen((prev) => !prev);
  };

  return (
    <li
      style={{
        cursor: "pointer",
        borderRadius: "10px",
        padding: "13px",
        backgroundColor: isActive ? "var(--theme-color-success)" : "transparent",
      }}
    >
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <Link
          to={submenu ? "#" : url}
          onClick={submenu ? toggleSubmenu : undefined}
          style={{
            color: isActive
              ? "var(--theme-color-light)"
              : "var(--font-color)",
            textDecoration: "none",
            display: "flex",
            alignItems: "center",
            flex: "1",
          }}
        >
          <Icon size={24} style={{ marginRight: "8px" }} />
          {text}
        </Link>
        {submenu && (
          <button
            onClick={toggleSubmenu}
            style={{
              background: "none",
              border: "none",
              cursor: "pointer",
              fontSize: "24px",
              color: "var(--theme-color-light)",
            }}
          >
            {submenuOpen ? <ExpandLessOutlinedIcon /> : <ExpandMoreOutlinedIcon />}
          </button>
        )}
      </div>
      {submenu && (
        <ul
          ref={submenuRef}  // Set reference for dynamic height
          style={{
            height: submenuOpen ? submenuRef.current.scrollHeight : "0",  // Use scrollHeight for dynamic height
            overflow: "hidden",
            transition: "height 0.3s ease",
            marginLeft: "1rem",
            padding: submenuOpen ? "10px 0" : "0",
            listStyle: "none",
          }}
        >
          {submenu.map((item, index) => (
            <li key={index}>
              <Link
                to={item.url}
                style={{
                  color: "var(--theme-color-light)",
                  textDecoration: "none",
                  display: "block",
                  padding: "8px 13px",
                }}
              >
                {item.text}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </li>
  );
};

export default AdminSidebar;
