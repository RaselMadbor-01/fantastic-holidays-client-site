import React from "react";
import { NavLink } from "react-router-dom";
import useAuth from "../../../hooks/useAuth";
import logo from "../../../images/logo/logo.png";
import { GiHamburgerMenu } from "react-icons/gi";


import "./Navbar.css";
import { useState } from "react";

const Navbar = () => {
  const[showNav,setShowNav]=useState(false);
  const { user ,googleSignOut} = useAuth();
  console.log(showNav);
  return (
    <div className="flex flex-row justify-between items-start lg:items-center  pt-8 px-14">
      <div>
      <div className="flex flex-row justify-center items-center">
        <img src={logo} className="h-8 w-8" alt="" />
        <h1 className="text-2xl font-bold text-blue-500 p-2">
          Fantastic<span className="text-yellow-500">Holidays</span>
        </h1>
      </div>
      {
        showNav?<ul className="flex flex-col justify-start items-center">
        <li className="mr-4 text-lg font-medium text-blue-500 hover:text-yellow-500 nav-li">
          <NavLink to="">Home</NavLink>
        </li>
        <li className="mr-4 text-lg font-medium text-blue-500 hover:text-yellow-500 nav-li">
          <NavLink to="">About us</NavLink>
        </li>
        <li className="mr-4 text-lg font-medium text-blue-500 hover:text-yellow-500 nav-li">
          <NavLink to="">Destinations</NavLink>
        </li>
        {user.email && (
          <>
            <li className="mr-4 text-lg font-medium text-blue-500 hover:text-yellow-500 nav-li">
              <NavLink to="/mybookings">MyBookings</NavLink>
            </li>
            <li className="mr-4 text-lg font-medium text-blue-500 hover:text-yellow-500 nav-li">
              <NavLink to="/allbookings">Manage All Bookings</NavLink>
            </li>
          </>
        )}
        {user.email ? (
          <>
            <li className="mr-4 text-lg font-medium text-blue-500 hover:text-yellow-500 nav-li">
              <NavLink to="" onClick={()=>googleSignOut()}>LoginOut</NavLink>
            </li>
            <li>
              <img className="w-5/12 border-2 border-blue-400 rounded-full" src={user.photoURL} alt="" />
            </li>
          </>
        ) : (
          <li className="mr-4 text-lg font-medium text-blue-500 hover:text-yellow-500 nav-li">
            <NavLink to="/login">Login</NavLink>
          </li>
        )}
      </ul>:""
      }
      </div>



      <ul className="flex flex-row justify-center items-center hidden lg:flex">
        <li className="mr-4 text-lg font-medium text-blue-500 hover:text-yellow-500 nav-li">
          <NavLink to="">Home</NavLink>
        </li>
        <li className="mr-4 text-lg font-medium text-blue-500 hover:text-yellow-500 nav-li">
          <NavLink to="">About us</NavLink>
        </li>
        <li className="mr-4 text-lg font-medium text-blue-500 hover:text-yellow-500 nav-li">
          <NavLink to="">Destinations</NavLink>
        </li>
        {user.email && (
          <>
            <li className="mr-4 text-lg font-medium text-blue-500 hover:text-yellow-500 nav-li">
              <NavLink to="/mybookings">MyBookings</NavLink>
            </li>
            <li className="mr-4 text-lg font-medium text-blue-500 hover:text-yellow-500 nav-li">
              <NavLink to="/allbookings">Manage All Bookings</NavLink>
            </li>
          </>
        )}
        {user.email ? (
          <>
            <li className="mr-4 text-lg font-medium text-blue-500 hover:text-yellow-500 nav-li">
              <NavLink to="" onClick={()=>googleSignOut()}>LoginOut</NavLink>
            </li>
            <li>
              <img className="w-5/12 border-2 border-blue-400 rounded-full" src={user.photoURL} alt="" />
            </li>
          </>
        ) : (
          <li className="mr-4 text-lg font-medium text-blue-500 hover:text-yellow-500 nav-li">
            <NavLink to="/login">Login</NavLink>
          </li>
        )}
      </ul>
      <div className="text-2xl font-bold lg:hidden text-blue-500 pt-4">
        {
          <GiHamburgerMenu onClick={()=>setShowNav(!showNav)}/>
        }
      </div>
    </div>
  );
};

export default Navbar;
