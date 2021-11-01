import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import ReactDatePicker from "react-datepicker";
import { Controller, useForm } from "react-hook-form";
import { useHistory, useParams } from "react-router";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCalendarAlt
} from "@fortawesome/free-solid-svg-icons";
import "./BookYourDestination.css";
import "react-datepicker/dist/react-datepicker.css";
import Navbar from "../Home/Navbar/Navbar";
import useAuth from "../../hooks/useAuth";

const BookYourDestination = () => {
  const{user}=useAuth();
  const { id } = useParams();
  const history=useHistory();
  const dateIcon = <FontAwesomeIcon icon={faCalendarAlt} />;
  console.log(id);
  const [specificeDestination, setSpecificeDestination] = useState({});
  useEffect(() => {
    fetch("/fakeDestinations.json")
      .then((res) => res.json())
      .then((data) => {
        const destinationDetail = data.find((el) => el.id == id);
        setSpecificeDestination(destinationDetail);
        console.log(destinationDetail);
      });
  }, []);
  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    data.image=specificeDestination.image;
    data.price=specificeDestination.price;
    data.days=specificeDestination.day;
    data.night=specificeDestination.night;
    console.log(data);
    fetch("https://safe-peak-13707.herokuapp.com/allBookingInformation",{
      method:"POST",
      headers:{
        'content-type': 'application/json'
      },
      body:JSON.stringify(data)
    })
    .then(res=>res.json())
    .then(data=>{
      if(data.insertedId){
      alert("Your Booking is successfully. Done You can now saw your bookings and you can also see your bookings");
      history.push("/");
      }
    })
  };
  return (
    <div
      className="destination-cover  px-12 content-center "
      style={{
        backgroundImage: `linear-gradient( rgba(0, 0, 0, 0.5) 100%, rgba(0, 0, 0, 0.5)100%),url(${specificeDestination?.image})`,
      }}
    >
      <div className="grid grid-cols-2 gap-4 content-center">
      <div className="text-white flex flex-col justify-center ">
        <h2 className="text-4xl font-bold mb-4">
          {specificeDestination?.name}
        </h2>
        <p className="text-lg font-base pr-12">
          {specificeDestination?.detail}
        </p>
      </div>
      <div>
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="bg-white text-black p-4 w-5/6 rounded m-4"
        >
          <h1 className="text-center text-4xl font-bold text-blue-500 pb-4">
            Booking Details
          </h1>

         <div>
         <label className="text-gray-500 font-medium">Your Name</label>
          <br />
          <input
            type="text"
           defaultValue= {
               user?user.displayName:""
            }
            className="w-full bg-gray-100 p-2 rounded my-2 focus:outline-none"
            {...register("name", { required: true })}
            placeholder="Your Name"
          />
          {errors.name && <span className="text-red-400">This field is required</span>}
            </div>
          <br />
          <div>
          <label className="text-gray-500 font-medium">Email</label>
          <br />
          <input
            type="email"
            defaultValue= {
              user?user.email:""
           }
            className="w-full bg-gray-100 p-2 rounded my-2 focus:outline-none"
            {...register("email", { required: true })}
            placeholder="Your Email"
          />
          {errors.email && <span className="text-red-400">This field is required</span>}
          </div>
          <br />

          <label className="text-gray-500 font-medium">From</label>
          <br />
         <div className="flex flex-row relative">
         <Controller
            control={control}
            {...register("from", { required: true })}
            name="from"
            render={({ field }) => (
              <ReactDatePicker
                className="w-full bg-gray-100 p-2 rounded my-2 focus:outline-none"
                placeholderText="From"
                dateFormat="dd-MM-yyyy"
                onChange={(e) => field.onChange(e)}
                selected={field.value}
                minDate={new Date()}
              />
            )}
          />
          <span className="absolute bottom-4 right-4 text-gray-500 cursor-pointer">
              {dateIcon}
          </span>
         </div>
          {errors.from && <span className="text-red-400">This field is required</span>}
          <br />
          <label className="text-gray-500 font-medium">To</label>
          <br />
          <div className="flex flex-row relative">
          <Controller
            control={control}
            {...register("To", { required: true })}
            name="To"
            render={({ field }) => (
              <ReactDatePicker
                className="w-full bg-gray-100 p-2 rounded my-2 focus:outline-none"
                placeholderText="To"
                dateFormat="dd-MM-yyyy"
                onChange={(e) => field.onChange(e)}
                selected={field.value}
                minDate={(new Date())} 
                
              />
            )}
          />
           <span className="absolute bottom-4 right-4 text-gray-500 cursor-pointer">
              {dateIcon}
          </span>
         </div>
          {errors.To && <span className="text-red-400">This field is required</span>}
          <br />

         <div>
         <label className="text-gray-500 font-medium">Destination</label>
          <br />
          <input
          defaultValue= {
            specificeDestination?specificeDestination.name:""
         }
            className="w-full bg-gray-100 p-2 rounded my-2 focus:outline-none"
            {...register("Destination", { required: true })}
            placeholder="Destination"
          />
          {errors.Destination && <span className="text-red-400">This field is required</span>}
             </div>
          <br />
          <input
            type="submit"
            className="w-full bg-gray-100 p-2 rounded my-2 bg-blue-400 text-white focus:outline-none"
            value="Place Your Booking"
          />
        </form>
      </div>
      </div>
    </div>
  );
};

export default BookYourDestination;
