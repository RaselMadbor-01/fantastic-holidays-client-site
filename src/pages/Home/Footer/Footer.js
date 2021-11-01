import React from "react";
import logo from "../../../images/logo/logo.png";
import {
  AiOutlineInstagram,
  AiOutlineTwitter,
  AiOutlineMail,
} from "react-icons/ai";
import { FaFacebookF, FaDribbble, FaMapMarkerAlt } from "react-icons/fa";
import { BiPhone } from "react-icons/bi";

const Footer = () => {
  return (
   <div className="bg-blue-500 text-white px-14 py-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4  pb-8 justify-items-start md:justify-items-center">
      <div>
      <div className="flex flex-row justify-center items-center">
               <img src={logo} className="h-8 w-8" alt="" />
               <h1 className="text-2xl font-bold text-blue-700 p-2">Fantastic<span className="text-yellow-500">Holidays</span></h1>
           </div>
        <p className="pl-4 pb-4">
          Travel has helped us to understand the meaning of life and it has
          helped us become better people.
        </p>
        <div className="flex flex-row justify-start items-center pl-4 hover:text-yellow-400">
          <span className="pr-2">{<BiPhone />}</span>
          <p>+012 301 234</p>
        </div>
        <div className="flex flex-row justify-start items-center pl-4 hover:text-yellow-400">
          <span className="pr-2">{<AiOutlineMail />}</span>
          <p>fantastic@holiday.com</p>
        </div>
        <div className="flex flex-row justify-start items-center pl-4 hover:text-yellow-400">
          <span className="pr-2">{<FaMapMarkerAlt />}</span>
          <p>Mon-Fri:10AM - 7PM</p>
        </div>
      </div>
      <div>
        <h1 className="text-xl font-bold pb-4">Company</h1>
        <ul>
          <li className="hover:text-yellow-400  hover:underline">About us</li>
          <li className="hover:text-yellow-400  hover:underline">Destination</li>
          <li className="hover:text-yellow-400  hover:underline">Blogs</li>
          <li className="hover:text-yellow-400  hover:underline">Tours</li>
        </ul>
      </div>
      <div>
        <h1 className="text-xl font-bold pb-4">Services</h1>
        <ul>
          <li className="hover:text-yellow-400  hover:underline">Flight Booking</li>
          <li className="hover:text-yellow-400  hover:underline">Make Your Tour Plan</li>
          <li className="hover:text-yellow-400  hover:underline">Avrage Tour</li>
          <li className="hover:text-yellow-400  hover:underline">Booking Hotel</li>
        </ul>
      </div>
      <div>
        <h1 className="text-xl font-bold pb-4">Follow us</h1>
        <ul className="flex flex-row justify-center items-center">
          <li className="border-2 rounded-full p-2 hover:bg-yellow-400 mr-2">{<FaFacebookF />}</li>
          <li className="border-2 rounded-full p-2 hover:bg-yellow-400 mr-2">{<AiOutlineInstagram />}</li>
          <li className="border-2 rounded-full p-2 hover:bg-yellow-400 mr-2">{<AiOutlineTwitter />}</li>
          <li className="border-2 rounded-full p-2 hover:bg-yellow-400 mr-2">{<FaDribbble />}</li>
        </ul>
      </div>
    </div>
    <hr className="py-4" />
    <p className="text-center"> Copyright @2021 Fantastic Holidays</p>
   </div>
  );
};

export default Footer;
