import HomeHeaderBanner from "@/components/banners/home-header";
import { Box, Grid } from "@mui/material";
import React from "react";

const Header = () => {
  return (
    <Box component="header" padding="5rem 0">
      <Box
        component="div"
        display="grid"
        width="fit-content"
        gridTemplateColumns="28.1875rem 20.6875rem 20.6875rem"
        gridTemplateRows="18.75rem 18.75rem"
        margin="auto"
      >
        <Box gridRow="1/span 3" mr="1rem">
          <HomeHeaderBanner
            itemsCount={5}
            imageSrc="/assets/images/home-header-1.png"
          />
        </Box>
        <Box gridColumn="2/span 3" gridRow="1" mb="1rem">
          <HomeHeaderBanner
            itemsCount={5}
            imageSrc="/assets/images/home-header-2.png"
          />
        </Box>
        <Box gridRow="2" gridColumn="2" mr="1rem">
          <HomeHeaderBanner
            itemsCount={5}
            imageSrc="/assets/images/home-header-3.png"
          />
        </Box>
        <Box gridRow="2" gridColumn="3">
          <HomeHeaderBanner
            itemsCount={5}
            imageSrc="/assets/images/home-header-4.png"
          />
        </Box>
      </Box>
    </Box>
  );
};

export default Header;
