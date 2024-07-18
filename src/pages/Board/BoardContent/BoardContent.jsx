import React from "react";
import ListColumns from "./ListColumns/ListColumns";
import { Box } from "@mui/material";
import { mapOrder } from "~/ultis/sort";

export default function BoardContent(props) {
  const {board} = props

  const orderedColumns =mapOrder(board?.columns,board?.columnOrderIds,'_id')
  return (
    <div>
      <Box
        sx={{
          width: "100%",
          height: (theme) => theme.projectCustom.boardContentHeight,
          bgcolor: (theme) =>
            theme.palette.mode === "dark" ? "#218c74" : "#33d9b2",
          p:'10px 0'
        }}
      >
        <ListColumns columns ={orderedColumns}/>
      </Box>
    </div>
  );
}
