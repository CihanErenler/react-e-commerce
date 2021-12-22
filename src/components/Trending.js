import React from "react";
import { useProductContext } from "../context/ProductsContext";
import Spinner from "./Spinner";
import { Link } from "react-router-dom";
import { BsFillCartPlusFill } from "react-icons/bs";

const Trending = () => {
  const { productsLoading, featuredProducts, productsError } =
    useProductContext();

  console.log(featuredProducts);

  return (
    <section className="min-h-96 bg-gray-50 pb-14">
      <h1 className="title">Featured</h1>
      <div className="container">
        {!productsError && (
          <div>
            {productsLoading ? (
              <Spinner />
            ) : (
              <div className="flex gap-3">
                {featuredProducts.map((product) => {
                  return (
                    <Link
                      to={`/singleProduct/${product.id}`}
                      key={product.id}
                      className="bg-white flex-1 rounded-lg overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300"
                    >
                      <div className="h-56 overflow-hidden">
                        <img
                          className="object-cover w-full h-full"
                          src={product.image}
                          alt="product"
                        />
                      </div>
                      <div className="py-2 px-6">
                        <div className="mb-2">
                          <h3 className="capitalize text-gray-500 font-light text-md">
                            {product.name}
                          </h3>
                          <h4>{product.price}$</h4>
                        </div>
                        <button className="btn capitalize flex items-center w-full justify-center mb-2">
                          Add to cart
                          <BsFillCartPlusFill className="ml-2" />
                        </button>
                      </div>
                    </Link>
                  );
                })}
              </div>
            )}
          </div>
        )}
      </div>
    </section>
  );
};

export default Trending;
