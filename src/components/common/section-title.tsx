import { defaultParagraphStyle } from "@/utils/constants";
import { Box, BoxProps, Typography, TypographyProps } from "@mui/material";
import React, { FC } from "react";

interface ISectionTitle extends BoxProps {
  section: string;
  title: string;
  description?: string;
  sectionProps?: TypographyProps;
  titleProps?: TypographyProps;
  descriptionProps?: TypographyProps;
}

const SectionTitle: FC<ISectionTitle> = ({
  section,
  title,
  description,
  titleProps,
  descriptionProps,
  sectionProps,
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
        {...sectionProps}
      >
        {section}
      </Typography>
      <Typography
        fontSize="1.5rem"
        lineHeight="2rem"
        letterSpacing="0.00625rem"
        fontWeight={700}
        color="#252B42"
        {...titleProps}
      >
        {title}
      </Typography>
      {description && (
        <Typography
          {...defaultParagraphStyle}
          color="#737373"
          {...descriptionProps}
        >
          {description}
        </Typography>
      )}
    </Box>
  );
};

export default SectionTitle;
