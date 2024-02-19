import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "../components/CSS/AdminDasboard.css";
import AdminNavbar from "../components/UI/AgentNavbar";
import { useGetAllBusesQuery,useDeleteBusMutation } from "../Slices/agentApiSlice";
import Loader from '../components/Loader/Loader'


const AllBuses = () => {    
  const [Buses, setAllBuses] = useState([]);

  const {data:BusData,isLoading,refetch}=useGetAllBusesQuery();

  const [deleteBus]=useDeleteBusMutation();

  useEffect(()=>{
    if(BusData){
      setAllBuses(BusData.buses);
    }
  },[BusData]);

  
  const handleDeleteBus = async (busId) => {
    try {
      const confirmed = window.confirm('Are you sure you want to delete this bus?');
      if (!confirmed) {
        return; 
      }
      await deleteBus(busId).unwrap();
      alert("Bus deleted successfully");
      await refetch();
    } catch (error) {

      console.error("Error deleting bus:", error);
    }
  };
  
  
  if (isLoading) return <Loader />;
  return (
    <div>
      <AdminNavbar />
      <div>
        <h1>Buses Details</h1>
      </div>
      <Link to="/agent/addbus">
        <button className="addnew btn btn-success" type="button" style={{ fontSize: '15px' }}>
          <i className="fa fa-user-plus"></i>&nbsp; Add New Bus
        </button>
      </Link>
      <hr />

      <table className="table" style={{ padding: '5px' }}>
        <thead>
         <tr>
            <th scope="col">Bus Image</th>
            <th scope="col">Bus Name</th>
            <th scope="col">Departure Time</th>
            <th scope="col">Arrival Time</th>
            <th scope="col">Duration</th>
            <th scope="col">Bus Type</th>
            <th scope="col">Fare (₹)</th>
            <th scope="col">Action</th>
          </tr>
        </thead>
        <tbody>
          {Buses.map((bus) => (
            <>
            <tr key={bus._id} className='bus-row'>
              <td>
                <img
                  src={`http://localhost:4000/${bus.Imageurl.replace(/\\/g, '/')}}`}
                 
                  alt=""
                  style={{ height: '80px', objectFit: 'cover' }}
                />
              </td>
              <td>{bus.trname}</td>
              <td>{bus.deptime}</td>
              <td>{bus.arrtime}</td>
              <td>{bus.durtime}</td>
              <td>{bus.btype}</td>
              <td>₹{bus.tktprice}</td>
              <td style={{display:'flex',flexDirection:'column'}}>
              <Link to={`/admindb/editbus/${bus._id}`}>
                  <button className="btn btn-success" style={{fontSize:'15px'}}> Edit Bus</button>
                </Link>
                <button
                  type="button" style={{marginTop:"10px",fontSize:'15px', width:'80px',marginLeft:'30px',marginRight:'-20px'}}
                  className="delete-bus-btn btn btn-danger"
                  data-bus-id={bus.id}
                  onClick={() => handleDeleteBus(bus._id)}
                >
                  Delete
                </button>
              </td>
            </tr>
           </>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default AllBuses;