import React, { useEffect, useState } from 'react';
import './Navbar.css';

function Navbar() {
  const [show, handleShow] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 100) {
        handleShow(true);
      } else handleShow(false);
    });
    return () => {
      window.removeEventListener("scroll");
    };
    }, []);

  return (
    <div className={`nav ${show && "nav_black"}`}>
      <img className="nav_logo" src="images/logo2.svg" alt="Netflix logo" />

      <img className="nav_avatar"
      src="images/Netflix-avatar.png"
      alt="Netflix Avatar" />
    </div>
  )
}

export default Navbar
