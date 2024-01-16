import ProductList from "@/components/cards/product-list";
import SectionTitle from "@/components/common/section-title";
import SectionLayout from "@/layouts/section";
import { AppDispatch, RootState } from "@/store";
import { Box, Button } from "@mui/material";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { IProductState } from "../../../../types";
import { updateLimit } from "@/store/slices/products";

const Products = () => {
  const dispatch = useDispatch<AppDispatch>();
  const products = useSelector<RootState>(
    (state) => state.products
  ) as IProductState;
  const limit = products.all.limit;

  const setProductCount = () => {
    const newLimit = Number(limit) + 5;
    dispatch(updateLimit(newLimit));
  };

  return (
    <SectionLayout maxWidth="67.69rem" py="5rem">
      <SectionTitle
        section="Featured Products"
        title="BESTSELLER PRODUCTS"
        description="Problems trying to resolve the conflict between"
        mb="3.5rem"
      />
      <ProductList limit={products.all.limit} />
      <Box display="flex" justifyContent="center" mt="3.5rem">
        <Button
          variant="outlined"
          disabled={products.all.isLoading}
          sx={{
            padding: "0.94rem 2.5rem",
            borderRadius: "0.3125rem",
            fontSize: "0.875rem",
            fontWeight: "700",
            lineHeight: "1.375rem",
            letterSpacing: "0.0125rem",
          }}
          onClick={setProductCount}
        >
          {products.all.isLoading ? "Fetching..." : "LOAD MORE PRODUCTS"}
        </Button>
      </Box>
    </SectionLayout>
  );
};

export default Products;
