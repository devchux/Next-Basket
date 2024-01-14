import { Box, BoxProps } from "@mui/material";
import React, { FC } from "react";

const SectionLayout: FC<BoxProps> = (props) => {
  return (
    <Box component="section" maxWidth="65.625rem" margin="0 auto" {...props} />
  );
};

export default SectionLayout;
