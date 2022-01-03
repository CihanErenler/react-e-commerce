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
            <Spinner />
          ) : (
            <section>
              <Link
                className="inline-flex px-6 py-1 bg-orange-300 text-orange-900 rounded hover:bg-orange-400 mb-4 mt-4 transition-all duration-300 items-center"
                to="/"
              >
                <IoMdArrowBack className="mr-2" />
                Go to home
              </Link>
              <div className="grid grid-cols-2">
                <ProductImages images={images} />
                <div className="p-4">
                  <h1 className="text-2xl text-gray-600 capitalize">{name}</h1>
                  <Stars stars={stars} />
                  <p className="text-yellow-700 font-semibold">
                    {formatPrice(price)}
                  </p>
                  <p className="text-md text-gray-500 font-light leading-7">
                    {description}
                  </p>
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
