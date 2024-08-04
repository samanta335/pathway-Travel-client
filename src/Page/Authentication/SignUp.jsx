import React, { useContext } from 'react';
import { useForm } from 'react-hook-form';
import { FaGoogle } from 'react-icons/fa';
import { Link, useNavigate } from 'react-router-dom';
import './Animation.css'
import signUpImg from '../../assets/Sign-Up-Image.jpg'
import { AuthContext } from './Providers/AuthProvider';
import Swal from 'sweetalert2';
const SignUp = () => {
    const {
        register,
        handleSubmit,
        watch,
        reset,
        formState: { errors },
        setError
      } = useForm()
      const { createUser } = useContext(AuthContext);
      const navigate = useNavigate();

      const onSubmit = (data) => {
      //   if (data.password !== data.confirmPassword) {
      //     setError('confirmPassword', { message: 'Passwords do not match' });
      //     return;
      // }
        console.log(data);
        createUser(data.email, data.password).then((result) => {
          const loggedUser = result.user;
          console.log(loggedUser);
          if (loggedUser) {
            reset();
            Swal.fire({
              position: "top-end",
              icon: "success",
              title: "User created successfully.",
              // showConfirmButton: false,
              timer: 1500,
            });
            navigate("/");
          }
        });
       
    }
  
        

    return (
        <div>
          <div className=" hero min-h-screen  "
        style={{
          backgroundImage: `url(${signUpImg})`,
        }}
        >
            <div className="hero-overlay bg-opacity-15"></div>
        <div className="hero-content ">
          <div className=" p-10 bg-opacity-80 rounded-xl bg-white">

          <h1 className="gradient-animation text-4xl mb-12 bg-gradient-to-r from-indigo-500 from-20% via-sky-300 via-30% to-pink-500 to-90% text-transparent bg-clip-text text-center font-bold"> Welcome to <p>PathwayTravel</p></h1>

            <form onSubmit={handleSubmit(onSubmit)} className='grid md:grid-cols-2 gap-10'>
              <div className="form-control">
                <input
                type='text'
                {...register("name", { required: true })}
                name='name'
                placeholder='Name*'
                className="input input-bordered focus:outline-none border-sky-400"
                />
                {errors.name && (
                  <span className="text-red-600">Name is required</span>
                )}
              </div>
              <div className="form-control">
                <input
                  type="email"
                  {...register("email", { required: true })}
                  name="email"
                  placeholder="Email*"
                  className="input input-bordered focus:outline-none border-sky-400"
                />
                 {errors.email && (
                  <span className="text-red-600">Email is required</span>
                )} 
              </div>
              <div className="form-control">
                <input
                  type="password"
                  {...register("password", {
                    required: true,
                    minLength: 6,
                    maxLength: 10,
                    pattern: /(?=.*[A-Z])(?=.*[0-9])(?=.*[a-z])/,
                  })}
                  placeholder="Password*"
                  className="input input-bordered focus:outline-none border-sky-400"
                />
               <p className='w-64'>
               {errors.password?.type === "required" && (
                  <p className="text-red-600">Password is required</p>
                )}
                {errors.password?.type === "minLength" && (
                  <p className="text-red-600">Password must be 6 characters</p>
                )}
                {errors.password?.type === "maxLength" && (
                  <p className="text-red-600">
                    Password must be less than 10 characters
                  </p>
                )}
                {errors.password?.type === "pattern" && (
                  <p className="text-red-600">
                    Password must have one Uppercase one lower case, one number
                   .
                  </p>
                )}
               </p>
              </div>
              <div className="form-control">
                <input
                  type="password"
                  {...register("confirmPassword", )}
                  name="confirm password"
                  placeholder="Confirm password*"
                  className="input input-bordered focus:outline-none border-sky-400"
                />
                {/* {errors.confirmPassword?.type === "required" && (
                  <p className="text-red-600">Confirm Password is required</p>
                )} */}
                  {errors.confirmPassword && <p className="text-red-600">{errors.confirmPassword.message}</p>}
              </div>
              <div className="form-control">
                <input
                  type="text"
                  {...register("photoURL")}
                  placeholder="Photo URL"
                  className="input input-bordered focus:outline-none border-sky-400"
                />              
              </div>

              <div className="form-control ">
                <input
                  className="btn text-lg bg-gradient-to-r from-cyan-400 to-blue-500 text-white "
                  type="submit"
                  value="Sign Up"
                />
              </div>
            </form>
            <p className="mt-10 mb-5 text-center ">
              Already have an account? <Link className="underline text-blue-600 font-semibold" to="/login"> Login
              </Link>
            </p>
            
            <div className="divider">Or</div>
            <div className=" text-center  ">
             <button onClick=''className="border p-3 border-red-700 rounded-full text-red-700"> <FaGoogle /> </button>
           </div>

          </div>
        </div>
      </div>
        </div>
    );
};

export default SignUp;