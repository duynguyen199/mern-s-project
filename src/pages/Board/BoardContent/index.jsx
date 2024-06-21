import React from "react";
import { Box, Container } from "@mui/material";

export default function BoardContent() {
  return (
    <div>
      <Box
        sx={{
          width: "100%",
          height: (theme) =>
            `calc(100vh - ${theme.projectCustom.appBarHeight} - ${theme.projectCustom.boardBarHeight})`,
          display: "flex",
          alignItems: "center",
          backgroundColor: "primary.main",
        }}
      >
        {" "}
        Board Content
      </Box>
    </div>
  );
}
