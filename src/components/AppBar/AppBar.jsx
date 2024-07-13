import React, { useState } from "react";
import DarkLightMode from "../ModeSelect/ModeSelect";
import { ReactComponent as TrelloIcon } from "~/assets/trello.svg";
import {
  Box,
  Button,
  SvgIcon,
  TextField,
  Typography,
  Badge,
  Tooltip,
  InputAdornment,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import Workspace from "./Menus/Workspace";
import Recent from "./Menus/Recent";
import Started from "./Menus/Started";
import Template from "./Menus/Template";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import QuestionMarkIcon from "@mui/icons-material/QuestionMark";
import Profile from "./Menus/Profile";
import theme from "~/theme";
import { AccountCircle, CloseOutlined, SearchOutlined } from "@mui/icons-material";

function AppBar() {
  const [searchValue,setSearchValue]= useState('')
  return (
    <Box
      px={2}
      sx={{
        width: "100%",
        height: (theme) => theme.projectCustom.appBarHeight,
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between ",
        overflowX: "auto",
        bgcolor: (theme) =>
          theme.palette.mode === "dark" ? "#218c74" : "#33d9b2",
      }}
    >
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          gap: 2,
          color: "white",
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
          <SvgIcon
            sx={{ color: "white" }}
            component={TrelloIcon}
            inheritViewBox
            fontSize="small"
          />
          <Typography
            variant="span"
            sx={{ color: "white", fontSize: "1.2rem", fontWeight: "bold" }}
          >
            Trello
          </Typography>
        </Box>
        <Workspace />
        <Recent />
        <Started />
        <Template />
        <Button
          sx={{ color: "white", border: "none", "&:hover": { border: "none" } }}
          variant="outlined"
        >
          Create
        </Button>
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
          type="text"
          size="small"
          value={searchValue}
          onChange={(e)=>{
              setSearchValue(e.target.value)
          }}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <SearchOutlined sx={{ color: "white" }} />
              </InputAdornment>
            ),
            endAdornment:(
              <CloseOutlined 
                fontSize="small"
                sx={{color:searchValue? 'white':'transparent', cursor:"pointer"}}
                onClick={()=>{setSearchValue(" ")}}/>
            )
          }}
          sx={{
            minWidth: "120px",
            maxWidth: "170px",
            "& label": { color: "white" },
            "& input": { color: "white" },
            "& label .Mui-focused":{color:"white !important"},
            '& .MuiOutlinedInput-root':{
              '& fieldset':{borderColor:"white"},
              '&:hover fieldset':{borderColor:"white"},
              '&.Mui-foucused fieldset':{borderColor:"white"},
            }
          }}
        />
        <DarkLightMode />
        <Tooltip title="Notification">
          <Badge variant="dot" color="warning" sx={{ cursor: "pointer" }}>
            <NotificationsNoneIcon />
          </Badge>
        </Tooltip>
        <Tooltip title="Question?" sx={{ cursor: "pointer" }}>
          <QuestionMarkIcon sx={{color:"white"}} />
        </Tooltip>
        <Profile />
      </Box>
    </Box>
  );
}

export default AppBar;
