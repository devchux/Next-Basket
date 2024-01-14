import { Box, Typography } from "@mui/material";
import Image from "next/image";
import React, { FC } from "react";

export type OfferProps = { image: string; title: string; description: string }

const Offer: FC<OfferProps> = ({
  image,
  title,
  description,
}) => {
  return (
    <Box
      width="100%"
      maxWidth="19.7rem"
      padding="2.19rem 2.5rem"
      display="flex"
      flexDirection="column"
      gap="1.25rem"
      textAlign="center"
      alignItems="center"
    >
      <Box position="relative" width="4.5rem" height="4.5rem">
        <Image src={image} alt="" fill />
      </Box>
      <Typography
        variant="h5"
        color="#252B42"
        fontSize="1.5rem"
        fontWeight={700}
        lineHeight="2rem"
        letterSpacing="0.00625rem"
      >
        {title}
      </Typography>
      <Typography
        color="#737373"
        fontSize="0.875rem"
        lineHeight="1.25rem"
        letterSpacing="0.0125rem"
      >
        {description}
      </Typography>
    </Box>
  );
};

export default Offer;
