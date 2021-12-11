import React from "react";
import Logo from "./Logo";
import { FaTimes } from "react-icons/fa";
import { links } from "../common/constants";
import { Link } from "react-router-dom";
import CartButtonGroup from "./CartButtonGroup";

const Sidebar = () => {
  const isActive = true;

  return (
    <aside className={isActive ? "sidebar sidebar-show" : "sidebar"}>
      <div className="py-4 px-6">
        <div className="flex items-center justify-between">
          <Logo />
          <FaTimes className=" text-red-400 hover:text-red-500 text-3xl transition-all duration-300 ease cursor-pointer" />
        </div>
        <div className="mt-12">
          <ul className="text-xl ">
            {links.map((link) => {
              const { id, label, to } = link;
              return (
                <li key={id} className="mb-8">
                  <Link
                    to={to}
                    className="text-gray-500 font-semibold uppercase"
                  >
                    {label}
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
      <div className="flex justify-center">
        <CartButtonGroup />
      </div>
    </aside>
  );
};

export default Sidebar;
