import React from "react";
import { CiHeart } from "react-icons/ci";
import { FiShoppingCart } from "react-icons/fi";
import { IoMdHome } from "react-icons/io";
import { LuUser2 } from "react-icons/lu";
import { Link } from "react-router-dom";

const MenuBotton = () => {
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
          1
        </div>
      </Link>
      <div className="w-[40px] h-[40px]  flex items-center justify-center text-[900%] text-gray-500">
        <LuUser2 />
      </div>
    </div>
  );
};

export default MenuBotton;
