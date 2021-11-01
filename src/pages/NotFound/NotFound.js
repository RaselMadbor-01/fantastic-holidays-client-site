import React from 'react';
import { useHistory } from 'react-router';
import notFoundImage from "../../images/404.png";

const NotFound = () => {
    const history=useHistory();
    const handleBackHome=()=>{
        history.push("/");
    }
    return (
        <div className="flex flex-col justify-center items-center">
            <img src={notFoundImage} alt="" />
            <button onClick={handleBackHome} className="text-xl font-bold text-white bg-yellow-400 py-4 px-8 rounded hover:bg-blue-500">Back To Home</button>
        </div>
    );
};

export default NotFound;