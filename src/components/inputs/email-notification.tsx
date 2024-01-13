import { Box, Button } from "@mui/material";
import React from "react";

const EmailNotification = () => {
  return (
    <Box
      height="3.625rem"
      display="flex"
      border="1px solid #E6E6E6"
      bgcolor="#f9f9f9"
      borderRadius="0.3125rem"
      overflow="hidden"
    >
      <Box
        component="input"
        type="email"
        placeholder="Your Email"
        fontSize="0.875rem"
        lineHeight="1.5rem"
        letterSpacing="0.0125rem"
        color="#737373"
        border="none"
        maxWidth="12.75rem"
        height="100%"
        padding="0.94rem"
        bgcolor="transparent"
      />
      <Button
        variant="contained"
        fullWidth
        sx={{
          color: "#FFF",
          height: "100%",
          boxShadow: "none",
          maxWidth: "7.3125rem",
          textTransform: "capitalize",
          borderRadius: "0"
        }}
      >
        Subscribe
      </Button>
    </Box>
  );
};

export default EmailNotification;
