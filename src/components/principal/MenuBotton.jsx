import React, { useContext } from "react";
import { CiHeart } from "react-icons/ci";
import { FiShoppingCart } from "react-icons/fi";
import { IoMdHome } from "react-icons/io";
import { LuUser2 } from "react-icons/lu";
import { Link } from "react-router-dom";
import { userContext } from "../../context/userContext";

const MenuBotton = () => {

const {sumar, counter} = useContext(userContext)

  return (
    <div className="bg-white w-[100%] h-[90px] rounded-t-[35px] flex justify-evenly items-center ">
      <div className="w-[40px] h-[40px]  flex items-center justify-center text-[1000%] text-[#4CAD73]">
        <IoMdHome />
      </div>
      <div className="w-[40px] h-[40px]  flex items-center justify-center text-[800%] text-gray-500">
        <CiHeart />
      </div>

      <Link
        to="/Carrito"
        className="relative w-[40px] h-[40px]  flex items-center justify-center text-[200%] text-gray-500"
      >
        <FiShoppingCart />
        <div className="absolute top-[-0px] right-0 bg-[#e62323] w-[15px] h-[15px] text-[10px] text-white rounded-[50%] flex justify-evenly items-center ">
          {counter}
        </div>
      </Link>
       
        <Link to={'/usuario'} className="w-[40px] h-[40px]  flex items-center justify-center text-[900%] text-gray-500" > <LuUser2 /></Link>
    </div>
  );
};

export default MenuBotton;
