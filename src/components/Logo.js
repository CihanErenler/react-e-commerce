import React from "react";
import { Link } from "react-router-dom";
import logo from "../assets/hanci.svg";

const Logo = () => {
  return (
    <div className="flex items-center">
      <Link to="/" className="text-5xl font-bold font-logo text-orange-300">
        <img src={logo} alt="hanci logo" />
      </Link>
    </div>
  );
};

export default Logo;
