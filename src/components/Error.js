import React from "react";
import Button from "./Button";
import BreadCrumb from "./BreadCrumb";

const Error = () => {
  return (
    <section className="bg-gray-100 min-h-screen grid place-items-center">
      <div className="container">
        <BreadCrumb title="Single Product" isSingleProduct={true} />
        <div className="flex items-center justify-center flex-col min-h-fit mt-36">
          <h1 className="text-3xl mb-4 text-gray-500">There was an error</h1>
          <Button type="link" to="/" text="Home Page" />
        </div>
      </div>
    </section>
  );
};

export default Error;
