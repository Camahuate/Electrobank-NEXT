import React from "react";
import Promociones from "./Promociones";
import MenuLateral from "./MenuLateral";
import Header from "./Header";
import Footer from "./Footer";


export default function Inicio () {
    return (
        <div>
            <Header/>
            <MenuLateral/>
            <Promociones />
            <Footer/>
        </div>
    );
}