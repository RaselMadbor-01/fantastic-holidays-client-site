import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import useAuth from "../../hooks/useAuth";
import orderImage from "../../images/order.png";
import Navbar from "../Home/Navbar/Navbar";
import "./MyBookings.css";

const MyBookings = () => {
  const {user}=useAuth();
  const[userBooking,setUserBooking]=useState([]);
  useEffect(()=>{
  if(user.email){
    fetch(`https://safe-peak-13707.herokuapp.com/mybookings?email=${user?.email}`)
  .then(res=>res.json())
  .then(data=>{
    setUserBooking(data);
  })
  }

  },[]);
  const handleDeleted=(id)=>{
    const proceed=window.confirm("Are you sure? You want to delete this booking...")
    if(proceed){
      fetch(`https://safe-peak-13707.herokuapp.com/boolingDelete/${id}`,{
      method:"DELETE"
    })
    .then(res=>res.json())
    .then(data=>{
      if(data.deletedCount>0){
        alert("deleted was Successfull");
        const restOfBookings=userBooking.filter(bk=>bk._id!=id);
        setUserBooking(restOfBookings);
      }
    })
    }
    
  }


  return (
    <div>
      <Navbar />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 justify-start items-start py-8 px-12">
        <div>
          <img src={orderImage} alt="" />
        </div>

        <div>
          <h1 className="text-center text-5xl font-bold text-blue-500 mb-8 pt-8 pb-6 order-text">
            My Bookings{" "}
          </h1>
          {
            userBooking.map(booking=><div key={booking._id} className="flex flex-row justify-around items-center rounded py-6 h-44 shadow mb-6 hover:shadow-xl">
            <div className="h-40 pr-4">
              <img  className="w-40 rounded" src={booking.image} alt="" />
            </div>
            <div>
              <h1 className="text-3xl font-bold text-gray-400 mb-2">{booking.Destination}</h1>
              <p className="text-lg font-medium font-bold text-gray-500 mb-4">Price:${booking.price}</p>
              <div className="flex flex-row justify-end items-end">
              <button className="py-2 px-4 bg-blue-400 rounded text-white hover:bg-yellow-400" onClick={()=>handleDeleted(booking._id)}>Cancel</button>
              </div>
            </div>
          </div>)
          }
        </div>
      </div>
    </div>
  );
};

export default MyBookings;
