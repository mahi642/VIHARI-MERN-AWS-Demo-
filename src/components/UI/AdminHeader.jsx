import React, { useState, useEffect } from "react";
import '../CSS/AdminHeader.css';
import { Link } from "react-router-dom";
import Ahome from '../../Assets/Admin.jpg'
import { useGetAllUsersQuery } from "../../Slices/adminApiSlice";
import { FaUser } from 'react-icons/fa';

const Header = () => {
  const [numUsers, setNumUsers] = useState(0);
  const { data: userData } = useGetAllUsersQuery();

  useEffect(() => {
    if (userData && userData.users) {
      setNumUsers(userData.users.length);
    }
  }, [userData]);

  return (
    <>
      <header className="header-container">
        <div className="header-image">
          <img
            className="header-image-overlay"
            src={Ahome}
            alt="Admin's home"
          />
        </div>
        <div className="header-content">
          <h1 className="header-title">Admin's Home Page</h1>
          <p className="header-welcome">Welcome, Admin</p>
          <div className="header-description">
            <p>
              This is a place for Admin to control users,Manage agents and send announcements
            </p>
          </div>
        </div>
        <div className="dashboard-container">
          <div className="dashboard-box">
          <FaUser className="user-icon" /> 
            <h2>Total Users:</h2>
            <p style={{ color: '#007bff' }}>{numUsers}</p> 
          </div>
          <div className="dashboard-box">
            <h2>Total agents:</h2>
            
          </div>

          <div className="dashboard-box">
            <h2>Total agents:</h2>
            
          </div>
         
        </div>
      </header>
    </>
  );
};

export default Header;
