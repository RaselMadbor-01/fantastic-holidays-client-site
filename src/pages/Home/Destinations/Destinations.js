import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMapMarkerAlt,
  faClock,
  faUserFriends,
} from "@fortawesome/free-solid-svg-icons";
import Rating from "react-rating";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import Loader from "react-loader-spinner";

const Destinations = () => {
  const [destination, setDestination] = useState([]);
  const locationIcon = <FontAwesomeIcon icon={faMapMarkerAlt} />;
  const timeIcon = <FontAwesomeIcon icon={faClock} />;
  const peopleIcon = <FontAwesomeIcon icon={faUserFriends} />;

  useEffect(() => {
    fetch("https://safe-peak-13707.herokuapp.com/allDestination")
      .then((res) => res.json())
      .then((data) => {
        setDestination(data);
      });
  }, []);
  return (
    <div className="p-14">
      <h1 className="text-center text-3xl md:text-6xl font-bold py-4 text-blue-400">
        Destinations
      </h1>
      <p className="text-center text-base w-11/12 md:w-3/5  mx-auto">
        Travel has helped us to understand the meaning of life and it has helped
        us become better people. Each time we travel, we see the world with new
        eyes.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 py-8">
        {destination.length ? (
          destination.map((item) => (
            <div key={item.id} className="shadow p-6 hover:shadow-2xl">
              <img src={item.image} className="w-full" alt="" />
              <p className="pt-2">
                <span className="text-blue-400 pr-2">{locationIcon}</span>
                <span className="text-black hover:text-yellow-400">
                  {item.location}
                </span>
              </p>
              <h1 className="text-2xl font-medium py-2 hover:text-blue-400">
                {item.name}
              </h1>
              <p className="pb-2">{item.detail.slice(0, 85)}...</p>

              {
                <Rating
                  className="text-yellow-400"
                  initialRating={item.rating}
                  readonly
                  emptySymbol={
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-6 w-6"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"
                      />
                    </svg>
                  }
                  fullSymbol={
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-6 w-6"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  }
                />
              }
              <div className="flex justify-between items-center">
                <p>
                  <span className="text-blue-600 pr-1">{timeIcon}</span>
                  {item.day}Days
                </p>
                <p>
                  <span className="text-blue-600 pr-1">{peopleIcon}</span>
                  {item.people}
                  <span className="font-bold text-2xl">+</span>
                </p>
                <p className="font-bold text-blue-600 hover:text-yellow-600">
                  <span className="">$</span>
                  {item.price}
                </p>
              </div>
              <hr className="mt-5 text-black" />
              <div className="grid justify-items-center pt-4">
                <Link to={`/destination/${item.id}`}>
                  <button className="bg-blue-500 text-white font-medium rounded py-4 px-8 hover:bg-yellow-500">
                    Booking Now
                  </button>
                </Link>
              </div>
            </div>
          ))
        ) : (
          <div className="flex flex-row justify-center items-center text-red-500">
            <Loader type="Puff" color="red" height={100} width={100} />
            Loading....
          </div>
        )}
      </div>
    </div>
  );
};

export default Destinations;
<h1>This is Destination</h1>;
