import React from "react";
import { Box, Typography } from "@mui/material";

export default function Index() {
  return (
    <div style={{
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      backgroundColor: "#ffffed",
      height: "100vh",
    }}>
      <Box>
        <Typography variant="h1" style={{ color: '#510400'}}>
          Mechanical Keyboards
        </Typography>

        <Typography variant="h2" style={{ color: '#510400'}}>
          Welcome
        </Typography>
      </Box>
    </div>  
  );
}