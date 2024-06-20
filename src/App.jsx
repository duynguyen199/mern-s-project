import { Box, Container } from "@mui/material";
import React from "react";

import DarkLightMode from "./ButtonMode";

function App() {
  return (
    <Container
      disableGutters
      maxWidth={false}
      sx={{ height: "100vh" }}
    >
      <Box
        sx={{
          backgroundColor: "primary.light",
          width: "100%",
          height: (theme)=> theme.projectCustom.appBarHeight,
          display: "flex",
          alignItems: "center",
        }}
      >
        {" "}
        <DarkLightMode />
      </Box>
      <Box
        sx={{
          backgroundColor: "primary.dark",
          width: "100%",
          height: (theme)=> theme.projectCustom.boardBarHeight,
          display: "flex",
          alignItems: "center",
        }}
      > Board Bar</Box>
      <Box sx={{
        width:'100%',
        height:(theme)=>`calc(100vh - ${theme.projectCustom.appBarHeight} - ${theme.projectCustom.boardBarHeight})`,
        display: "flex",
        alignItems: "center",
        backgroundColor: "primary.main"
      }}> Board Content</Box>
    </Container>
  );
}

export default App;
