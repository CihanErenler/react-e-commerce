import React from "react";
import Product from "./Product";

const GridLayout = ({ products }) => {
  return (
    <div className="grid grid-cols-1  md:grid-cols-2  xl:grid-cols-3 gap-4">
      {products.map((product) => {
        return <Product key={product.id} {...product} />;
      })}
    </div>
  );
};

export default GridLayout;
