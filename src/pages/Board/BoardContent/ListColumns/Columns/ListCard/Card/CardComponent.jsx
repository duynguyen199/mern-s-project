import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import { CardActionArea, CardActions } from "@mui/material";
import { Attachment, Comment, Group } from "@mui/icons-material";
import { Box, Typography, Button } from "@mui/material";

function CardComponent(props) {
  const { card } = props;
  const shouldShowCardAction = () => {
    return (
      !!card?.memberIds?.length ||
      !!card?.comments?.length ||
      !!card?.attachments?.length
    );
  };
  return (
    <Card
      sx={{
        cursor: "pointer",
        boxShadow: "0 1px 1px rgba(0,0,0,0.2)",
        overflow: "unset",
      }}
    >
      <CardActionArea>
        {card?.cover && (
          <CardMedia component="img" height="140" image={card?.cover} />
        )}

        <CardContent sx={{ p: 1.5, "&:last-child": { p: 1.5 } }}>
          <Typography>{card?.title}</Typography>
        </CardContent>
        {shouldShowCardAction() && (
          <CardActions sx={{ p: "0 4px 8px 4px" }}>
            {!!card?.memberIds?.length && (
              <Button size="small" startIcon={<Group />}>
                {card?.memberIds?.length}
              </Button>
            )}
            {!!card?.comments?.length && (
              <Button size="small" startIcon={<Comment />}>
                {!!card?.comments?.length}
              </Button>
            )}
            {!!card?.attachments?.length && (
              <Button size="small" startIcon={<Attachment />}>
                {!!card?.attachments?.length}
              </Button>
            )}
          </CardActions>
        )}
      </CardActionArea>
    </Card>
  );
}

export default CardComponent;
