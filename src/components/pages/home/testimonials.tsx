import Stars from "@/components/common/stars";
import SectionLayout from "@/layouts/section";
import { defaultParagraphStyle } from "@/utils/constants";
import { Box, Typography, useTheme } from "@mui/material";
import Image from "next/image";
import React from "react";

const Testimonials = () => {
  const theme = useTheme();

  return (
    <SectionLayout
      padding="8rem 3rem"
      maxWidth="70.5rem"
      display="flex"
      alignItems="center"
      justifyContent="space-between"
    >
      <Box width="100%" maxWidth="30rem" textAlign="center">
        <Typography
          variant="h5"
          fontSize="1.5rem"
          fontWeight="700"
          lineHeight="2rem"
          letterSpacing="0.00625rem"
          color="#252B42"
          mb="1.75rem"
        >
          What they say about us
        </Typography>
        <Box
          padding="1.88rem 0"
          display="flex"
          flexDirection="column"
          alignItems="center"
          gap="1.25rem"
        >
          <Box
            width="5.625rem"
            height="5.625rem"
            position="relative"
            borderRadius="50%"
            overflow="hidden"
          >
            <Image
              src={`/assets/images/user-1.jpg`}
              alt=""
              fill
              objectFit="cover"
            />
          </Box>
          <Stars rating={4} />
          <Typography {...defaultParagraphStyle} fontWeight="700">
            Slate helps you see how many more days you need to work to reach
            your financial goal.
          </Typography>
          <Box>
            <Typography
              color={theme.palette.primary.main}
              {...defaultParagraphStyle}
              fontWeight="700"
            >
              Regina Miles
            </Typography>
            <Typography
              color="#252B42"
              fontSize="0.875rem"
              fontWeight="700"
              lineHeight="1.5rem"
              letterSpacing="0.0125rem"
            >
              Designer
            </Typography>
          </Box>
        </Box>
      </Box>
      <Box
        width="100%"
        maxWidth="31.22rem"
        display="grid"
        gridTemplateColumns="repeat(3, 1fr)"
        gap="1.12rem"
      >
        {Array(9)
          .fill(null)
          .map((_, index) => (
            <Box key={index} position="relative" height="8.92rem">
              <Image
                src={`/assets/images/t-${index + 1}.png`}
                alt=""
                fill
                objectFit="contain"
              />
            </Box>
          ))}
      </Box>
    </SectionLayout>
  );
};

export default Testimonials;
