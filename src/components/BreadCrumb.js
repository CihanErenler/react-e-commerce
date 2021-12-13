import React from "react";
import { Link } from "react-router-dom";

const BreadCrumb = ({ title }) => {
  return (
    <div className="pt-20 text-md font-light pb-4 text-slate-400">
      <Link to="/" className="hover:text-orange-300">
        Home
      </Link>{" "}
      / <span>{title}</span>
    </div>
  );
};

export default BreadCrumb;
