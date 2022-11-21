import React from "react";
import { Box } from "@mui/material";

const Wrapper = ({ children }) => {
  return (
    <Box sx={{padding: "0 1% 1%"}}>
      {children}
    </Box>
  );
};

export default Wrapper;
