import React from 'react'
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import { CardActionArea, CardActions } from "@mui/material";
import { Attachment, Comment, Group } from "@mui/icons-material";
import { Box, Typography, Button } from "@mui/material";

function CardComponent() {
  return (
    <Card
    sx={{
      cursor: "pointer",
      boxShadow: "0 1px 1px rgba(0,0,0,0.2)",
      overflow: "unset",
    }}
  >
    <CardActionArea>
      <CardMedia
        component="img"
        height="140"
        image="/static/images/cards/contemplative-reptile.jpg"
        alt="green iguana"
      />
      <CardContent sx={{ p: 1.5, "&:last-child": { p: 1.5 } }}>
        <Typography>Duy's Project</Typography>
      </CardContent>
      <CardActions sx={{ p: "0 4px 8px 4px" }}>
        <Button size="small" startIcon={<Group />}>
          20
        </Button>
        <Button size="small" startIcon={<Comment />}>
          10
        </Button>
        <Button size="small" startIcon={<Attachment />}>
          15
        </Button>
      </CardActions>
    </CardActionArea>
  </Card>

  )
}

export default CardComponent