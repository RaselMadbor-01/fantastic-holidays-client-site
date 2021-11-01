import React from "react";
import logo from "../../images/logo/logo.png";
import { BsPeopleFill, BsPlus } from "react-icons/bs";
import { AiTwotoneDelete } from "react-icons/ai";
import "./AllBookings.css";
import { useState } from "react";
import { useEffect } from "react";
import Navbar from "../Home/Navbar/Navbar";

const AllBookings = () => {
    const[allBookings,setAllBookings]=useState([]);
    const [toggle,setToggle]=useState("All Bookings List")
    useEffect(()=>{
        fetch("https://safe-peak-13707.herokuapp.com/allBookings")
        .then(res=>res.json())
        .then(data=>{
            setAllBookings(data);
        })
    },[]);
    const handleDeleteBooking=(id)=>{
       const proceed=window.confirm("Are you sure? You want to delete this booking")
       if(proceed){
        fetch(`https://safe-peak-13707.herokuapp.com/deleteBooking/${id}`,{
            method:"DELETE"
        })
        .then(res=>res.json())
        .then(data=>{
            if(data.deletedCount>0){
                alert("deleted was Successfull");
                const restOfAllBookings=allBookings.filter(bk=>bk._id!=id);
                setAllBookings(restOfAllBookings);
              }
        })

       }
    }
    const toggleDetails=(e)=>{
      setToggle(e.target.innerText);
    }
  return (
    <div className="pl-12 py-4">
      <Navbar/>
      <div className="grid grid-cols-1 lg:grid-cols-5 gap-4">
        <div>
         
          <div className="flex flex-row justify-center items-center pt-8 pb-4 hover:text-blue-400">
          <span className="mx-2 font-bold text-xl">{<BsPeopleFill />}</span>
          <h3 onClick={toggleDetails}>
            All Bookings List
          </h3>
          </div>
          <div className="flex flex-row justify-center items-center hover:text-blue-400">
          <span className="mx-2 font-bold text-xl">{<BsPlus/>}</span>
          <h3 onClick={toggleDetails}>
           Add Destination
          </h3>
          </div>
        </div>
        <div className="col-span-1 lg:col-span-4">
          <div className="">
            {
              toggle==="All Bookings List"?<h1 className="text-xl text-center font-bold mb-8 pl-12 pt-4 text-blue-500">All Bookings List :</h1>:<h1 className="text-xl text-center font-bold mb-8 pl-12 pt-4 text-blue-500">Add Destination :</h1>
            }
            <div className="">
              <div className="bg-gray-300 pt-4 pl-4 h-auto  lg:h-screen w-1/4 md:w-full">
               {
                 toggle==="All Bookings List"? <table className="table-auto sm:w-96 rounded" id="booking-table">
                 <thead className="bg-gray-300  rounded p-4 text-white">
                   <tr>
                     <th>Name</th>
                     <th>Email</th>
                     <th>Booking Date</th>
                     <th>Destination Name</th>
                     <th>Action</th>
                   </tr>
                 </thead>
                 <tbody>
                     {
                         allBookings.map(bookings=><tr key={bookings?._id}>
                             <td>{bookings?.name}</td>
                             <td>{bookings?.email}</td>
                             <td>{new Date(bookings?.from).toLocaleDateString()}</td>
                             <td>{bookings?.Destination}</td>
                             <td onClick={()=>handleDeleteBooking(bookings?._id)}><span className="text-3xl font-bold text-red-400 cursor-pointer hover:text-red-500">{<AiTwotoneDelete/>}</span></td>
                         </tr>)
                     }
                 </tbody>
               </table>:<div>
                 <h1>Add your Destination here</h1>
               </div>
               }
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AllBookings;
