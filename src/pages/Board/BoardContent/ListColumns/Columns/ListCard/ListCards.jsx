import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import { CardActionArea, CardActions } from "@mui/material";
import { Attachment, Comment, Group } from "@mui/icons-material";
import { Box, Typography, Button } from "@mui/material";
import CardComponent from "./Card/CardComponent";

function ListCards(props) {
  const { cards } = props;
  return (
    <Box
      sx={{
        p: "0 5px",
        m: "0 5px",
        display: "flex",
        flexDirection: "column",
        gap: 1,
        overflowX: "hidden",
        overflowY: "auto",
        maxHeight: (theme) => `calc(
            ${theme.projectCustom.boardContentHeight} - 
            ${theme.spacing(5)} - 
            ${theme.projectCustom.columnHeaderheight} - 
            ${theme.projectCustom.columnFooterHeight}
            )`,
        "&::-webkit-scrollbar-thumb": {
          backgroundColor: "#ced0da",
          borderRadius: "8px",
        },
        "&::-webkit-scrollbar-thumb:hover": {
          background: "#dfc2cf",
        },
      }}
    >
      {cards?.map((card) => (
        <CardComponent key={card._id} card ={card } />
      ))}
    </Box>
  );
}

export default ListCards;
