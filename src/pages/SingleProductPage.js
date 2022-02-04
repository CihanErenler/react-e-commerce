import React, { useEffect, useState } from "react";
import BreadCrumb from "../components/BreadCrumb";
import { single_product_url as url } from "../common/constants";
import { useProductContext } from "../context/ProductsContext";
import Spinner from "../components/Spinner";
import { useParams, Link } from "react-router-dom";
import Error from "../components/Error";
import ProductImages from "../components/ProductImages";
import Stars from "../components/Stars";
import { IoMdArrowBack } from "react-icons/io";
import { formatPrice } from "../common/helpers";
import AddToCart from "../components/AddToCart";

const SingleProductPage = () => {
  const { id: procutId } = useParams();

  const {
    getSingleProduct,
    singleProductLoading: loading,
    singleProductLoaded: loaded,
    singleProductError: error,
    singleProduct: product,
  } = useProductContext();

  const {
    id,
    name,
    stars,
    colors,
    reviews,
    description,
    company,
    price,
    stock,
    category,
    images,
    shipping,
  } = product;

  useEffect(() => {
    getSingleProduct(`${url}${procutId}`);
  }, []);

  useEffect(() => {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  }, []);

  if (error) {
    return <Error />;
  }

  return (
    <section className="bg-gray-100 min-h-screen flex flex-col">
      <div className="container">
        <BreadCrumb title="Single Product" isSingleProduct={true} />
      </div>
      <div className="bg-white flex-1">
        <div className="container">
          {loading ? (
            <div className="mt-24">
              <Spinner />
            </div>
          ) : (
            <section>
              <Link
                className="inline-flex px-6 py-1 bg-orange-300 text-orange-900 rounded hover:bg-orange-400 mb-4 mt-4 transition-all duration-300 items-center"
                to="/"
              >
                <IoMdArrowBack className="mr-2" />
                Go to home
              </Link>
              <div className="md:grid md:grid-cols-2">
                <ProductImages images={images} />
                <div className="px-4 mb-20 md:mb-0">
                  <h1 className="text-2xl text-gray-600 capitalize font-bold">
                    {name}
                  </h1>
                  <div className="flex items-center">
                    <Stars stars={stars} />
                    <span className="block ml-3 text-sm text-gray-400">
                      {reviews} reviews
                    </span>
                  </div>
                  <div className="flex items-center">
                    <p className="text-orange-900 text-xl my-2">
                      {formatPrice(price)}
                    </p>
                  </div>
                  <div className="text-gray-500 text-light text-md">
                    <div className="my-2">
                      {stock > 0 ? (
                        <div className="inline-block px-4 bg-green-100 text-green-800 rounded-md border border-green-200">
                          <span>In stock: </span>
                          <span>{stock}</span>
                        </div>
                      ) : (
                        <span className="inline-block px-4  bg-red-100 text-red-800 rounded-md border border-red-200">
                          Out of stock
                        </span>
                      )}
                    </div>
                    <div className="my-2">
                      <span className="font-bold">Company: </span>
                      <span className="capitalize">{company}</span>
                    </div>
                  </div>
                  <p className="text-md text-gray-500 font-light leading-7">
                    {description}
                  </p>
                  {stock > 0 && <AddToCart product={product} />}
                </div>
              </div>
            </section>
          )}
        </div>
      </div>
    </section>
  );
};

export default SingleProductPage;
