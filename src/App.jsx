import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Registro from "./pages/Registro";
import Busqueda from "./pages/Busqueda";
import Descripcion from "./pages/Descripcion";
import Principal from "./pages/Principal";
import CounterContext from "./context/CounterContext";
import { useContext } from "react";
import Carrito from "./pages/Carrito";

function App({}) {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/Home" element={<Home />} />
          <Route path="/Login" element={<Login />} />
          <Route path="/Registro" element={<Registro />} />
          <Route path="/" element={<Principal />} />
          <Route path="/Busqueda" element={<Busqueda />} />
          <Route path="/Descripcion" element={<Descripcion />} />
          <Route path="/Carrito" element={<Carrito />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
