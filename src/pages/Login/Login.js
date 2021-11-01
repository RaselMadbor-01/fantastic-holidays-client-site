import React from 'react';
import { Link } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import googleIcon from "../../images/icons/google.png";
import logo from "../../images/logo/logo.png";
import { useHistory, useLocation } from "react-router";


const Login = () => {
    const {googleSignIn,user ,setUser,setError,setIsLoading}=useAuth();
    const location=useLocation();
    const redirect_url=location.state?.from||"/home";
    const history=useHistory();
    const handleGoogleSignIn=()=>{
        googleSignIn()
        .then((result) => {
            const user = result.user;
            console.log(user);
            setUser(user);
            setError("");
            setIsLoading(false);
            history.push(redirect_url)
          })
          .catch((error) => {
            setUser({});
            setError(error.message);
            setIsLoading(true);
          });
    }
    console.log(user?.email);
    return (
        <div className="flex flex-col justify-center items-center mt-12">
           <div className="flex flex-row justify-center items-center pb-8">
               <img src={logo} className="h-8 w-8" alt="" />
               <h1 className="text-2xl font-bold text-blue-500 p-2">Fantastic<span className="text-yellow-500">Holidays</span></h1>
           </div>
           <div className="flex flex-col justify-center w-96 h-96 text-center border-2 rounded p-4 shadow-lg">
           <h1 className="text-4xl font-bold text-blue-400 pb-6">Please Login</h1>
           <div className="border-2 rounded-full py-2 px-12 flex flex-row justify-evenly hover:bg-yellow-400 hover:text-white">
           <img src={googleIcon} alt="" /> 
           <button className="pl-2 font-medium" onClick={handleGoogleSignIn}> Google sign in</button>
           </div>
            <p>Don't have an accout? <Link className="underline text-blue-600" to="">Create an account</Link></p>
           </div>
        </div>
    );
};

export default Login;