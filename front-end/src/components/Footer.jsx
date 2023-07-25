import React from 'react';
import { Link } from 'react-router-dom';
import insta from "../assets/insta.png";
import zap from "../assets/zap.png";
import '../styles/Footer.css';

function Footer() {
  return (
    <nav className="footer">
      <Link to="/instagram"><img src={zap} alt="WhatsApp" className="zap" /></Link>
      <Link to="/whatsapp"><img src={insta} alt="Instagram" className="insta" /></Link>
    </nav>
  );
}

export default Footer;