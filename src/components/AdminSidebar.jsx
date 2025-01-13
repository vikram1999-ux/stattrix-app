import React, { useEffect, useState } from "react";
import logo from '../assets/images/logo.svg';
import { AddCircleIcon, MenuIcon } from './Icons';
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
          <MenuIcon />
        </button>
      )}

      <aside
        style={
          phoneActive
            ? {
                width: "20rem",
                height: "100vh",
                position: "fixed",
                top: 0,
                left: showModal ? "0" : "-20rem",
                transition: "all 0.5s ease",
              }
            : {}
        }
      >
        <div className="header-logo">
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
    <ul>
      <Li url="/admin/dashboard" text="Dashboard" Icon={AddCircleIcon} location={location} />
      <Li url="/admin/test" text="Test" Icon={AddCircleIcon} location={location} />
    </ul>
  </div>
);

const Li = ({ url, text, location, Icon }) => (
  <li
    style={{
      backgroundColor: location.pathname.includes(url) ? "#fff" : "#fff",
    }}
  >
    <Link
      to={url}
      style={{
        color: location.pathname.includes(url) ? "#333" : "#333",
      }}
    >
      <Icon size={24} />
      {text}
    </Link>
  </li>
);

export default AdminSidebar;
