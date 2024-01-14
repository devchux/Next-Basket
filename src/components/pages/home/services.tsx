import Offer, { OfferProps } from "@/components/common/offer";
import SectionTitle from "@/components/common/section-title";
import { Box } from "@mui/material";
import React, { useMemo } from "react";

const Services = () => {
  const data: OfferProps[] = useMemo(() => {
    return [
      {
        title: "Easy Wins",
        description: "Get your best looking smile now!",
        image: "/assets/svgs/easy-wins.svg",
      },
      {
        title: "Concrete",
        description:
          "Defalcate is most focused in helping you discover your most beautiful smile",
        image: "/assets/svgs/concrete.svg",
      },
      {
        title: "Hack Growth",
        description: "Overcame any hurdle or any other problem.",
        image: "/assets/svgs/growth.svg",
      },
    ];
  }, []);
  return (
    <Box
      component="section"
      maxWidth="65.625rem"
      margin="0 auto"
      padding="5rem 0"
    >
      <SectionTitle
        section="Featured Products"
        title="BESTSELLER PRODUCTS"
        description="Problems trying to resolve the conflict between"
        mb="5rem"
      />
      <Box display="flex" gap="2.69rem" flexWrap="wrap" justifyContent="center">
        {data.map((offerProps) => (
          <Offer key={offerProps.title} {...offerProps} />
        ))}
      </Box>
    </Box>
  );
};

export default Services;
