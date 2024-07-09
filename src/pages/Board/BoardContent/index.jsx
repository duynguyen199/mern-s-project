import React from "react"
import Card from "@mui/material/Card"
import CardContent from "@mui/material/CardContent"
import CardMedia from "@mui/material/CardMedia"
import { CardActionArea } from "@mui/material"
import {
  Box,
  Container,
  Typography,
  Button,
  Menu,
  Tooltip,
} from "@mui/material"
import Divider from "@mui/material/Divider"
import ExpandMoreIcon from "@mui/icons-material/ExpandMore"
import MenuItem from "@mui/material/MenuItem"
import ListItemText from "@mui/material/ListItemText"
import ListItemIcon from "@mui/material/ListItemIcon"
import ContentCut from "@mui/icons-material/ContentCut"
import ContentCopy from "@mui/icons-material/ContentCopy"
import ContentPaste from "@mui/icons-material/ContentPaste"
import Cloud from "@mui/icons-material/Cloud"
import {
  AddCard,
  DeleteForever,
  DragHandleOutlined,
} from "@mui/icons-material";

const COLUMN_HEADER_HEIGHT = "50px"
const COLUMN_FOOTER_HEIGHT = "50px"

export default function BoardContent() {
  const [anchorEl, setAnchorEl] = React.useState(null)
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget)
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <div>
      <Box
        sx={{
          width: "100%",
          height: (theme) => theme.projectCustom.boardContentHeight,
          display: "flex",
          bgcolor: (theme) =>
            theme.palette.mode === "dark" ? "#218c74" : "#33d9b2",
        }}
      >
        {/*columns */}
        <Box
          sx={{
            minWidth: "300px",
            maxWidth: "300px",
            bgcolor: (theme) =>
              theme.palette.mode === "dark" ? "#333643" : "#ebecf0",
            ml: 2,
            borderRadius: "6px",
          }}
        >
          <Box
            sx={{
              height: COLUMN_HEADER_HEIGHT,
              p: 2,
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <Typography
              variant="h7"
              sx={{
                fontWeight: "bold",
                cursor: "pointer",
              }}
            >
              Column Title
            </Typography>
            <Box>
              <Tooltip title="More options">
                <ExpandMoreIcon
                  id="button-menu-workspace"
                  aria-controls={open ? "basic-menu-workspaces" : undefined}
                  aria-haspopup="true"
                  aria-expanded={open ? "true" : undefined}
                  onClick={handleClick}
                  sx={{
                    color: "text.primary",
                    cursor: "pointer",
                  }}
                />
              </Tooltip>
              <Menu
                id="basic-column-columns"
                aria-labelledby="button-menu-workspace"
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
                MenuListProps={{
                  "aria-labelledby": "basic-column-columns",
                }}
                anchorOrigin={{
                  vertical: "bottom",
                  horizontal: "left",
                }}
                transformOrigin={{
                  vertical: "top",
                  horizontal: "left",
                }}
              >
                <MenuItem>
                  <ListItemIcon>
                    <AddCard fontSize="small" />
                  </ListItemIcon>
                  <ListItemText>Add New Card</ListItemText>
                </MenuItem>
                <MenuItem>
                  <ListItemIcon>
                    <ContentCut fontSize="small" />
                  </ListItemIcon>
                  <ListItemText>Cut</ListItemText>
                </MenuItem>
                <MenuItem>
                  <ListItemIcon>
                    <ContentCopy fontSize="small" />
                  </ListItemIcon>
                  <ListItemText>Copy</ListItemText>
                </MenuItem>
                <MenuItem>
                  <ListItemIcon>
                    <ContentPaste fontSize="small" />
                  </ListItemIcon>
                  <ListItemText>Paste</ListItemText>
                </MenuItem>
                <Divider />
                <MenuItem>
                  <DeleteForever>
                    <Cloud fontSize="small" />
                  </DeleteForever>
                  <ListItemText>Remove this column</ListItemText>
                </MenuItem>
                <MenuItem>
                  <ListItemIcon>
                    <Cloud fontSize="small" />
                  </ListItemIcon>
                  <ListItemText>Archive this column</ListItemText>
                </MenuItem>
              </Menu>
            </Box>
          </Box>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
            }}
          >
            <Card sx={{ maxWidth: 345 }}>
              <CardActionArea>
                <CardMedia
                  component="img"
                  height="140"
                  image="/static/images/cards/contemplative-reptile.jpg"
                  alt="green iguana"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    Lizard
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    Lizards are a widespread group of squamate reptiles, with
                    over 6,000 species, ranging across all continents except
                    Antarctica
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          </Box>
          <Box
            sx={{
              height: COLUMN_FOOTER_HEIGHT,
              p: 2,
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <Button startIcon={<AddCard />}>Add new card</Button>
            <Tooltip title="Drag to move">
              <DragHandleOutlined sx={{ cursor: "pointer" }} />
            </Tooltip>
          </Box>
        </Box>
      </Box>
    </div>
  )
}
