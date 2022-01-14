import React from "react";
import SingleListProduct from "./SingleListProduct";

const ListLayout = ({ products }) => {
  return (
    <section>
      {products.map((product) => {
        return <SingleListProduct key={product.id} {...product} />;
      })}
    </section>
  );
};

export default ListLayout;
