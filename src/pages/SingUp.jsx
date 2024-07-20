import React, { useState } from "react";
import imgLogin from "../assets/imgLogin.png";
import { FaChevronLeft } from "react-icons/fa";
import { IoEye } from "react-icons/io5";
import { IoMdEyeOff } from "react-icons/io";
import { Link, useNavigate } from "react-router-dom";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../Firebase.js";

const SingUp = () => {
  // funcion de registro
  const registro = (password, email) => {
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        navigate('/login')
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        alert('esta cuenta ya existe ')

      });
  };
  // funcion de registro

  // estados de datos recolectados
  const [password, setPassword] = useState();
  const [email, setEmail] = useState();
  const navigate = useNavigate()
  // estados de datos recolectados

  return (
    <div
      id="registro"
      className="bg-[#fff] w-[100vw] h-[100vh] p-[25px] flex flex-col items-center justify-evenly relative"
    >
      <div className="text-[#fff] text-[30px] absolute top-[1%] left-[0%] z-[200]">
        <Link to="/Registro">
          <FaChevronLeft />
        </Link>
      </div>

      <div
        id="art1"
        className="relative flex flex-col items-center gap-[40px] "
      >
        <div
          id="circle"
          className="w-[650px] h-[600px] rounded-[50%] absolute bg-[#4CAD73] top-[-100%] left-[-185%] "
        ></div>

        <p className="text-[55px] font-semibold absolute top-[35%] left-[-65%] text-[#fff]">
          SingUp
        </p>
        <figure className="relative z-[100] left-[40%]">
          <img src={imgLogin} alt="" />
        </figure>
      </div>
      <div
        id="art2 "
        className="flex flex-col gap-[20px] items-center w-[100%] "
      >
        <form action="" className="w-[100%] ">
          <label htmlFor="email">email</label>
          <br />
          <input
            className="bg-[#eee] py-[17px] px-[15px] rounded-[15px] w-[100%] mb-[20px]"
            type="email"
            placeholder="yourmail@mail.com"
            onChange={(e) => setEmail(e.target.value)}
          />

          <div className="relative">
            <label
              htmlFor="email"
              className="absolute top-[90%] right-0 text-[13px] text-[#4CAD73] "
            >
              Forgot Password
            </label>
            <br />
            <div className="absolute right-[5%] top-[55%] text-[20px] hidden">
              <IoEye />
            </div>
            <div className="absolute right-[5%] top-[55%] text-[20px]">
              <IoMdEyeOff />
            </div>
            <label htmlFor="email">password</label>
            <br />
            <input
              className="bg-[#eee] py-[17px] px-[15px] rounded-[15px] w-[100%] mb-[20px]"
              type="email"
              placeholder="your password"
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
        </form>

        <button
          className="btn_primary"
          onClick={() => registro(password, email)}
        >
          SingUp
        </button>

        <button className="text-[#4CAD73] mb-[60px]" href="">
          <p>
            have an account?
            <Link to={"/login"} className="font-bold">
              login
            </Link>
          </p>
        </button>
      </div>
    </div>
  );
};

export default SingUp;
