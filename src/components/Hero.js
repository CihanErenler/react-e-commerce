import React from "react";
import bgg from "../assets/bgg.jpg";
import bg from "../assets/hmmm.jpg";
import Button from "./Button";

const Hero = () => {
  return (
    <section className="h-screen relative ">
      <div className="container mx-auto h-full relative z-10 text-center lg:text-left flex items-center lg:grid grid-cols-2 place-items-center gap-6 ">
        <div className="bg-white rounded-md  p-6 w-full justify-self-start lg:mr-8">
          <h1 className="md:text-5xl text-4xl font-extrabold mb-6 text-slate-700">
            Design your future
          </h1>
          <p className="text-xl mb-6 text-slate-400 leading-10 font-light lg:pr-8">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nisi
            explicabo sit molestiae aspernatur quisquam! Debitis in magni
            repudiandae nesciunt quaerat id.
          </p>
          <Button text="See Products" to="/products" type="link" />
        </div>
        <div className="relative w-full h-2/3 p-10 hidden lg:block">
          <div className="rounded-md overflow-hidden absolute w-64  xl:w-80 z-10 bottom-10 left-0 xl:left-10">
            <img src={bgg} alt="bgg" />
          </div>
          <div className="rounded-md absolute overflow-hidden w-80  xl:w-96 right-0  xl:right-10 bottom-10 ">
            <img src={bg} alt="bgg" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
