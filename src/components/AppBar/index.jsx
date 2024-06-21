import React from "react";
import DarkLightMode from "../ModeSelect";
import { Box, Container } from "@mui/material";

function AppBar() {
  return (
    <Box
      sx={{
        backgroundColor: "primary.light",
        width: "100%",
        height: (theme) => theme.projectCustom.appBarHeight,
        display: "flex",
        alignItems: "center",
      }}
    >
      {" "}
      <DarkLightMode />
    </Box>
  );
}

export default AppBar;
