import React from "react";
import { useContext, useState } from "react";
import Footer from "../components/UI/Footer";
import { useNavigate, Link } from "react-router-dom";
import "../components/CSS/Login.css";
import userContext from "../context/User/userContext";
import Navbar from "../components/UI/Navbar";

const AgentSignUp = () => {
  const navigate = useNavigate();
  const { verifyAgent, createAgent } = useContext(userContext);
  const [SignupCreds, setSignupCreds] = useState({
    agentName: "",
    email: "",
    password: "",
    cpassword: "",
  });
  const onSignupInput = (e) => {
    setSignupCreds({ ...SignupCreds, [e.target.name]: e.target.value });
  };
  const HandleSignup = async (e) => {
    e.preventDefault();
    const { agentName, email, password, cpassword } = SignupCreds;
    if (password !== cpassword) {
      alert("Password mismatch");
    } else {
      const response = await createAgent(agentName, email, password);
      if (response.success) {
        localStorage.token = response.authToken;
        navigate("/agentLogin");
      } else {
        if (response.error) {
          alert(response.error);
        }
      }
      setSignupCreds({ agentName: "", email: "", password: "" });
    }
  };
  return (
    <>
      <Navbar />
      <div className="login-body">
        <div className="main" style={{ height: "500px" }}>
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
              <button className="login-submit" onClick={HandleSignup}>
                Sign up
              </button>
              <h4 className="login-redirect" style={{ color: "white" }}>
                Already an agent? <Link to="/agentLogin">Login here</Link>
              </h4>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default AgentSignUp;
