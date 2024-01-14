import ProductList from "@/components/cards/product-list";
import SectionTitle from "@/components/common/section-title";
import SectionLayout from "@/layouts/section";
import { Box, Button } from "@mui/material";
import React from "react";

const Products = () => {
  return (
    <SectionLayout maxWidth="67.69rem" py="5rem">
      <SectionTitle
        section="Featured Products"
        title="BESTSELLER PRODUCTS"
        description="Problems trying to resolve the conflict between"
        mb="3.5rem"
      />
      <ProductList />
      <Box display="flex" justifyContent="center" mt="3.5rem">
        <Button
          variant="outlined"
          sx={{
            padding: "0.94rem 2.5rem",
            borderRadius: "0.3125rem",
            fontSize: "0.875rem",
            fontWeight: "700",
            lineHeight: "1.375rem",
            letterSpacing: "0.0125rem",
          }}
        >
          LOAD MORE PRODUCTS
        </Button>
      </Box>
    </SectionLayout>
  );
};

export default Products;
