import React from "react";
import Carousel from "./Carousel";
import Products from "./Products";

const Home = () => {
  return (
    <>
      <section className="relative overflow-hidden mt-4 ">
        <Carousel />
      </section>
      <h2 className="text-pink-600 text-center text-4xl font-bold uppercase m-8">
        Products
      </h2>
      <Products />
    </>
  );
};

export default Home;
