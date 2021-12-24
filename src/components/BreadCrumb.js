import React from "react";
import { Link } from "react-router-dom";

const BreadCrumb = ({ title, isSingleProduct }) => {
  if (isSingleProduct) {
    return (
      <div className="pt-20 text-md font-light pb-4 text-slate-400">
        <Link to="/" className="hover:text-orange-300">
          Home
        </Link>{" "}
        /{" "}
        <Link to="/products" className="hover:text-orange-300">
          Products
        </Link>{" "}
        / <span className="text-orange-300">{title}</span>
      </div>
    );
  }

  return (
    <div className="pt-20 text-md font-light pb-4 text-slate-400">
      <Link to="/" className="hover:text-orange-300">
        Home
      </Link>{" "}
      / <span className="text-orange-300">{title}</span>
    </div>
  );
};

export default BreadCrumb;
