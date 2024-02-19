/* eslint-disable jsx-a11y/aria-role */
import React, { useContext, useState } from "react";
import "../CSS/Layout.css";
import busContext from "../../context/bus/busContext";
import { useNavigate } from "react-router-dom";

const Layout = ({bus}) => {
 const navigate =useNavigate()

  const {updateSeats} = useContext(busContext)
   const [selectedSeats, setselectedSeats] = useState([])
   const onchange = (e)=>{
   if(e.target.checked){ 
   setselectedSeats([...selectedSeats,e.target.id])
   }
   else {
    setselectedSeats(selectedSeats.filter((id)=>id!==e.target.id))
   } 
   } 
   const handleOnSubmit = (e)=>{
    e.preventDefault()
    if(selectedSeats.length>0){
    updateSeats(bus,selectedSeats)
    navigate('/passengers')
    }
    else {
      alert('Select a seat')
    }
   } 
  return (
<div className="container-fluid bus-layout my-5">
<ol className="d-flex">
    <li className="row row--1">
      <ol className="seats" type="A">
        <li className="seat my-2 mx-3">
          <input type="checkbox" onChange={(e)=>{onchange(e)}} id="1A" />
          <label htmlFor="1A">1A</label>
        </li>
        <li className="seat my-2 mx-3">
          <input type="checkbox" onChange={(e)=>{onchange(e)}} id="1B" />
          <label htmlFor="1B">1B</label>
        </li>
         <li className="my-4">

         </li>
        <li className="seat my-2 mx-3">
          <input type="checkbox" onChange={(e)=>{onchange(e)}} disabled id="1D" />
          <label htmlFor="1D">Occupied</label>
        </li>
        <li className="seat my-2 mx-3">
          <input type="checkbox" onChange={(e)=>{onchange(e)}} id="1E" />
          <label htmlFor="1E">1E</label>
        </li>
      </ol>
    </li>
    <li className="row row--2">
      <ol className="seats" type="A">
        <li className="seat my-2 mx-3">
          <input type="checkbox" onChange={(e)=>{onchange(e)}} id="2A" />
          <label htmlFor="2A">2A</label>
        </li>
        <li className="seat my-2 mx-3">
          <input type="checkbox" onChange={(e)=>{onchange(e)}} id="2B" />
          <label htmlFor="2B">2B</label>
        </li>
        <li className="my-4">

        </li>
        <li className="seat my-2 mx-3">
          <input type="checkbox" onChange={(e)=>{onchange(e)}} id="2D" />
          <label htmlFor="2D">2D</label>
        </li>
        <li className="seat my-2 mx-3">
          <input type="checkbox" onChange={(e)=>{onchange(e)}} id="2E" />
          <label htmlFor="2E">2E</label>
        </li>
      </ol>
    </li>
    <li className="row row--3">
      <ol className="seats" type="A">
        <li className="seat my-2 mx-3">
          <input type="checkbox" onChange={(e)=>{onchange(e)}} id="3A" />
          <label htmlFor="3A">3A</label>
        </li>
        <li className="seat my-2 mx-3">
          <input type="checkbox" onChange={(e)=>{onchange(e)}} id="3B" />
          <label htmlFor="3B">3B</label>
        </li>
        <li className="my-4">

        </li>
        <li className="seat my-2 mx-3">
          <input type="checkbox" onChange={(e)=>{onchange(e)}} id="3D" />
          <label htmlFor="3D">3D</label>
        </li>
        <li className="seat my-2 mx-3">
          <input type="checkbox" onChange={(e)=>{onchange(e)}} id="3E" />
          <label htmlFor="3E">3E</label>
        </li>

      </ol>
    </li>
    <li className="row row--4">
      <ol className="seats" type="A">
        <li className="seat my-2 mx-3">
          <input type="checkbox" onChange={(e)=>{onchange(e)}} id="4A" />
          <label htmlFor="4A">4A</label>
        </li>
        <li className="seat my-2 mx-3">
          <input type="checkbox" onChange={(e)=>{onchange(e)}} id="4B" />
          <label htmlFor="4B">4B</label>
        </li>
        <li className="my-4">

        </li>
        <li className="seat my-2 mx-3">
          <input type="checkbox" onChange={(e)=>{onchange(e)}} id="4D" />
          <label htmlFor="4D">4D</label>
        </li>
        <li className="seat my-2 mx-3">
          <input type="checkbox" onChange={(e)=>{onchange(e)}} id="4E" />
          <label htmlFor="4E">4E</label>
        </li>
      </ol>
    </li>
    <li className="row row--5">
      <ol className="seats" type="A">
        <li className="seat my-2 mx-3">
          <input type="checkbox" onChange={(e)=>{onchange(e)}} id="5A" />
          <label htmlFor="5A">5A</label>
        </li>
        <li className="seat my-2 mx-3">
          <input type="checkbox" onChange={(e)=>{onchange(e)}} id="5B" />
          <label htmlFor="5B">5B</label>
        </li>
        <li className="my-4">

        </li>
        <li className="seat my-2 mx-3">
          <input type="checkbox" onChange={(e)=>{onchange(e)}} id="5D" />
          <label htmlFor="5D">5D</label>
        </li>
        <li className="seat my-2 mx-3">
          <input type="checkbox" onChange={(e)=>{onchange(e)}} id="5E" />
          <label htmlFor="5E">5E</label>
        </li>

      </ol>
    </li>
    <li className="row row--6">
      <ol className="seats" type="A">
        <li className="seat my-2 mx-3">
          <input type="checkbox" onChange={(e)=>{onchange(e)}} id="6A" />
          <label htmlFor="6A">6A</label>
        </li>
        <li className="seat my-2 mx-3">
          <input type="checkbox" onChange={(e)=>{onchange(e)}} id="6B" />
          <label htmlFor="6B">6B</label>
        </li>
        <li className="my-4">

        </li>
        <li className="seat my-2 mx-3">
          <input type="checkbox" onChange={(e)=>{onchange(e)}} id="6D" />
          <label htmlFor="6D">6D</label>
        </li>
        <li className="seat my-2 mx-3">
          <input type="checkbox" onChange={(e)=>{onchange(e)}} id="6E" />
          <label htmlFor="6E">6E</label>
        </li>

      </ol>
    </li>
    <li className="row row--7">
      <ol className="seats" type="A">
        <li className="seat my-2 mx-3">
          <input type="checkbox" onChange={(e)=>{onchange(e)}} id="7A" />
          <label htmlFor="7A">7A</label>
        </li>
        <li className="seat my-2 mx-3">
          <input type="checkbox" onChange={(e)=>{onchange(e)}} id="7B" />
          <label htmlFor="7B">7B</label>
        </li>
        <li className="my-4">

        </li>
        <li className="seat my-2 mx-3">
          <input type="checkbox" onChange={(e)=>{onchange(e)}} id="7D" />
          <label htmlFor="7D">7D</label>
        </li>
        <li className="seat my-2 mx-3">
          <input type="checkbox" onChange={(e)=>{onchange(e)}} id="7E" />
          <label htmlFor="7E">7E</label>
        </li>

      </ol>
    </li>
    <li className="row row--8">
      <ol className="seats" type="A">
        <li className="seat my-2 mx-3">
          <input type="checkbox" onChange={(e)=>{onchange(e)}} id="8A" />
          <label htmlFor="8A">8A</label>
        </li>
        <li className="seat my-2 mx-3">
          <input type="checkbox" onChange={(e)=>{onchange(e)}} id="8B" />
          <label htmlFor="8B">8B</label>
        </li>
        <li className="my-4">

        </li>
        <li className="seat my-2 mx-3">
          <input type="checkbox" onChange={(e)=>{onchange(e)}} id="8D" />
          <label htmlFor="8D">8D</label>
        </li>
        <li className="seat my-2 mx-3">
          <input type="checkbox" onChange={(e)=>{onchange(e)}} id="8E" />
          <label htmlFor="8E">8E</label>
        </li>

      </ol>
    </li>
    <li className="row row--9">
      <ol className="seats" type="A">
        <li className="seat my-2 mx-3">
          <input type="checkbox" onChange={(e)=>{onchange(e)}} id="9A" />
          <label htmlFor="9A">9A</label>
        </li>
        <li className="seat my-2 mx-3">
          <input type="checkbox" onChange={(e)=>{onchange(e)}} id="9B" />
          <label htmlFor="9B">9B</label>
        </li>
        <li className="my-4">

        </li>
        <li className="seat my-2 mx-3">
          <input type="checkbox" onChange={(e)=>{onchange(e)}} id="9D" />
          <label htmlFor="9D">9D</label>
        </li>
        <li className="seat my-2 mx-3">
          <input type="checkbox" onChange={(e)=>{onchange(e)}} id="9E" />
          <label htmlFor="9E">9E</label>
        </li>

      </ol>
    </li>
    <li className="row row--10">
      <ol className="seats" type="A">
        <li className="seat my-2 mx-3">
          <input type="checkbox" onChange={(e)=>{onchange(e)}} id="10A" />
          <label htmlFor="10A">10A</label>
        </li>
        <li className="seat my-2 mx-3">
          <input type="checkbox" onChange={(e)=>{onchange(e)}} id="10B" />
          <label htmlFor="10B">10B</label>
        </li>
        <li className="my-4">

        </li>
        <li className="seat my-2 mx-3">
          <input type="checkbox" onChange={(e)=>{onchange(e)}} id="10D" />
          <label htmlFor="10D">10D</label>
        </li>
        <li className="seat my-2 mx-3">
          <input type="checkbox" onChange={(e)=>{onchange(e)}} id="10E" />
          <label htmlFor="10E">10E</label>
        </li>
      </ol>
    </li>

  </ol>
  <div className="my-5">
    <button className="btn btn-primary" style={{fontSize:'15px'}}
    onClick={(e)=>{handleOnSubmit(e)}}>
    Book Now!
    </button></div>
</div>
  );
};

export default Layout;