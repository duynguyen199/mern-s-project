import React from "react";
import { Box, Container } from "@mui/material";
export default function BoardBar() {
  return (
    <Box
      sx={{
        backgroundColor: "primary.dark",
        width: "100%",
        height: (theme) => theme.projectCustom.boardBarHeight,
        display: "flex",
        alignItems: "center",
      }}
    >
      {" "}
      Board Bar
    </Box>
  );
}
