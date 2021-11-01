import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import Slider from "react-animated-slider";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faQuoteLeft } from "@fortawesome/free-solid-svg-icons";
import "react-animated-slider/build/horizontal.css";
import "./Blog.css";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import Loader from "react-loader-spinner";

const Blogs = () => {
  const [clients, setClients] = useState([]);
  const commentIcon = <FontAwesomeIcon icon={faQuoteLeft} />;
  useEffect(() => {
    fetch("https://safe-peak-13707.herokuapp.com/allClient")
      .then((res) => res.json())
      .then((data) => {
        setClients(data);
      });
  }, []);
  return (
    <div className="px-14 py-8 ">
      <h1 className="text-center text-2xl font-bold text-yellow-500 pb-4 header-text">
        Our Traveller Say
      </h1>
      <h3 className="text-center text-2xl md:text-4xl font-medium text-blue-500">
        What Oue Traveller Say <br /> About Us
      </h3>
      <Slider>
        {clients.length ? (
          clients.map((client) => (
            <div
              key={client.id}
              className="flex flex-col justify-center items-center rounded p-4 text-center"
            >
              <div className="w-40 h-40 border-2 overflow-hidden rounded-full">
                <span className="text-xl text-yellow-500">{commentIcon}</span>{" "}
                <img src={client.image} className="w-screen" alt="" />
              </div>
              <h1 className="text-xl font-bold py-4">{client.name}</h1>
              <p className="px-4 text-gray-500">{client.description}</p>
            </div>
          ))
        ) : (
          <div className="flex flex-row justify-center items-center text-red-500">
            <Loader type="Puff" color="red" height={100} width={100} />
            Loading....
          </div>
        )}
      </Slider>
    </div>
  );
};

export default Blogs;
