import React, { useState } from 'react';
import './styles/Contacto.css';

function ContactForm() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Datos del formulario:', formData);
        alert('Tu mensaje ha sido enviado. Gracias por contactarnos!');
        setFormData({
            name: '',
            email: '',
            message: ''
        });
    };

    return (
        <div className="contact-form">
            <h2>Contacta con nosotros</h2>
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label>Nombre:</label>
                    <input type="text" name="name" value={formData.name} onChange={handleChange}  />
                </div>
                <div className="form-group">
                    <label>Email:</label>
                    <input type="email" name="email" value={formData.email} onChange={handleChange} />
                </div>
                <div className="form-group">
                    <label>Mensaje:</label>
                    <textarea name="message" value={formData.message} onChange={handleChange} ></textarea>
                </div>
                <div className="form-group">
                    <button type="submit">Enviar</button>
                </div>
            </form>
        </div>
    );
}

export default ContactForm;