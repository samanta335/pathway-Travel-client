import React, { useContext, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { FaEnvelope,  FaEye,  FaEyeSlash, FaGoogle, FaUserLock, } from 'react-icons/fa';
import { AuthContext } from './Providers/AuthProvider';
import Swal from 'sweetalert2';
import loginImg from '../../assets/Login-image.png'

const Login = () => {
  const [passwordVisible, setPasswordVisible] = useState(false);

  const { signUp } = useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();  
  const from = location.state?.from?.pathname || "/";

  const handleLogin = (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;
    // console.log(email, password);
    signUp(email, password).then((result) => {
      const user = result.user;
      console.log(user);

      Swal.fire({
        title: " Login Successful.",
        showClass: {
          popup: "animate__animated animate__fadeInDown",
        },
        hideClass: {
          popup: "animate__animated animate__fadeOutUp",
        },
      });
      navigate(from, { replace: true });
    });
  };


  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
};


    return (
        <div className="hero min-h-screen ">
        <div className="hero-content flex  ">
          <div className="text-center ">
            <img
              className="w-3/4 "
              src={loginImg}
              alt=""
            />
          </div>
          <div className=" w-full max-w-sm ">
              <h1 className="gradient-animation text-4xl mb-12 bg-gradient-to-r from-indigo-500 from-20% via-sky-300 via-30% to-pink-400 to-90% text-transparent bg-clip-text text-center font-bold"> Welcome to <p>PathwayTravel </p></h1>
            <form onSubmit={handleLogin} >
              <div className="form-control my-5">
                <input
                  type="text"
                  placeholder='Email'
                  required='email is required'
                  name="email"
                  className="input px-14 relative rounded-full bg-base-200 focus:outline-none"
                />
<FaEnvelope className='absolute my-4 mx-8 text-gray-500'/>

              </div>

              <div className="form-control">
                <input
                  type={passwordVisible? "text": "password"}
                  placeholder="Password"
                  name="password"
                  required='password'
                  className="input px-14 relative rounded-full bg-base-200 focus:outline-none"
                />
                <FaUserLock className='absolute my-4 mx-8 text-gray-500'/>
               {passwordVisible ? (
                 <FaEye
                 className="absolute password-toggle my-4 ml-80"
                 onClick={togglePasswordVisibility}
                  />
                ) : (
                 <FaEyeSlash
                  className="absolute password-toggle my-4 ml-80"
                   onClick={togglePasswordVisibility}
                   />
                  )}
              </div>
             <div className="form-control mt-8 ">
                <input type="submit" className="btn mx-14 text-lg bg-gradient-to-r from-cyan-400 to-blue-500 text-white" value="Login" />
              </div>
            </form>
            <p className="mt-8 mb-5 text-center">
            Don't have an account? <Link to="/signUp" className="underline font-semibold text-blue-600"> Sign Up
            </Link>
          </p>

          <div className="divider">Or</div>
          <div className=" text-center  ">
             <button onClick=''className="border p-3 border-red-700 rounded-full text-red-700"> <FaGoogle /> </button>
           </div>

          </div> 
        </div>
      </div>
    );
};

export default Login;