import Button from "@/components/buttons/button";
import { defaultParagraphStyle } from "@/utils/constants";
import { Box, Typography } from "@mui/material";
import React from "react";

const Banner = () => {
  return (
    <Box
      height="40rem"
      padding="10rem 0 7rem 0"
      display="flex"
      flexDirection="column"
      gap="1.88rem"
      alignItems="center"
      textAlign="center"
      sx={{
        backgroundImage: `url(/assets/images/home-banner.png)`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
      }}
    >
      <Typography {...defaultParagraphStyle} color="#23A6F0" fontWeight={700}>
        Designing Better Experience
      </Typography>
      <Typography
        variant="h4"
        color="#252B42"
        fontSize="2.5rem"
        fontWeight={700}
        lineHeight="3.125rem"
        letterSpacing="0.0125rem"
        maxWidth="35.7rem"
        margin="0 auto"
      >
        Problems trying to resolve the conflict between
      </Typography>
      <Typography
        {...defaultParagraphStyle}
        color="#737373"
        maxWidth="28rem"
        margin="0 auto"
      >
        Problems trying to resolve the conflict between the two major realms of
        Classical physics:
      </Typography>
      <Typography
        color="#23856D"
        fontSize="1.5rem"
        fontWeight={700}
        lineHeight="2rem"
        letterSpacing="0.00625rem"
      >
        $16.48
      </Typography>
      <Button
        variant="contained"
        sx={{
          padding: "0.94rem 2.5rem",
        }}
      >
        ADD YOUR CALL TO ACTION
      </Button>
    </Box>
  );
};

export default Banner;
