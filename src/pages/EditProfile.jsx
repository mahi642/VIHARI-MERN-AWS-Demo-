import React from "react";
import "@fortawesome/fontawesome-free/css/all.css";
import profileImage from "../Assets/profile.png";
import myProfile from "../Assets/myProfile.png";
import myTrips from "../Assets/busTrips.png";
import Navbar from "../components/UI/Navbar";
import { useNavigate } from "react-router-dom";
import "../components/CSS/EditProfile.css";
const EditProfile = () => {
  const navigate = useNavigate();

  const handleSave = (e) => {
    navigate("/profile");
  };
  const handleCancel = (e) => {
    navigate("/profile");
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

                <input className="inp-name" type="text" placeholder="name" />
              </div>
              <div>
                <h2>Gender</h2>

                <input type="radio" name="gender" id="" value="male" />
                <label for="gender">Male</label>

                <input
                  className="female-radio-btn"
                  type="radio"
                  name="gender"
                  id=""
                  value="female"
                />
                <label for="gender">Female</label>
              </div>
            </div>
            <div className="dob1">
              <h2>Date of Birth</h2>
              <input
                className="inp-name"
                type="date"
                name="dob"
                id=""
                placeholder="dob"
              />
            </div>
            <div className="contact-info">
              <hr />
              <h1>My Contact Information</h1>

              <div className="nameAndGender">
                <div>
                  <h2>Email</h2>
                  <input type="email" className="inp-name" />
                </div>
                <div>
                  <h2>Mobile Number</h2>
                  <input className="inp-name" type="text" name="phone" id="" />
                </div>
              </div>

              <div className="cancel-save">
                <button type="submit" onClick={handleCancel}>
                  CANCEL
                </button>
                <button type="submit" onClick={handleSave}>
                  SAVE
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EditProfile;
