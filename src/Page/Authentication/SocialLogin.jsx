import React, { useContext } from 'react';
import { AuthContext } from './Providers/AuthProvider';
import { useLocation, useNavigate } from 'react-router-dom';
import { FaGoogle } from 'react-icons/fa';
import Swal from 'sweetalert2';

const SocialLogin = () => {
    const { googleSignIn , user } = useContext(AuthContext);
    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || "/";

    const handleGoogle = () => {
        googleSignIn().then((result) => {
          const loggedUser = result.user;
          console.log(loggedUser)
          const saveUser = {
            name: loggedUser.displayName,
            email: loggedUser.email,
          };
          fetch("http://localhost:5000/users", {
            method: "POST",
            headers: {
              "content-type": "application/json",
            },
            body: JSON.stringify(saveUser),
          })
            .then((res) => res.json())
            .then(() => {
              Swal.fire({
                title: `Logged in as ${result.user.email}`,
                showClass: {
                  popup: "animate__animated animate__fadeInDown",
                },
                hideClass: {
                  popup: "animate__animated animate__fadeOutUp",
                },
              });
              navigate(from, { replace: true });
            });
        });
      };
    return (
        <div>
            <div className=" text-center  ">
             <button onClick={handleGoogle} className="border p-3 border-red-700 rounded-full text-red-700"> <FaGoogle /> </button>
           </div>
        </div>
    );
};

export default SocialLogin;