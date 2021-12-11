import React from "react";
import { Link } from "react-router-dom";

const Logo = () => {
  return (
    <div className="flex items-center">
      <Link to="/" className="text-5xl font-bold font-logo text-orange-300">
        <span className="text-gray-500">han</span>
        ci.
      </Link>
    </div>
  );
};

export default Logo;
