import TopBanner from "@/layouts/components/top-banner";
import React, { FC, ReactNode } from "react";
import Navbar from "./components/navbar";
import Footer from "./components/footer";
import { Box } from "@mui/material";

const Layout: FC<{ children: ReactNode }> = ({ children }) => {
  return (
    <Box component="main">
      <TopBanner />
      <Navbar />
      <Box component="section">{children}</Box>
      <Footer />
    </Box>
  );
};

export default Layout;
