import React, { useState, useEffect } from "react";
import '../CSS/AdminHeader.css';
import { Link } from "react-router-dom";
import Thome from '../../Assets/Admin.jpg'



const Header = () => {
  

  return (
    <>
    <header className="header-container">
            <div className="header-image">
              <img
                className="header-image-overlay"
                src={Thome}
                alt="Teacher's Home"
              />
            </div>
            <div className="header-content">
              <h1 className="header-title">Teacher's Home Page</h1>
              <p className="header-welcome">Welcome, {user.teacher.FullName}</p>
              <div className="header-description">
                <p>
                  This is a place for teachers to access resources, manage
                  classes, and stay organized.
                </p>
              </div>
              <button className="join-button">
                <Link
                  to="/AddCourse"
                  style={{ textDecoration: "none", color: "white" }}
                >
                  Add Course
                </Link>
              </button>
            </div>
          </header>
        </>
  );
};

export default Header;
