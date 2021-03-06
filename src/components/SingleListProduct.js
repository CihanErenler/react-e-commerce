import React from "react";
import { formatPrice } from "../common/helpers";
import { Link } from "react-router-dom";
import { BsCart4 } from "react-icons/bs";

const SngleListProduct = ({ id, image, name, price, description, stars }) => {
  return (
    <section className="h-40 sm:h-56  xl:h-48 grid grid-cols-3 mb-4 bg-gray-50 rounded-lg overflow-hidden border border-gray-100">
      <div className="h-full overflow-hidden col-span-1">
        <img className="w-full h-full object-cover" src={image} alt="image" />
      </div>
      <div className="col-span-2 p-2">
        <h1 className="capitalize text-xl font-bold text-gray-600">{name}</h1>
        <p className="text-lg text-orange-900">{formatPrice(price)}</p>
        <p className="text-md hidden sm:block font-light text-gray-500 leading-6 mb-3">
          {description.substring(0, 150)}...
        </p>
        {/* <p className="text-md block sm:hidden font-light text-gray-500 leading-6 mb-3">
          {description.substring(0, 50)}...
        </p> */}
        <div className="flex sm:items-center flex-col sm:flex-row">
          <Link
            className="p-2 text-orange-900 bg-orange-300 rounded-md inline-flex items-center h-9 mb-2 sm:mb-0"
            to={`/cart`}
          >
            <BsCart4 className="inline mr-2 text-lg" />
            Add to cart
          </Link>
          <Link
            className="sm:ml-2 bg-gray-800 text-gray-200 p-2 rounded-md h-9 inline-flex items-center "
            to={`/singleProduct/${id}`}
          >
            Learn more
          </Link>
        </div>
      </div>
    </section>
  );
};

export default SngleListProduct;
