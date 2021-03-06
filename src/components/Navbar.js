import React from "react";
import { Link } from "react-router-dom";
import { links } from "../common/constants";
import CartButtonGroup from "./CartButtonGroup";
import Logo from "./Logo";
import { GiHamburgerMenu } from "react-icons/gi";
import { useSidebarContext } from "../context/SidebarContext";
import { useUSerContext } from "../context/UserContext";

const Header = () => {
  const { openSidebar } = useSidebarContext();
  const { myUser } = useUSerContext();

  return (
    <header className=" h-16 absolute top-0 left-0 w-full bg-white z-20">
      <div className="container">
        <nav className="w-full h-full flex justify-between">
          <Logo />
          <ul className="text-md h-full font-semibold text-gray-600 item-center hidden lg:flex">
            {links.map((link) => {
              return (
                <li key={link.id} className="nav-item w-24">
                  <Link to={link.to} className="nav-link">
                    {link.label}
                  </Link>
                </li>
              );
            })}
            {myUser && (
              <li className="nav-item w-24">
                <Link to="/checkout" className="nav-link">
                  Checkout
                </Link>
              </li>
            )}
          </ul>
          <div className="hidden lg:flex items-center">
            <CartButtonGroup />
          </div>
          <div className="flex lg:hidden items-center">
            <button onClick={openSidebar}>
              <GiHamburgerMenu className="text-4xl" />
            </button>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;
