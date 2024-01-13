import { Box } from "@mui/material";
import Link from "next/link";
import React from "react";
import Product from "./product";

const ProductList = () => {
  return (
    <Box
      display="grid"
      gap="0.94rem 1.87rem"
      gridTemplateColumns={{
        xs: "repeat(1, 1fr)",
        sm: "repeat(2, 1fr)",
        md: "repeat(3, 1fr)",
        lg: "repeat(5, 1fr)",
      }}
    >
      {Array(10)
        .fill({
          image: "/assets/images/home-header-1.png",
          title: "Graphic Design",
          category: "English Department",
          oldPrice: "$16.48",
          newPrice: "$6.48",
        })
        .map((item, index) => (
          <Box
            component={Link}
            display="block"
            key={index}
            href={`/shop/${index + 1}`}
          >
            <Product {...item} />
          </Box>
        ))}
    </Box>
  );
};

export default ProductList;
