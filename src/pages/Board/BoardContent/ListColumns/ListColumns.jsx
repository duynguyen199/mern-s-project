import React from "react";
import { Box, Button } from "@mui/material";

import Columns from "./Columns/Columns";
import { NoteAdd } from "@mui/icons-material";

function ListColumns() {
  return (
    <Box
      sx={{
        bgcolor: "inherit",
        width: "100%",
        display: "flex",
        overflowX: "auto",
        overflowY: "hidden",
        "&::-webkit-scrollbar-track": {
          m: 2,
        },
      }}
    >
      {/*columns 01*/}
      <Columns />
      <Box
        sx={{
          minWidth: "200px",
          maxWidth: "200px",
          mx: 2,
          bgcolor: "#ffffff3d",
          borderRadius: "6px",
          height: "fit-content",
        }}
      >
        <Button
          sx={{
            color: "white",
            width: "100%",
            justifyContent: "flex-start",
            pl: 2.5,
            py: 1,
          }}
          startIcon={<NoteAdd />}
        >
          Add New Columns
        </Button>
      </Box>
      <Box></Box>
    </Box>
  );
}

export default ListColumns;
