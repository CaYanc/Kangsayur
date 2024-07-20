import React, { useContext } from "react";
import { IoAddOutline, IoHeartOutline } from "react-icons/io5";
import { userContext } from "../../context/userContext";

const Cartas = ({
  img,
  nombre,
  precio,
  descuento,
  descripcion,
  setEstado,
  setImagen,
  setNombre,
  setPrecio,
  setDescuento,
  setDescripcion,
}) => {
  const { sumar, counter } = useContext(userContext);
  return (
    <div
      
      className="relative border shadow-lg shadow-indigo-500/400 max-w-[49%]  rounded-[20px] overflow-hidden"
    >
      <div onClick={() => {
        setEstado(true),
          setImagen(img),
          setNombre(nombre),
          setPrecio(precio),
          setDescuento(descuento);
        setDescripcion(descripcion);
      }} className=" absolute  w-[90%] h-[60%] top-[20%] left-[5%] z-[200]"></div>
      <div id="img" className="relative w-[100%] h-[50%] ">
        <div className="absolute top-[10px] right-[10px] z-[100] bg-[#0008] p-[4px] rounded-[10px]">
          <div className=" border border-dashed p-[2px]">
            <IoHeartOutline className="text-[20px] text-white " />
          </div>
        </div>
        <img
          className="border w-[100%] h-[100%] object-cover"
          src={img}
          alt=""
        />
      </div>

      <div id="text" className="flex flex-col  p-[10px]">
        <p className="text-[16px] font-bold">{nombre}</p>
        <p className="text-[15px] text-[#4CAD73] font-bold">
          {precio}
          <i className="text-gray-500 font-normal">/kg</i>
        </p>
        <p className="text-[14px] text-gray-500">{descuento}</p>
        <div className="border border-[#4CAD73] p-[2px] w-fit self-end rounded-[10px] ">
          <IoAddOutline
            className="text-[#4CAD73] text-[25px] "
            onClick={sumar}
          />
        </div>
      </div>
    </div>
  );
};

export default Cartas;
