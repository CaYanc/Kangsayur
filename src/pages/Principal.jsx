import React from "react";
import MenuBotton from "../components/principal/MenuBotton";

import kangsayur from "../assets/Kangsayur.png";
import { CiMail } from "react-icons/ci";
import { IoIosNotificationsOutline } from "react-icons/io";
import { GiPositionMarker } from "react-icons/gi";
import SliderPromo from "../components/principal/SliderPromo";
import SlideCategory from "../components/principal/SlideCategory";
import { FaChevronRight } from "react-icons/fa";
import Products from "../components/principal/Products";

// img
import product1 from "../assets/product1.png";
import product2 from "../assets/product2.png";
import product3 from "../assets/product3.png";
import { Link } from "react-router-dom";
import { CgShoppingCart } from "react-icons/cg";

const Principal = () => {
  return (
    <div
      id="principal"
      className="relative p-[20px] overflow-x-hidden h-[100vh]"
    >
      <div className="relative flex flex-col gap-[15px] w-[100%] items-center mt-[40px] mb-[60px]">
        <div
          id="cirlce_green"
          className="absolute w-[1000px] h-[1000px] bg-[#4CAD73] rounded-[50%] z-[-1] top-[-700px] left-[-300px]"
        ></div>

        <figure className="relative z-[100] ">
          <img src={kangsayur} alt="" />
        </figure>

        <div id="serach" className="flex justify-between items-center w-[100%]">
          <div className="w-[70%]">
            <Link to="/Busqueda">
              <input
                className="bg-white p-[10px] rounded-[10px] w-[100%]"
                type="text"
                placeholder="Search for fruits, vegetables, groce..."
              />
            </Link>
          </div>
          <div className="w-[40px] h-[40px] border border-dashed border-gray-500 flex items-center justify-center text-[200%] text-white">
            <CiMail />
          </div>
          <div className="w-[40px] h-[40px] border border-dashed border-gray-500 flex items-center justify-center text-[1000%] text-white">
            <IoIosNotificationsOutline />
          </div>
        </div>

        <div className="w-[100%]">
          <select className="bg-transparent text-white w-[100%]" name="" id="">
            <option value="Sent to">
              <GiPositionMarker /> Sent to Pamulang Barat Residence No.5, RT 05/
              ...
            </option>
            <option value="Sent to">
              <GiPositionMarker /> Sent to Pamulang Barat Residence No.5, RT 05/
              ...
            </option>
          </select>
        </div>

        <div id="slide_promo" className="w-[90%] h-[200px]">
          <SliderPromo />
        </div>

        <div
          id="slide_category"
          className="flex flex-col gap-[10px] text-start self-start"
        >
          <p className="text-[20px] font-semibold ">Categories</p>

          <div id="slide_category" className="w-[100px] h-[100px]">
            <SlideCategory />
          </div>
        </div>

        <div id="slide_products" className="p-[10px]  w-[100%] flex flex-col">
          <hr className="bg-black h-[1px] w-[120%] relative left-[-30px]" />

          <div className="flex justify-between py-[20px]">
            <p className="text-[20px] font-semibold">Special Deal</p>

            <Link to="/Busqueda">
              <p className="flex items-center gap-[5px] text-[20px] text-[#4CAD73]">
                See more <FaChevronRight />
              </p>
            </Link>
          </div>

          <div dir="product" className="flex gap-[10px] w-[1500%]">
            <Products imgproduct={product2} />
            <Products imgproduct={product1} />
            <Products imgproduct={product3} />
          </div>
        </div>

        <div className="fixed bottom-[0] w-[100%] z-[100] ">
          <MenuBotton />
        </div>
      </div>
    </div>
  );
};

export default Principal;
