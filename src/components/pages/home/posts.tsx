import Post from "@/components/cards/post";
import SectionTitle from "@/components/common/section-title";
import SectionLayout from "@/layouts/section";
import { Box } from "@mui/material";
import React from "react";

const Posts = () => {
  return (
    <SectionLayout padding="7rem 0">
      <SectionTitle
        section="Practice Advice"
        title="Featured Posts"
        mb="5rem"
        sectionProps={{
          color: "#23A6F0",
          fontSize: "0.875rem",
          fontWeight: 700,
        }}
      />
      <Box display="grid" gridTemplateColumns="repeat(3, 1fr)" gap="0.62rem">
        <Post image="/assets/images/post-1.png" />
        <Post image="/assets/images/post-2.png" />
        <Post image="/assets/images/post-3.png" />
      </Box>
    </SectionLayout>
  );
};

export default Posts;
