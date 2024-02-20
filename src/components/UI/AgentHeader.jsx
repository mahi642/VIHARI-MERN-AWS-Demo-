import React, { useState, useEffect } from "react";
import '../CSS/AdminHeader.css';
import { Link } from "react-router-dom";
import Thome from '../../Assets/Agent.jpg'



const Header = () => {
  

  return (
    <>
    <header className="header-container">
            <div className="header-image">
              <img
                className="header-image-overlay"
                src={Thome}
                alt="Agent's Home"
              />
            </div>
            <div className="header-content">
              <h1 className="header-title">Agent's Home Page</h1>
              {/* <p className="header-welcome">Welcome, {user.teacher.FullName}</p> */}
              <div className="header-description">
                <p>
                  This is a place for Agents to access resources, manage buses, manage tours.
                </p>
              </div>
              {/* <button className="join-button">
                <Link
                  to="/AddCourse"
                  style={{ textDecoration: "none", color: "white" }}
                >
                  Add Course
                </Link>
              </button> */}
            </div>
          </header>
        </>
  );
};

export default Header;
