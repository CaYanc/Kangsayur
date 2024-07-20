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
import SingUp from "./pages/SingUp";
import Usuario from "./pages/Usuario";

function App({}) {
  return (
    <>
    <CounterContext>
      <BrowserRouter>
        <Routes>
          <Route path="/Home" element={<Home />} />
          <Route path="/usuario" element={<Usuario />} />
          <Route path="/Login" element={<Login />} />
          <Route path="/Registro" element={<Registro />} />
          <Route path="/SingUp" element={<SingUp />} />
          <Route path="/" element={<Principal />} />
          <Route path="/Busqueda" element={<Busqueda />} />
          <Route path="/Descripcion" element={<Descripcion />} />
          <Route path="/Carrito" element={<Carrito />} />
        </Routes>
      </BrowserRouter>
      </CounterContext>
    </>
  );
}

export default App;
