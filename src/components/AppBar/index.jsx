import React from "react";
import DarkLightMode from "../ModeSelect";
import { ReactComponent as TrelloIcon } from "~/assets/trello.svg";
import {
  Box,
  Button,
  SvgIcon,
  TextField,
  Typography,
  Badge,
  Tooltip,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import Workspace from "./Menus/Workspace";
import Recent from "./Menus/Recent";
import Started from "./Menus/Started";
import Template from "./Menus/Template";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import QuestionMarkIcon from '@mui/icons-material/QuestionMark';
import Profile from "./Menus/Profile";

function AppBar() {
  return (
    <Box
      px={2}
      sx={{
        backgroundColor: (theme) => theme.colorSchemes,
        width: "100%",
        height: (theme) => theme.projectCustom.appBarHeight,
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between ",
      }}
    >
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          gap: 2,
        }}
      >
        <MenuIcon />
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            gap: 0.5,
          }}
        >
          <SvgIcon component={TrelloIcon} inheritViewBox fontSize="small" />
          <Typography
            variant="span"
            sx={{ fontSize: "1.2rem", fontWeight: "bold" }}
          >
            Trello
          </Typography>
        </Box>
        <Workspace />
        <Recent />
        <Started />
        <Template />
        <Button variant="outlined">Create</Button>
      </Box>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          gap: 2,
        }}
      >
        <TextField
          id="outlined-search"
          label="Search field"
          type="search"
          size="small"
        />
        <DarkLightMode />
        <Tooltip title="Notification">
          <Badge color="secondary" variant="dot" sx={{cursor:"pointer"}}>
            <NotificationsNoneIcon />
          </Badge>
        </Tooltip>
        <Tooltip title="Question?" sx={{cursor:"pointer"}}>
           <QuestionMarkIcon/>
        </Tooltip>
        <Profile/>
        
      </Box>
    </Box>
  );
}

export default AppBar;
