import React from "react";
import Button from "./Button";

const NewsLetter = () => {
  return (
    <section className="bg-sky-100 pb-12">
      <div className="container">
        <div className="py-20 text-center">
          <h1 className="uppercase text-red-500 mb-10">join our newsletter</h1>
          <h1 className="text-2xl  md:text-4xl md:w-2/5 m-auto font-bold mb-10">
            Subscribe to get Updated with new offers
          </h1>
          <div className="flex flex-col md:block">
            <input
              className="py-3 px-5 mr-2 w-full mb-5 md:w-2/5 rounded-lg "
              type="text"
              placeholder="Enter Email Adress"
            />
            <Button text="Subscribe" type="button" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default NewsLetter;
