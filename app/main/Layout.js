import React from "react";
import {Link} from "react-router-dom";
import Header from "./Header";
import MenuLateral from "./MenuLateral";

export default function Layout({
  children,}){

  return (
    <div>
    <MenuLateral/>
    <Header/>
    <header>
        <Link to="/">Inicio</Link>
        <Link to="/transferencias">Transferencias</Link>
        <Link to="/pagos">Pagos</Link>
        <Link to="/cuentas">Cuentas</Link>
    </header>
    {children}
    </div>
  );
}