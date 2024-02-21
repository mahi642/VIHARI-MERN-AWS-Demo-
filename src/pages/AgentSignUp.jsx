import React from "react";
import { useContext, useState } from 'react'
import Footer from '../components/UI/Footer'
import { useNavigate, Link} from 'react-router-dom'
import "../components/CSS/Login.css";
import userContext from '../context/User/userContext'
import Navbar from "../components/UI/Navbar";

import { useNavigate } from "react-router-dom";
const AgentSignUp = () => {
  return (
    <>
    <Navbar />
    <div className="login-body">
      <div className="main" style={{height:'500px'}}>
        <div className="signup">
          <form>
            <label htmlFor="chk" className="login-label" aria-hidden="true">
              Sign up
            </label>
            <input
              className="signup-input"
              type="text"
              name="agentName"
              onChange={onSignupInput}
              value={SignupCreds.agentName}
              placeholder="Agency  name"
              required=""
            />

            <input
              className="signup-input"
              type=" email"
              name="email"
              onChange={onSignupInput}
              value={SignupCreds.email}
              placeholder="Agency Email"
              required=""
            />
            <input
              className="signup-input"
              type="password"
              name="password"
              onChange={onSignupInput}
              value={SignupCreds.password}
              placeholder="Password"
              required=""
            />
            <input
              className="signup-input"
              type="password"
              name="cpassword"
              onChange={onSignupInput}
              value={SignupCreds.cpassword}
              placeholder="Confirm Password"
              required=""
            />
            <button className="login-submit">Sign up</button>
          </form>
         
        </div>
      </div>
    </div>
    </>
  );
};

export default AgentSignUp;
