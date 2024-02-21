import React from "react";
import "../components/CSS/Approval.css";
import approvalImage from "../Assets/approval.svg";
import Navbar from "../components/UI/Navbar";
const Approval = () => {
  return (
    <div className="approval-container">
      <Navbar />
      <p className="approval-head">
        Thanks for Approaching Us, Excited to Collaborate! Await Approval
      </p>
      <div className="image-container">
        <img className="approve" src={approvalImage} alt="approval" />
      </div>
      <p className="approval-head2">
        You'll be redirected upon approval – looking forward to having you
        onboard!
      </p>
    </div>
  );
};

export default Approval;
