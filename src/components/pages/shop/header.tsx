import Button from "@/components/buttons/button";
import ProductCarousel from "@/components/carousel/product";
import Stars from "@/components/common/stars";
import SectionLayout from "@/layouts/section";
import { defaultParagraphStyle } from "@/utils/constants";
import { Box, Typography } from "@mui/material";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const Header = () => {
  const colors = ["#23A6F0", "#2DC071", "#E77C40", "#252B42"];
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
        <Typography {...defaultParagraphStyle} fontWeight="700" color="#bdbdbd">
          Shop
        </Typography>
      </Box>
      <Box display="flex" gap="1.88rem">
        <ProductCarousel
          images={[
            "/assets/images/home-header-1.png",
            "/assets/images/home-header-2.png",
            "/assets/images/home-header-3.png",
          ]}
        />
        <Box
          width="100%"
          padding="1.5rem"
          pt="0.69rem"
          display="flex"
          flexDirection="column"
          gap="7.44rem"
        >
          <Box>
            <Typography
              variant="h5"
              color="#252B42"
              fontSize="1.25rem"
              lineHeight="1.875rem"
              letterSpacing="0.0125rem"
            >
              Floating Phone
            </Typography>
            <Box>
              <Stars rating={4} />
              <Typography>10 Reviews</Typography>
            </Box>
            <Typography>$1,139.33</Typography>
            <Box>
              <Typography>Availability :</Typography>
              <Typography>In Stock</Typography>
            </Box>
          </Box>
          <Box borderTop="0.0625rem solid #bdbdbd">
            <Box display="flex" gap="0.62rem" mt="1.81rem" mb="4.19rem">
              {colors.map((color) => (
                <Box
                  key={color}
                  bgcolor={color}
                  width="1.875rem"
                  height="1.875rem"
                  borderRadius="50%"
                />
              ))}
            </Box>
            <Box display="flex" gap="0.62rem">
              <Button variant="contained">Select Options</Button>
              <Box
                role="button"
                width="2.5rem"
                height="2.5rem"
                display="flex"
                alignItems="center"
                justifyContent="center"
                borderRadius="50%"
                border="1px solid #E8E8E8"
              >
                <Box position="relative" width="1.25rem" height="1.25rem">
                  <Image src="/assets/svgs/love-black.svg" alt="" fill />
                </Box>
              </Box>
              <Box
                role="button"
                width="2.5rem"
                height="2.5rem"
                display="flex"
                alignItems="center"
                justifyContent="center"
                borderRadius="50%"
                border="1px solid #E8E8E8"
              >
                <Box position="relative" width="1.25rem" height="1.25rem">
                  <Image src="/assets/svgs/cart-black.svg" alt="" fill />
                </Box>
              </Box>
              <Box
                role="button"
                width="2.5rem"
                height="2.5rem"
                display="flex"
                alignItems="center"
                justifyContent="center"
                borderRadius="50%"
                border="1px solid #E8E8E8"
              >
                <Box position="relative" width="1.25rem" height="1.25rem">
                  <Image src="/assets/svgs/eye.svg" alt="" fill />
                </Box>
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>
    </SectionLayout>
  );
};

export default Header;
