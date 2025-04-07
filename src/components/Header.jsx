import React from "react";
// import Logo from "../assets/LogoKarla.jpg";
import "../styles/Header.css";
import { IoChevronBackSharp } from "react-icons/io5";
import { Link, useLocation, useNavigate } from "react-router";

const Header = () => {
  let location = useLocation();
  let navigate = useNavigate();
  return (
    <header>
      {location.pathname != "/" && (
        <Link to="/" style={{ color: "var(--black-color)" }}>
          <IoChevronBackSharp className="icon-back" />
        </Link>
      )}
      <div className="logo-container">
        <h2>SHOPPING KARLA</h2>
        <h1>SK</h1>
      </div>
      <p>La esencia perfecta para cada ocasión</p>
    </header>
  );
};

export default Header;
