import React, { useContext, useState } from "react";
import { CgShoppingCart } from "react-icons/cg";
import { FaChevronLeft } from "react-icons/fa";
import { Link } from "react-router-dom";
import SlideCategory from "../components/principal/SlideCategory";
import Cartas from "../components/busqueda/Cartas";
import cart1 from "../components/principal/img/cart1.png";
import cart2 from "../components/principal/img/cart2.png";
import cart3 from "../components/principal/img/cart3.png";
import cart4 from "../components/principal/img/cart4.png";
import Popup from "./Popup";
import CounterContext from "../context/CounterContext";

const Busqueda = () => {
  // estado para abrir popup

  const [estado, setEstado] = useState(false);
  const [imagen, setImagen] = useState();
  const [nombre, setNombre] = useState();
  const [precio, setPrecio] = useState();
  const [descuento, setDescuento] = useState();
  const [descripcion, setDescripcion] = useState();

  return (
    <div className="p-[20px] flex flex-col gap-[30px] w-[100vw] h-[100vh] overflow-x-hidden ">
      <div id="serach" className="flex justify-between items-center w-[100%]">
        <div className="text-[black] text-[25px] ">
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

        <div className="relative w-[40px] h-[40px]    flex items-center justify-center text-[1000%] text-black">
          <CgShoppingCart />
          <div className="absolute top-[-0px] right-0 bg-[#e62323] w-[15px] h-[15px] text-[10px] text-white rounded-[50%] flex justify-evenly items-center ">
            1
          </div>
        </div>
      </div>

      <div className="border-b border-b-black pb-[20px] w-[120%] relative left-[-25px]">
        <div id="slide_category" className="w-[100px] h-[100px] ">
          <SlideCategory />
        </div>
      </div>

      <div className="flex justify-between gap-y-[20px] flex-wrap">
        <Cartas
          setEstado={setEstado}
          setImagen={setImagen}
          setNombre={setNombre}
          setPrecio={setPrecio}
          setDescuento={setDescuento}
          setDescripcion={setDescripcion}
          img={cart1}
          nombre="Fresh Carrot"
          precio="Rp 18,000"
          descuento="Rp 21,000"
          descripcion="The carrot is a root vegetable, most commonly observed as orange in color, though purple, black, red, white, and yellow cultivars exist, all of which are domesticated forms of the wild carrot, Daucus carota, native to Europe and Southwestern Asia."
        />
        <Cartas
          setEstado={setEstado}
          setImagen={setImagen}
          setNombre={setNombre}
          setPrecio={setPrecio}
          setDescuento={setDescuento}
          setDescripcion={setDescripcion}
          img={cart2}
          nombre="Fresh Carrot"
          precio="Rp 18,000"
          descuento="Rp 21,000"
          descripcion="The carrot is a root vegetable, most commonly observed as orange in color, though purple, black, red, white, and yellow cultivars exist, all of which are domesticated forms of the wild carrot, Daucus carota, native to Europe and Southwestern Asia."
        />
        <Cartas
          setEstado={setEstado}
          setImagen={setImagen}
          setNombre={setNombre}
          setPrecio={setPrecio}
          setDescuento={setDescuento}
          setDescripcion={setDescripcion}
          img={cart3}
          nombre="Fresh Carrot"
          precio="Rp 18,000"
          descuento="Rp 21,000"
          descripcion="The carrot is a root vegetable, most commonly observed as orange in color, though purple, black, red, white, and yellow cultivars exist, all of which are domesticated forms of the wild carrot, Daucus carota, native to Europe and Southwestern Asia."
        />
        <Cartas
          setEstado={setEstado}
          setImagen={setImagen}
          setNombre={setNombre}
          setPrecio={setPrecio}
          setDescuento={setDescuento}
          setDescripcion={setDescripcion}
          img={cart4}
          nombre="Fresh Carrot"
          precio="Rp 18,000"
          descuento="Rp 21,000"
          descripcion="The carrot is a root vegetable, most commonly observed as orange in color, though purple, black, red, white, and yellow cultivars exist, all of which are domesticated forms of the wild carrot, Daucus carota, native to Europe and Southwestern Asia."
        />
        <Cartas
          setEstado={setEstado}
          setImagen={setImagen}
          setNombre={setNombre}
          setPrecio={setPrecio}
          setDescuento={setDescuento}
          setDescripcion={setDescripcion}
          img={cart2}
          nombre="Fresh Carrot"
          precio="Rp 18,000"
          descuento="Rp 21,000"
          descripcion="The carrot is a root vegetable, most commonly observed as orange in color, though purple, black, red, white, and yellow cultivars exist, all of which are domesticated forms of the wild carrot, Daucus carota, native to Europe and Southwestern Asia."
        />
        <Cartas
          setEstado={setEstado}
          setImagen={setImagen}
          setNombre={setNombre}
          setPrecio={setPrecio}
          setDescuento={setDescuento}
          setDescripcion={setDescripcion}
          img={cart1}
          nombre="Fresh Carrot"
          precio="Rp 18,000"
          descuento="Rp 21,000"
          descripcion="The carrot is a root vegetable, most commonly observed as orange in color, though purple, black, red, white, and yellow cultivars exist, all of which are domesticated forms of the wild carrot, Daucus carota, native to Europe and Southwestern Asia."
        />
      </div>

      {estado && (
        <Popup
          setEstado={setEstado}
          setImagen={imagen}
          setNombre={nombre}
          setPrecio={precio}
          setDescuento={descuento}
          setDescripcion={descripcion}
        />
      )}
    </div>
  );
};

export default Busqueda;
