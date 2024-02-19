import React, { useState, useEffect } from "react";
import Navbar from "../components/UI/Navbar";
import { Link } from "react-router-dom";
import Footer from "../components/UI/Footer";

import "../components/CSS/AllTours.css";
const Tours = () => {
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


  return (
    <>
      <Navbar />
      <div>
        <h1 style={{fontSize:'30px'}}>Tours</h1>
      </div>

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
                        <Link to={`/admindb/booktour/${tour.id}`} style={{ textDecoration: "none", color: '#4e95a3' }}>
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
                      <div className="about-btn" style={{ display: 'flex', margin: '0px' }}>
                        <Link to="" style={{ textDecoration: 'none' }}>
                          <button
                            style={{ backgroundColor: "#06bbcc" }}
                            className="about-view packages-btn"
                            data-toggle="modal"
                            data-target={`#my-${tour.id}`}
                          >
                            Book tour
                          </button>
                        </Link>

                        
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Tours;