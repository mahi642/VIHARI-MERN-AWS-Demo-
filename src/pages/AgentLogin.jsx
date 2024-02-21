import React from "react";
import "../components/CSS/AgentLogin.css";
import { useNavigate } from "react-router-dom";
const AgentLogin = () => {
  const navigate = useNavigate();
  const handleApproval = (e)=>{
    navigate("/waitForApproval");

  }
  return (

    <div className="login-body1">
      <div className="login1">
        <form>
          <label htmlFor="chk" className="login-label1" aria-hidden="true">
            Login
          </label>
          <input
            className="login-input1"
            type="email"
            name="email"
            // onChange={onLoginInput}
            // value={loginCreds.email}
            placeholder="Email"
            required
          />
          <input
            className="login-input1"
            type="password"
            name="password"
            // onChange={onLoginInput}
            // value={loginCreds.password}
            placeholder="Password"
            required
          />
          <button className="login-submit1" onClick = {handleApproval}>Login</button>
        </form>
      </div>
    </div>
  );
};

export default AgentLogin;
