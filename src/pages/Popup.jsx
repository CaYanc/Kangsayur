import React, { useState } from "react";
import { FaChevronLeft } from "react-icons/fa";
import { IoHeartOutline } from "react-icons/io5";
import { Link } from "react-router-dom";

const Popup = ({
  setEstado,
  setImagen,
  setNombre,
  setPrecio,
  setDescuento,
  setDescripcion,
}) => {
  const [subir, setSubir] = useState(false);

  const eventSubir = ()=>{
    setSubir(!subir)
  }
  return (
    <div className="fixed z-[200] top-0 left-0 w-[100vw] h-[100vh] bg-white" >
      <div id="img" className="relative h-[50%] bg-black w-[100%] ">
        <img
          className="degrade-img absolute w-[100%] h-[90%] object-cover "
          src={setImagen}
          alt=""
        />
        <div className="flex p-[20px] justify-between">
          <div
            onClick={() => {
              setEstado(false);
            }}
            className="text-white text-[25px] relative z-[100] p-[10px] bg-[#0007] w-fit rounded-[15px]"
          >
            <FaChevronLeft />
          </div>

          <div
            onClick={() => {
              setEstado(false);
            }}
            className="text-white text-[25px] relative z-[100] p-[10px] bg-[#0007] w-fit rounded-[15px]"
          >
            <IoHeartOutline />
          </div>
        </div>
      </div>

      <div
        id="textos"
        className={`bg-white h-[60%] relative top-[-10%] py-[30px] px-[20px] rounded-[50px] flex gap-[5px] flex-col transition-all ${subir ? "top-[-30%]" :""}`} 
      >
        <div
          id="subir"
          className="bg-gray-400 h-[8px] w-[50%] rounded-[5px] self-center my-[10px] relative top-[-15px]"
          onClick={eventSubir}
        ></div>

        <div id="nombre" className="mb-[10px] ">
          <p className="bg-[#81c49c94] text-[#4CAD73] px-[10px] py-[1px] rounded-[5px] text-[15px] w-fit">
            Vegetales
          </p>
          <p className="font-bold text-[35px]">{setNombre}</p>
          <div className="flex items-center gap-[20px]">
            <p className="text-[25px] text-[#4CAD73] font-bold">
              {setPrecio}
              <i className="text-gray-500 font-normal">/kg</i>
            </p>
            <p className="text-[14px] text-gray-500">{setDescuento}</p>
          </div>
        </div>

        <div id="descripcion" className="h-[500px] overflow-scroll">
          <div
            id="navbar2"
            className="fixed left-[-10px] mt-[-5px]  flex justify-around items-center text-[20px] w-[100%] h-[50px] border-b-2 bg-white"
          >
            <a href="#Description">Description</a>
            <a href="#Nutrition">Nutrition facts</a>
          </div>
          <p id="Description" className="text-gray-500 pt-[50px]">
            {setDescripcion}
          </p>
          <br />
          <p id="Nutrition" className="text-gray-500">
            {setDescripcion}
          </p>
        </div>

        <div id="recomendados" className="my-[20px] h-[20%] bg-white relative">
          <p className=" font-bold text-[20px]">Related Product</p>
          <div className="flex  p-[5px] h-[100%]">
            <div
              id="carta_recomendados"
              className="bg-white flex rounded-[20px] overflow-hidden  shadow-lg shadow-slate-300"
            >
              <img
                className="w-[40%] h-[100%] object-cover"
                src={setImagen}
                alt=""
              />
              <div className="p-[10px]">
                <p className=" font-bold text-[16px]">Fresh Red Chili</p>
                <p className="text-[18px] text-[#4CAD73] font-bold">
                  Rp 12.000 klg
                </p>
              </div>
            </div>
          </div>
        </div>

        <div
          id="add"
          className="bg-white w-[100vw] fixed left-0  bottom-0 h-[10%] rounded-[30px] boxShadow py-[30px] px-[20px] flex justify-between items-center gap-[50px]"
        >
          <div className="flex gap-[10px] items-center ">
            <button className="btn-contador">-</button>
            <div className="bg-[#81c49c94] font-bold text-[#4CAD73] px-[10px] py-[1px] rounded-[5px] text-[15px] h-[50px] w-[50px] flex items-center justify-center">
              1
            </div>
            <button className="btn-contador">+</button>
          </div>

          <button className="btn_primary">Add to Cart</button>
        </div>
      </div>
    </div>
  );
};

export default Popup;
