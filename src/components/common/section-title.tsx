import { Box, BoxProps, Typography } from "@mui/material";
import React, { FC } from "react";

interface ISectionTitle extends BoxProps {
  section: string;
  title: string;
  description: string;
}

const SectionTitle: FC<ISectionTitle> = ({
  section,
  title,
  description,
  ...rest
}) => {
  return (
    <Box
      display="flex"
      flexDirection="column"
      gap="0.62rem"
      textAlign="center"
      {...rest}
    >
      <Typography
        fontSize="1.25rem"
        lineHeight="1.875rem"
        letterSpacing="0.0125rem"
        color="#737373"
      >
        {section}
      </Typography>
      <Typography
        fontSize="1.5rem"
        lineHeight="2rem"
        letterSpacing="0.00625rem"
        fontWeight={700}
        color="#252B42"
      >
        {title}
      </Typography>
      <Typography
        fontSize="0.875rem"
        lineHeight="1.25rem"
        letterSpacing="0.0125rem"
        color="#737373"
      >
        {description}
      </Typography>
    </Box>
  );
};

export default SectionTitle;
