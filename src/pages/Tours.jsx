import React, { useState, useEffect } from "react";
import Navbar from "../components/UI/Navbar";
import { Link } from "react-router-dom";
import Footer from "../components/UI/Footer";
import { useGetAllToursQuery } from '../Slices/agentApiSlice';
import "../components/CSS/AllTours.css";
import Loader from '../components/Loader/Loader';

const Tours = () => {
  const [tours, setAllTours] = useState([]);
  const { data: tourData, isLoading } = useGetAllToursQuery();

  useEffect(() => {
    if (tourData) {
      const updatedTourData = tourData.tours.map(tour => ({
        ...tour,
        DispImageurl: tour.DispImageurl.replace(/^backend\\/, '').replace(/\\/g, '/')      }));
      setAllTours(updatedTourData);
    }
  }, [tourData]);

  if (isLoading) return <Loader />;

  return (
    <>
      <Navbar />
      <div>
        <h2>Tours</h2>
        <div id="pack" className="packages" style={{ marginTop: '40px' }}>
          <div className="container">
            <div className="packages-content">
              <div className="row">
                {tours.map((tour) => (
                  <div className="col-md-4 col-sm-6" key={tour._id}>
                    <div className="single-package-item">
                      <div>
                        <img style={{ height: '200px' }} src={`/${tour.DispImageurl}`} alt="package-place" />
                      </div>
                      <div className="single-package-item-txt">
                        <h3>
                          <a href={`/tourplaces/${tour._id}`}>{tour.tname}</a>
                          <span className="pull-right">
                            <i className="fa-solid fa-indian-rupee-sign"></i>
                            {tour.tprice}
                          </span>
                        </h3>
                        <div className="packages-para">
                          <p>
                            <i className="fa fa-angle-right"></i> 5-star accommodation
                          </p>
                          <p>
                            <span>
                              <i className="fa fa-angle-right"></i> transportation
                            </span>
                            <i className="fa fa-angle-right"></i> food facilities
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
                        <div className="about-btn">
                          <a href="/payment">
                            <button style={{ backgroundColor: '#06bbcc' }} className="about-view packages-btn">
                              Book now
                            </button>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Tours;
