import React from "react";

const Footer = () => {
  return (
    <div className="bg-gray-900 text-slate-300 font-extralight text-md text-center p-2 w-full">
      <h4>
        <span className="font-logo text-3xl ml-3">
          han
          <span className="text-orange-500">ci.</span>
        </span>
      </h4>
      <h5 className="text-sm">
        &copy; {new Date().getFullYear()} All rights reserved
      </h5>
    </div>
  );
};

export default Footer;
