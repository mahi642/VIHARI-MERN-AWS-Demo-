import React from "react";
import "@fortawesome/fontawesome-free/css/all.css";
import profileImage from "../Assets/profile.png";
import myProfile from "../Assets/myProfile.png";
import myTrips from "../Assets/busTrips.png";
import Navbar from "../components/UI/Navbar";
import { useNavigate } from "react-router-dom";
import "../components/CSS/userProfile.css";
const Profile = () => {
  const navigate = useNavigate();
  const handleEditInProfile = (e) => {
    e.preventDefault();
    navigate("/profile/editUserProfile");
  };
  return (
    <div>
      <Navbar />
      <div className="profile">
        <div className="leftdiv">
          <div style={{ marginBottom: "4rem" }} className="profile-items">
            <img className="profile-icons" src={profileImage} alt="profile" />
            <h1>User Name</h1>
          </div>
          <div className="profile-items">
            <img className="profile-icons" src={myProfile} alt="MyProfile" />
            <h1>My profile</h1>
          </div>
          <hr />
          <div className="profile-items">
            <img className="profile-icons" src={myTrips} alt="trips" />
            <h1>My trips</h1>
          </div>
          <hr />
        </div>

        <div className="rightdiv">
          <h1>My Profile</h1>

          <div className="profile-details">
            <div className="nameAndGender">
              <div>
                <h2>Name</h2>
                <h3>Mahesh Balabadra</h3>
              </div>
              <div>
                <h2>Gender</h2>
                <h3>Male</h3>
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
                  <h3>mahesh.b21@iits.in</h3>
                </div>
                <div>
                  <h2>Mobile Number</h2>
                  <h3>9555555559</h3>
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

export default Profile;
