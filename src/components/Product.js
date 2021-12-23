import React from "react";
import { Link } from "react-router-dom";
import { BiSearch } from "react-icons/bi";

const Product = ({ id, image, name, price }) => {
  return (
    <section
      key={id}
      className="bg-white flex-1 rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-all duration-300"
    >
      <header className="product h-48 overflow-hidden relative">
        <div className="absolute w-full h-full hover:bg-gray-900 hover:bg-opacity-50 transition-all duration-300 flex items-center justify-center invisible opacity-0">
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
        <div className="mb-2">
          <h3 className="capitalize text-gray-500 font-light text-md">
            {name}
          </h3>
          <h4>{price}$</h4>
        </div>
      </footer>
    </section>
  );
};

export default Product;
