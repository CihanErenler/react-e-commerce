import React from "react";
import BreadCrumb from "../components/BreadCrumb";
import bg from "../assets/bgg.jpg";

const AboutPage = () => {
  return (
    <section className="min-h-screen bg-gray-1020 flex flex-col">
      <div className="container">
        <BreadCrumb title="About" />
      </div>
      <div className="bg-white h-full flex-1 pt-10 flex items-center">
        <div className="container">
          <div className="h-full pb-20 xl:p-8 rounded-lg xl:grid grid-cols-2 mb-14 place-items-center">
            <div className="rounded-lg overflow-hidden 2xl:h-96 xl:h-auto">
              <img
                src={bg}
                alt="about-img"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="p-6">
              <h1 className="text-4xl font-semibold text-center pb-10 text-slate-700">
                About us
              </h1>
              <p className="font-light text-slate-500 leading-8 text-center sm:text-justify sm:pl-10">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Impedit eum optio eligendi quasi ab dicta dignissimos! Enim
                repellat pariatur eligendi deleniti, id corrupti fugiat maxime
                asperiores molestiae officiis reiciendis doloribus amet,
                voluptatum nihil suscipit. Quos repellendus quibusdam odit illum
                eum modi veritatis fugit, quaerat animi. A earum deserunt,
                exercitationem, molestias necessitatibus voluptatum facilis quis
                quae enim optio quam et eveniet expedita!
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutPage;
