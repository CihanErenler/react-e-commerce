import React, { useEffect, useState } from "react";
import BreadCrumb from "../components/BreadCrumb";
import { single_product_url as url } from "../common/constants";
import { useProductContext } from "../context/ProductsContext";
import Spinner from "../components/Spinner";
import { useParams } from "react-router-dom";

const SingleProductPage = () => {
  const { id } = useParams();
  console.log(id);

  const {
    getSingleProduct,
    singleProductLoading,
    singleProductLoaded,
    singleProductError,
  } = useProductContext();

  useEffect(() => {
    getSingleProduct(`${url}${id}`);
  });

  return (
    <section className="bg-gray-100 min-h-screen">
      <div className="container">
        <BreadCrumb title="Single Product" isSingleProduct={true} />
        <div className=""></div>
      </div>
    </section>
  );
};

export default SingleProductPage;
