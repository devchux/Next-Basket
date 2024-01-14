import Banner from "@/components/pages/home/banner";
import Header from "@/components/pages/home/header";
import Products from "@/components/pages/home/products";
import React from "react";

const Home = () => {
  return (
    <>
      <Header />
      <Products />
      <Banner />
    </>
  );
};

export default Home;
