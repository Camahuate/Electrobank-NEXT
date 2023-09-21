import React from 'react';
import './styles/Footer.css';
import Image from 'next/image';

export default function Footer() {
  return (
    <footer className="pie-depagina">
        <>
            <div className="footer-links">
                <a href="#">Política de Privacidad</a>
                <a href="#">Términos y Condiciones</a>
                <a href="#">Contacto</a>
            </div>
            <div className="social-icons">
                <a href="https://www.facebook.com/" target="_blank">
                <Image src='/facebook.svg' alt="Facebook" width={200} height={24}
              priority/>
                </a>
                <a href="https://www.instagram.com/" target="_blank">
                <Image src='/instagram.svg' alt="Instagram" width={200} height={24}
              priority/>
                </a>
                <a href="https://www.linkedin.com/" target="_blank">
                <Image src='/linkedin.svg'alt="LinkedIn" width={200} height={24}
              priority/>
                </a>
            </div>
        </>

    </footer>
  );
}

