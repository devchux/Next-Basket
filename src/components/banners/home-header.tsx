import { Box, Typography } from "@mui/material";
import React, { FC } from "react";

const paragraphStyle = {
  fontSize: "0.875rem",
  fontWeight: "700",
  lineHeight: "1.5rem",
  letterSpacing: "0.0125rem",
};

const headingStyle = {
  fontSize: "2.5rem",
  fontWeight: "700",
  lineHeight: "3.125rem",
  letterSpacing: "0.0125rem",
};

const HomeHeaderBanner: FC<{
  itemsCount: number;
  title?: string;
  imageSrc: string;
}> = ({ itemsCount, title = "FURNITURE", imageSrc }) => {
  return (
    <Box
      padding="1.5rem"
      height="100%"
      sx={{
        backgroundImage: `url(${imageSrc})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
      }}
    >
      <Typography {...paragraphStyle} color="#2DC071" marginBottom="0.31rem">
        {itemsCount} Items
      </Typography>
      <Typography
        {...headingStyle}
        variant="h4"
        color="#252B42"
        textTransform="uppercase"
        marginBottom="0.31rem"
      >
        {title}
      </Typography>
      <Typography {...paragraphStyle} color="#252B42">
        Read More
      </Typography>
    </Box>
  );
};

export default HomeHeaderBanner;
