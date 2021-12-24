import React from "react";
import { Link } from "react-router-dom";
import { BiSearch } from "react-icons/bi";
import { formatPrice } from "../common/helpers";

const Product = ({ id, image, name, price }) => {
  return (
    <section
      key={id}
      className="product bg-white flex-1 rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-all duration-300 mb-4"
    >
      <header className=" h-48 overflow-hidden relative">
        <div className="absolute w-full h-full bg-gray-900 bg-opacity-50 transition-all duration-300 flex items-center justify-center invisible opacity-0">
          <Link
            to={`/singleProduct/${id}`}
            className="bg-orange-300 w-12 h-12 rounded-full items-center justify-center flex"
          >
            <BiSearch className="text-2xl text-yellow-900" />
          </Link>
        </div>
        <img className="object-cover w-full h-full" src={image} alt="product" />
      </header>
      <footer className="py-2 px-6">
        <div className="flex items-center justify-between">
          <h3 className="capitalize text-gray-500 font-light text-md">
            {name}
          </h3>
          <h4 className="text-yellow-800 text-sm">{formatPrice(price)}</h4>
        </div>
      </footer>
    </section>
  );
};

export default Product;
