import ProductCarousel from "@/components/carousel/product";
import SectionLayout from "@/layouts/section";
import { Box, Typography } from "@mui/material";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const Header = () => {
  return (
    <SectionLayout component="header">
      <Box
        padding="2.12rem 0.53rem"
        display="flex"
        alignItems="center"
        gap="0.94rem"
      >
        <Typography
          component={Link}
          href="/"
          color="#252B42"
          fontSize="0.875rem"
          fontWeight="700"
          lineHeight="1.5rem"
          letterSpacing="0.0125rem"
        >
          Home
        </Typography>
        <Box position="relative" width="0.56rem" height="1rem">
          <Image src="/assets/svgs/gt-2.svg" alt="" fill />
        </Box>
        <Typography
          fontSize="0.875rem"
          fontWeight="700"
          lineHeight="1.5rem"
          letterSpacing="0.0125rem"
          color="#bdbdbd"
        >
          Shop
        </Typography>
      </Box>
      <Box>
        <ProductCarousel
          images={[
            "/assets/images/home-header-1.png",
            "/assets/images/home-header-2.png",
            "/assets/images/home-header-3.png",
          ]}
        />
      </Box>
    </SectionLayout>
  );
};

export default Header;
