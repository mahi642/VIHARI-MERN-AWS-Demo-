import React, { useState, useEffect } from "react";
import AdminNavbar from "../components/UI/AgentNavbar";
import { Link } from "react-router-dom";

import "../components/CSS/AllTours.css";
const AllTours = () => {
  const [tours, setTours] = useState([]);

  useEffect(() => {
    const getTours = () => {
      fetch("http://localhost:8000/tours")
        .then((res) => {
          return res.json();
        })
        .then((toursData) => {
          setTours(toursData);
        })
        .catch((err) => {
          console.error(err.message);
        });
    };
    getTours();
  }, []);

  const DeleteTour = (id) => {
    const confirmDelete = window.confirm('Are you sure you want to delete this tour?');

    if (confirmDelete) {
      fetch('http://localhost:8000/tours/' + id, {
        method: 'DELETE',
      })
        .then((res) => {
          if (!res.ok) {
            throw new Error('Network response was not ok');
          }
          alert('Deleted Successfully');
          window.location.reload();
        })
        .catch((err) => {
          console.error('Error during deletion:', err.message);

        });
    }
  };

  return (
    <>
      <AdminNavbar />
      <div>
        <h1>Tour Details</h1>
      </div>
      <Link to="/agent/addtour">
        <button className="addnew btn btn-success" style={{ fontSize: '15px' }} type="button">
          <i className="fa fa-user-plus"></i>&nbsp; Add New Tour
        </button>
      </Link>
      <hr />

      <div id="pack" className="packages">
        <div className="container">
          <div className="packages-content">
            <div className="row">
              {tours.map((tour) => (
                <div className="col-md-4 col-sm-6" key={tour.id}>
                  <div className="single-package-item">
                    <div>
                      <img
                        style={{ height: "200px" }}
                        src={`${tour.imagePath}`}
                        alt="package-place"
                      />
                    </div>
                    <div className="single-package-item-txt">
                      <h3>
                        <Link to={`/admindb/opentour/${tour.id}`} style={{ textDecoration: "none", color: '#4e95a3' }}>
                          {tour.tourName}
                        </Link>
                        <span className="pull-right" style={{ color: '#4e95a3' }} >
                          &nbsp; ₹{tour.tourPrice}
                        </span>
                      </h3>
                      <div className="packages-para">
                        <p>
                          <i className="fa fa-angle-right"></i> 5 star
                          accommodation
                        </p>
                        <p>
                          <span>
                            <i className="fa fa-angle-right"></i> transportation
                          </span>
                        </p>
                      </div>
                      <div className="packages-review">
                        <p>
                          <i className="fa fa-star"></i>
                          <i className="fa fa-star"></i>
                          <i className="fa fa-star"></i>
                          <i className="fa fa-star"></i>
                          <i className="fa fa-star"></i>
                        </p>
                      </div>
                      <div className="about-btn" style={{ display: 'flex', margin: '20px' }}>
                        <Link to={`/admindb/edittour/${tour.id}`} style={{ textDecoration: 'none' }}>
                          <button
                            style={{ backgroundColor: "#06bbcc" }}
                            className="about-view packages-btn"
                            data-toggle="modal"
                            data-target={`#my-${tour.id}`}
                          >
                            Edit tour
                          </button>
                        </Link>

                        <button
                          style={{ backgroundColor: "red", marginLeft: '60px', width: '150px' }}
                          className="about-view packages-btn"
                          data-toggle="modal"
                          data-target={`#my-${tour.id}`}
                          onClick={() => DeleteTour(tour.id)}
                        >
                          Delete tour
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AllTours;