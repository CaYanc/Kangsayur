import React, { useState } from "react";
import imgLogin from "../assets/imgLogin.png";
import { FaChevronLeft } from "react-icons/fa";
import { IoEye } from "react-icons/io5";
import { IoMdEyeOff } from "react-icons/io";
import { Link, useNavigate } from "react-router-dom";

const Usuario = () => {
  return (
    <div
      id="registro"
      className="bg-[#fff] w-[100vw] h-[100vh] p-[25px] flex
      flex-col items-center justify-evenly relative"
    >
      <div className="text-[#fff] text-[30px] absolute top-[1%] left-[0%] z-[200]">
        <Link to="/">
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

        <p className="text-[55px] font-semibold absolute top-[45%] left-[-55%] text-[#fff]">
          User
        </p>
        <figure className="relative z-[100] left-[40%]">
          <img src={imgLogin} alt="" />
        </figure>
      </div>
      <div
        id="art2 "
        className="flex flex-col gap-[20px] items-center w-[100%] "
      >
       <Link to={'/Login'} className="btn_primary text-center">Login</Link>
       <Link to={'/singup'} className="btn_secundary text-center">SingUp</Link>
        

        <button className="text-[#4CAD73] mb-[60px]" href="">
          <p>
            No have an account?{" "}
            <Link to={"/SingUp"} className="font-bold">
              SingUp
            </Link>
          </p>
        </button>
      </div>
    </div>
  );
};

export default Usuario;
