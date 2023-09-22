import React from "react";
import Promociones from "./Promociones";
import MenuLateral from "./MenuLateral";
import Header from "./Header";
import Footer from "./Footer";
import ContactForm from "./Contacto";

export default function Inicio () {
    return (
        <div>
            <Header/>
            <MenuLateral/>
            <Promociones />
            <ContactForm /> 
            <Footer/>
        </div>
    );
}