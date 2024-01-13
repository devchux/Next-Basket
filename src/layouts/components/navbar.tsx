import { Box, Typography } from "@mui/material";
import React from "react";
import Logo from "./logo";
import Link from "next/link";
import Image from "next/image";

const getNavLinkStyle = (isActive?: boolean) => {
  const navLinkStyle = {
    color: "#737373",
    fontSize: "0.875rem",
    fontWeight: 700,
    letterSpacing: "0.0125rem",
  };

  if (isActive) {
    navLinkStyle.color = "#252B42";
    navLinkStyle.fontWeight = 500;
  }

  return navLinkStyle;
};

const Navbar = () => {
  return (
    <Box
      component="nav"
      padding="1.97rem 2rem 1.56rem 2.38rem"
      display="flex"
      alignItems="center"
      gap="7.44rem"
    >
      <Logo />
      <Box display="flex" width="100%" justifyContent="space-between">
        <Box display="flex" gap="1.3rem">
          <Typography {...getNavLinkStyle()} component={Link} href="/">
            Home
          </Typography>
          <Typography {...getNavLinkStyle(true)} component={Link} href="/">
            Shop
            <Typography
              component="span"
              display="inline-block"
              position="relative"
              width="0.36rem"
              height="0.625rem"
              marginLeft="0.56rem"
            >
              <Image alt="" src="/assets/svgs/caret.svg" fill />
            </Typography>
          </Typography>
          <Typography {...getNavLinkStyle()} component={Link} href="/">
            About
          </Typography>
          <Typography {...getNavLinkStyle()} component={Link} href="/">
            Blog
          </Typography>
          <Typography {...getNavLinkStyle()} component={Link} href="/">
            Contact
          </Typography>
          <Typography {...getNavLinkStyle()} component={Link} href="/">
            Pages
          </Typography>
        </Box>
        <Box>
          <Box display="flex" alignItems="center" gap="1.87rem">
            <Typography
              component={Link}
              href="/auth"
              {...getNavLinkStyle()}
              color="#23A6F0"
            >
              <Typography
                component="span"
                display="inline-block"
                position="relative"
                width="0.75rem"
                height="0.75rem"
                marginRight="0.31rem"
              >
                <Image alt="" src="/assets/svgs/user.svg" fill />
              </Typography>
              Login / Register
            </Typography>
            <Box
              component={Link}
              href="/search"
              display="inline-block"
              position="relative"
              width="1rem"
              height="1rem"
            >
              <Image alt="" src="/assets/svgs/search.svg" fill />
            </Box>
            <Box
              {...getNavLinkStyle()}
              color="#23A6F0"
              fontWeight={400}
              display="flex"
              alignItems="center"
              sx={{ cursor: "pointer" }}
            >
              <Typography
                component="span"
                display="inline-block"
                position="relative"
                width="1rem"
                height="1rem"
                marginRight="0.31rem"
              >
                <Image alt="" src="/assets/svgs/cart.svg" fill />
              </Typography>
              1
            </Box>
            <Box
              {...getNavLinkStyle()}
              color="#23A6F0"
              fontWeight={400}
              display="flex"
              alignItems="center"
              sx={{ cursor: "pointer" }}
            >
              <Typography
                component="span"
                display="inline-block"
                position="relative"
                width="1rem"
                height="1rem"
                marginRight="0.31rem"
              >
                <Image alt="" src="/assets/svgs/love.svg" fill />
              </Typography>
              1
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Navbar;
