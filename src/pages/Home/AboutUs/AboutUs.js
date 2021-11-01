import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCheckCircle,faClock,faThumbsUp,faHeart,faHeadset,faWifi
} from "@fortawesome/free-solid-svg-icons";
import aboutusImage from "../../../images/aboutus.png";

const AboutUs = () => {
    const checkIcon = <FontAwesomeIcon icon={faCheckCircle} />;
    const clockIcon = <FontAwesomeIcon icon={faClock} />;
    const thumbsupIcon = <FontAwesomeIcon icon={faThumbsUp} />;
    const heartIcon = <FontAwesomeIcon icon={faHeart} />;
    const heartSetIcon = <FontAwesomeIcon icon={faHeadset} />;
    const netWorkIcon = <FontAwesomeIcon icon={faWifi} />;
    return (
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 justify-items-center items-center px-14 py-8">
           <div>
               <h1 className="text-6xl font-bold text-blue-500 pb-8 md:pb-4">About us</h1>
               <p className="text-gray-600 pb-8 md:pb-4">Top Tour Operators and Travel Agency. We offering in total 793 tours and holidays throughout the world. Combined we have received 1532 customer reviews and an average rating of 5 out of 5 stars.
                <br />
               Travel has helped us to understand the meaning of life and it has helped us become better people. Each time we travel, we see the world with new eyes.</p>
               <div className="flex flex-cols justify-start">
                   <ul className="pr-8">
                       <li className="text-sm md:text-lg py-2 text-gray-600"><span className="text-yellow-400 pr-2">{checkIcon}</span> Safety Travel System</li>
                       <li className="text-sm md:text-lg py-2 text-gray-600"><span className="text-yellow-400 pr-2">{clockIcon}</span> Expert Trip Planning</li>
                       <li className="text-sm md:text-lg py-2 text-gray-600"><span className="text-yellow-400 pr-2">{thumbsupIcon}</span> Right Solution & Guide</li>
                   </ul>
                   <ul>
                   <li className="text-sm md:text-lg py-2 text-gray-600"><span className="text-yellow-400 pr-2">{heartIcon}</span> Budget-Friendly Tour</li>
                   <li className="text-sm md:text-lg py-2 text-gray-600"><span className="text-yellow-400 pr-2">{heartSetIcon}</span> Fast Communication</li>
                   <li className="text-sm md:text-lg py-2 text-gray-600"><span className="text-yellow-400 pr-2">{netWorkIcon}</span> 24/7 Customer Support</li>
                   </ul>
               </div>
           </div>
           <div>
               <img src={aboutusImage} alt="" />

           </div>
        </div>
    );
};

export default AboutUs;