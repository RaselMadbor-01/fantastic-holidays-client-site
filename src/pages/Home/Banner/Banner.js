import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import Slider from "react-animated-slider";
import "react-animated-slider/build/horizontal.css";
import "./Banner.css";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import Loader from "react-loader-spinner";

const Banner = () => {
  const [content, setContent] = useState([]);
  useEffect(() => {
    fetch("https://safe-peak-13707.herokuapp.com/allBanner")
      .then((res) => res.json())
      .then((data) => setContent(data));
  }, []);
  return (
    <div className="py-12">
      <Slider autoplay={1000}>
        {content.length ? (
          content.map((item, index) => (
            <div
              key={index}
              className="banner-section"
              style={{
                background: `linear-gradient( rgba(0, 0, 0, 0.5) 100%, rgba(0, 0, 0, 0.5)100%),url('${item.image}')`,
              }}
            >
              <div className="text-white flex flex-col justify-center items-center  text-center">
                <h1 className="text-3xl px-8 md:px-0 md:text-5xl font-bold mt-52 pb-4">{item.title}</h1>
                <p className="lg:text-xl font-medium pb-4 px-24">
                  {item.description}
                </p>
                <button className="rounded-full py-4 px-8 font-bold bg-blue-400 hover:bg-yellow-400">
                  Read More
                </button>
              </div>
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

export default Banner;
