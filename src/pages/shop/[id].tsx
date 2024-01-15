import ProductDetails from "@/components/pages/shop/details";
import Header from "@/components/pages/shop/header";
import Products from "@/components/pages/shop/products";
import { Box } from "@mui/material";
import React from "react";

const Shop = () => {
  return (
    <Box bgcolor="#FAFAFA">
      <Header />
      <ProductDetails />
      <Products />
    </Box>
  );
};

export default Shop;
