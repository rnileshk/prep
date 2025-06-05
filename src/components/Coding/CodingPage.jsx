import React from "react";
import { Box, Grid, Typography } from "@mui/material";
import CodingHome from "./CodingHome";
import InterviewList from "./InterviewList";

function CodingPage() {
  return (
    <Box p={3} minHeight={"85vh"}>
      <Typography variant="h5" fontWeight="bold" color="primary" gutterBottom>
        Create and Start your AI DSA Practice
      </Typography>

      <Grid>
        <Grid>
            <CodingHome />
        </Grid>
      </Grid>

      {/* Previous Interview List */}
      <InterviewList />
    </Box>
  );
}

export default CodingPage;
