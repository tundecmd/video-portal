import React, { useEffect, useState } from "react";
import "./NavBar.css";

function NavBar() {
  const [show, handleShow] = useState(false);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 100) {
        handleShow(true);
      } else {
        handleShow(false);
      }
    });
    return () => {
      window.removeEventListener("scroll");
    };
  }, []);
  return (
    <div className={`nav ${show && "nav_black"}`}>
      <img
        src="https://pmcvariety.files.wordpress.com/2020/05/netflix-logo.png?w=681&h=383&crop=1"
        alt="Netflix Logo"
        className="nav_logo left"
      />
      <img
        src="https://images.pexels.com/photos/1337383/pexels-photo-1337383.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
        alt="Netflix Logo"
        className="nav_logo right"
      />
    </div>
  );
}

export default NavBar;
