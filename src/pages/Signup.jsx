import React from "react";
import Logo from "../assets/images/logo.svg";
import { Link } from "react-router-dom";
import PasswordToggle from "../components/PasswordToggle";


const Signup = () => {
  

  return (
    <>
      <div style={{ backgroundColor: "#f7fafc" }}>
        <div className="container w-50 mx-auto d-flex justify-content-center align-items-center" style={{ height: "100vh" }}>
          <div
            className="card-body"
            style={{
              padding: "1.125rem",
              backgroundColor: "#fff",
              borderRadius: "0.5rem",
              border: "1px solid #edf1f5",
              boxShadow: "rgba(143, 155, 166, 0.08) 0px 12px 24px -4px"
            }}
          >
            <div className="row row-cols-2 align-items-center">
              <div className="col">
                <form>
                <div className="mb-3">
                    <label htmlFor="exampleInputName1" className="form-label" aria-required="true">Name</label>
                    <input
                      type="name"
                      className="form-control"
                      id="exampleInputName1"
                      placeholder="Enter your name"
                    />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="exampleInputEmail1" className="form-label" aria-required="true">Email Address</label>
                    <input
                      type="email"
                      className="form-control"
                      id="exampleInputEmail1"
                      aria-describedby="emailHelp"
                      placeholder="Enter your email address"
                    />
                  </div>
                  <PasswordToggle />
                  <div className="mb-3 form-check">
                    <input type="checkbox" className="form-check-input" id="exampleCheck1" />
                    <label
                      className="form-check-label"
                      style={{ color: "#8492b5", fontSize: "12px" }}
                      htmlFor="exampleCheck1"
                    >
                      By creating an account, you agree to our{" "}
                      <Link
                        to="#"
                        style={{
                          color: "#00adb5",
                          fontSize: "12px",
                          fontWeight: 500,
                          textDecoration: "none"
                        }}
                      >
                        <u>Terms & Conditions</u>
                      </Link>{" "}
                      and{" "}
                      <Link
                        to="#"
                        style={{
                          color: "#00adb5",
                          fontSize: "12px",
                          fontWeight: 500,
                          textDecoration: "none"
                        }}
                      >
                        <u>Privacy Policy</u>
                      </Link>
                    </label>
                  </div>
                  <button
                    type="submit"
                    className="btn btn-primary d-flex justify-content-center align-items-center w-100"
                    style={{
                      backgroundColor: "#511281",
                      borderColor: "#511281",
                      fontSize: "0.85rem",
                      borderRadius: "0.35rem",
                      padding: "0.375rem 0.75rem",
                      boxShadow: "none",
                      fontWeight: 500
                    }}
                  >
                    Create Account
                  </button>
                  <div className="text-center">
                    <p
                      className="text-muted mt-3 mb-0"
                      style={{ color: "#8492b5", fontSize: "0.8125rem" }}
                    >
                      Already have an account?{" "}
                      <Link
                        to="/"
                        style={{
                          textDecoration: "underline",
                          fontWeight: 500,
                          color: "#511281"
                        }}
                      >
                        Sign In
                      </Link>
                    </p>
                  </div>
                </form>
              </div>
              <div className="col">
                <div
                  className="bg rounded"
                  style={{
                    backgroundColor: "rgba(255, 183, 72, 0.1)",
                    border: "1px solid rgba(255, 183, 72)",
                    height: "100%",
                    borderColor: "rgba(255, 183, 72, 0.1)",
                    padding: "106px 30px"
                  }}
                >
                  <div className="logo">
                    <img src={Logo} className="img-fluid" alt="Logo" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Signup;
