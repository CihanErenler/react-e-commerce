import React from "react";
import Hero from "../components/Hero";
import Services from "../components/Services";
import NewsLetter from "../components/NewsLetter";
import Trending from "../components/FeaturedProducts";

const HomePage = () => {
  return (
    <div>
      <Hero />
      <Trending />
      <Services />
      <NewsLetter />
    </div>
  );
};

export default HomePage;
