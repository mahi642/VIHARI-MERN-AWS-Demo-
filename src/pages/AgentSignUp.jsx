import React from "react";
import "../components/CSS/Login.css";
import { useNavigate } from "react-router-dom";
const AgentSignUp = () => {
  const navigate = useNavigate();
  const handleAgentLogin = (e) => {
    navigate("/agentLogin");
  };
  return (
    <div className="login-body">
      <div className="main">
        <div className="signup">
          <form>
            <label htmlFor="chk" className="login-label" aria-hidden="true">
              Sign up
            </label>
            <input
              className="signup-input"
              type="text"
              // name="fname"
              // onChange={onSignupInput}
              // value={SignupCreds.fname}
              placeholder="Agency  name"
              required=""
            />

            <input
              className="signup-input"
              type=" email"
              // name="email"
              // onChange={onSignupInput}
              // value={SignupCreds.email}
              placeholder="Agency Email"
              required=""
            />
            <input
              className="signup-input"
              type="password"
              // name="password"
              // onChange={onSignupInput}
              // value={SignupCreds.password}
              placeholder="Password"
              required=""
            />
            <input
              className="signup-input"
              type="password"
              // name="cpassword"
              // onChange={onSignupInput}
              // value={SignupCreds.cpassword}
              placeholder="Confirm Password"
              required=""
            />
            <button className="login-submit" onClick={handleAgentLogin}>
              Sign up
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AgentSignUp;
