import { Box, Typography } from "@mui/material";
import React, { useCallback } from "react";
import Logo from "./logo";
import Image from "next/image";
import { footerLinks } from "../constants";
import Link from "next/link";
import EmailNotification from "@/components/inputs/email-notification";
import { defaultParagraphStyle } from "@/utils/constants";

const Footer = () => {
  const footerLinkRightSpacing = useCallback((index: number) => {
    switch (index) {
      case 0:
        return "3.94rem";
      case 1:
        return "5.31rem";
      case 2:
        return "2.25rem";
      case 3:
        return "4.44rem";
      default:
        return "0";
    }
  }, []);

  return (
    <Box component="footer">
      <Box height="8.875rem">
        <Box
          maxWidth="65.625rem"
          margin="auto"
          display="flex"
          alignItems="center"
          justifyContent="space-between"
          height="100%"
        >
          <Logo />
          <Box
            width="14.75rem"
            display="flex"
            justifyContent="center"
            gap="1.25rem"
          >
            <Box position="relative" width="1.5rem" height="1.24rem">
              <Image alt="" src="/assets/svgs/fb-blue.svg" fill />
            </Box>
            <Box position="relative" width="1.5rem" height="1.24rem">
              <Image alt="" src="/assets/svgs/insta-blue.svg" fill />
            </Box>
            <Box position="relative" width="1.5rem" height="1.24rem">
              <Image alt="" src="/assets/svgs/tw-blue.svg" fill />
            </Box>
          </Box>
        </Box>
      </Box>
      <Box
        maxWidth="65.625rem"
        margin="auto"
        padding="3.12rem 0"
        borderTop="0.0625rem solid #e6e6e6"
      >
        <Box display="flex">
          {footerLinks.map((item, index) => (
            <Box
              key={item.title}
              marginRight={{
                lg: footerLinkRightSpacing(index),
              }}
            >
              <Typography
                variant="h5"
                fontSize="1rem"
                fontWeight="700"
                lineHeight="1.5rem"
                letterSpacing="0.00625rem"
                color="#252B42"
                marginBottom="1.25rem"
              >
                {item.title}
              </Typography>
              <Box display="flex" flexDirection="column" gap="0.62rem">
                {item.links.map((link) => (
                  <Typography
                    component={Link}
                    href={link.link}
                    key={link.title}
                    display="block"
                    fontSize="0.875rem"
                    fontWeight="700"
                    lineHeight="1.5rem"
                    letterSpacing="0.0125rem"
                    color="#737373"
                  >
                    {link.title}
                  </Typography>
                ))}
              </Box>
            </Box>
          ))}
          <Box>
            <Typography
              variant="h5"
              fontSize="1rem"
              fontWeight="700"
              lineHeight="1.5rem"
              letterSpacing="0.00625rem"
              color="#252B42"
              marginBottom="1.25rem"
            >
              Get In Touch
            </Typography>
            <EmailNotification />
            <Typography
              fontSize="0.75rem"
              lineHeight="1.75rem"
              letterSpacing="0.0125rem"
              color="#737373"
            >
              Lore imp sum dolor Amit
            </Typography>
          </Box>
        </Box>
      </Box>
      <Box padding="1.56rem 0" bgcolor="#FAFAFA">
        <Box
          maxWidth="65.625rem"
          margin="auto"
        >
          <Typography
            {...defaultParagraphStyle}
            fontWeight="700"
            color="#737373"
          >
            Made With Love By Finland All Right Reserved
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default Footer;
