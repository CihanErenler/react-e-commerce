import React from "react";
import { services } from "../common/constants";

const Services = () => {
  return (
    <section className="p-2 md:p-8 text-center">
      <h1 className="text-3xl font-bold text-slate-700 mb-5">Services</h1>

      <div className="container md:grid grid-cols-3 gap-5 pb-16">
        {services.map((service) => {
          const { id, title, icon, text } = service;
          return (
            <div
              key={id}
              className="bg-gray-50 rounded-xl p-4 xl:p-10 shadow-lg mb-5"
            >
              <h1 className="text-4xl text-center flex justify-center mb-2 text-orange-400 ">
                {icon}
              </h1>
              <h1 className="mb-2 text-lg font-bold text-slate-700">{title}</h1>
              <p className="text-md font-light text-slate-500">{text}</p>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Services;
