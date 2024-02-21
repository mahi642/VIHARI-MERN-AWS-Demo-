import React, { useEffect, useState } from "react";
import "@fortawesome/fontawesome-free/css/all.css";
import profileImage from "../Assets/profile.png";
import myProfile from "../Assets/myProfile.png";
import { useNavigate } from "react-router-dom";
import "../components/CSS/userProfile.css";
import AgentNavbar from "../components/UI/AgentNavbar";
import { useGetAgentProfileQuery } from "../Slices/agentApiSlice";
import Loader from '../components/Loader/Loader'

const AgentProfile = () => {
  const navigate = useNavigate();
  const [agent, setAgent] = useState({});
  const agentId=localStorage.getItem('agentId');
  const {data:agentData,isLoading}=useGetAgentProfileQuery(agentId);
  useEffect(()=>{
    if(agentData){
        setAgent(agentData.agent);
    }
  },[agentData])
  const handleEditInProfile = (e) => {
    e.preventDefault();
    navigate("/agent/editAgentProfile");
  };

  if(isLoading){
    return <Loader/>
  }
  return (
    <div>
      <AgentNavbar />
      <div className="profile">
        <div className="leftdiv">
          <div style={{ marginBottom: "4rem" }} className="profile-items">
            <img className="profile-icons" src={profileImage} alt="profile" />
            <h1>Agent Name</h1>
          </div>
          <div className="profile-items">
            <img className="profile-icons" src={myProfile} alt="MyProfile" />
            <h1>My profile</h1>
          </div>
          <hr />
          <hr />
        </div>

        <div className="rightdiv">
          <h1>My Profile</h1>

          <div className="profile-details">
            <div className="nameAndGender">
              <div>
                <h2>Agency Name</h2>
                <h3>{agent.agentName}</h3>
              </div>
            </div>
            <div className="dob">
              <h2>Date of Birth</h2>
              <h3>27-08-2003</h3>
            </div>
            <div className="contact-info">
              <hr />
              <h1>My Contact Information</h1>

              <div className="nameAndGender">
                <div>
                  <h2>Email</h2>
                  <h3 style={{textDecoration:""}}>{agent.email}</h3>
                </div>
              </div>

              <button type="submit" onClick={handleEditInProfile}>
                Edit Info{" "}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AgentProfile;
