import React, { useContext, useState } from "react";
import imgLogin from "../assets/imgLogin.png";
import { FaChevronLeft } from "react-icons/fa";
import { IoEye } from "react-icons/io5";
import { IoMdEyeOff } from "react-icons/io";
import { Link, useNavigate } from "react-router-dom";
import { userContext } from "../context/userContext";
import { CgShoppingCart } from "react-icons/cg";

const Carrito = () => {

  const {sumar, restar, counter, resetear} = useContext(userContext)
  return (
    <div
      id="registro"
      className="bg-[#fff] w-[100vw] h-[100vh] p-[25px] flex
      flex-col items-center justify-evenly relative"
    >
      
      <div
        id="art1"
        className="relative flex flex-col items-center gap-[40px] "
      >
        <div
          id="circle"
          className="w-[650px] h-[600px] rounded-[50%] absolute bg-[#4CAD73] top-[-100%] left-[-185%] "
        ></div>

        <p className="text-[55px] font-semibold absolute top-[45%] left-[-55%] text-[#fff]">
        </p>
        <figure className="relative z-[100] left-[40%]">
          <img src={imgLogin} alt="" className="opacity-25"/>
        </figure>
      </div>

      <div id="serach" className="flex justify-between items-center w-[100%] p-[20px] absolute z-[300] top-[5%]">
        <div className="text-white text-[25px] ">
          <Link to="/">
            <FaChevronLeft />
          </Link>
        </div>
        <div className="w-[70%]">
          <input
            autoFocus
            className="bg-[#ddd] p-[10px] rounded-[10px] w-[100%]"
            type="text"
            placeholder="Search for fruits, vegetables, groce..."
          />
        </div>

        <div className="relative w-[40px] h-[40px]    flex items-center justify-center text-[1000%] text-white">
          <CgShoppingCart />
          <div className="absolute top-[-0px] right-0 bg-[#e62323] w-[15px] h-[15px] text-[10px] text-white rounded-[50%] flex justify-evenly items-center ">
            {counter}
          </div>
        </div>
      </div>
      
      <div
        id="art2 "
        className="flex flex-col gap-[20px] items-center w-[100%] "
      >
       <p className="btn_secundary text-center" onClick={resetear}>Resetear Carrito</p>
        

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
}

export default Carrito