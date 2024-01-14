import Banner from "@/components/pages/home/banner";
import Header from "@/components/pages/home/header";
import Posts from "@/components/pages/home/posts";
import Products from "@/components/pages/home/products";
import Services from "@/components/pages/home/services";
import React from "react";

const Home = () => {
  return (
    <>
      <Header />
      <Products />
      <Services />
      <Posts />
      <Banner />
    </>
  );
};

export default Home;
