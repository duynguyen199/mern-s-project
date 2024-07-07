import React from "react";
import {
  Avatar,
  AvatarGroup,
  Box,
  Button,
  Chip,
  Container,
  Tooltip,
} from "@mui/material";
import DashboardIcon from "@mui/icons-material/Dashboard";
import WorkspacesIcon from "@mui/icons-material/Workspaces";
import AddToDriveIcon from "@mui/icons-material/AddToDrive";
import BoltIcon from "@mui/icons-material/Bolt";
import { FilterList } from "@mui/icons-material";
import PersonAddIcon from '@mui/icons-material/PersonAdd';
const MENU_STYLE = {
  color: "primary.main",
  backgroundColor: "white",
  border: "none",
  paddingX: "5px",
  borderRadius: "4px",
  "& .MuiSvgIcon-root": {
    color: "primary.main",
  },
  "&:hover": {
    bgcolor: "primary.50",
  },
};
export default function BoardBar() {
  return (
    <Box
      px={2}
      sx={{
        width: "100%",
        height: (theme) => theme.projectCustom.boardBarHeight,
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        gap: 2,
        overflowX: "auto",
        borderTop: "1px solid #00bfa5",
      }}
    >
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          gap: 2,
        }}
      >
        <Chip
          sx={MENU_STYLE}
          icon={<DashboardIcon />}
          label="duynguyen"
          clickable="true"
          variant="outlined"
        />
        <Chip
          sx={MENU_STYLE}
          icon={<WorkspacesIcon />}
          label="Public/Private Workspace"
          clickable="true"
          variant="outlined"
        />
        <Chip
          sx={MENU_STYLE}
          icon={<AddToDriveIcon />}
          label="Add to Google Drive"
          clickable="true"
          variant="outlined"
        />
        <Chip
          sx={MENU_STYLE}
          icon={<WorkspacesIcon />}
          label="Public/Private Workspace"
          clickable="true"
          variant="outlined"
        />
        <Chip
          sx={MENU_STYLE}
          icon={<BoltIcon />}
          label="Automation"
          clickable="true"
          variant="outlined"
        />
        <Chip
          sx={MENU_STYLE}
          icon={<FilterList />}
          label="Filters"
          clickable="true"
          variant="outlined"
        />
      </Box>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          gap: 2,
        }}
      >
        <Button startIcon={<PersonAddIcon/>} variant="outlined">Invite</Button>

        <AvatarGroup max={4}
            sx={{
              '& .MuiAvatar-root':{
                width:"34px",
                height:"34px",
                fontSize:"16px"
              }
            }}
        >
          <Tooltip title="duynguyen">
            <Avatar alt="duynguyen" src="/static/images/avatar/1.jpg" />
          </Tooltip>
          <Tooltip title="duynguyen">
            <Avatar alt="duynguyen" src="/static/images/avatar/1.jpg" />
          </Tooltip>
          <Tooltip title="duynguyen">
            <Avatar alt="duynguyen" src="/static/images/avatar/1.jpg" />
          </Tooltip>
          <Tooltip title="duynguyen">
            <Avatar alt="duynguyen" src="/static/images/avatar/1.jpg" />
          </Tooltip>
          <Tooltip title="duynguyen">
            <Avatar alt="duynguyen" src="/static/images/avatar/1.jpg" />
          </Tooltip>
          <Tooltip title="duynguyen">
            <Avatar alt="duynguyen" src="/static/images/avatar/1.jpg" />
          </Tooltip>
          <Tooltip title="duynguyen">
            <Avatar alt="duynguyen" src="/static/images/avatar/1.jpg" />
          </Tooltip>

        </AvatarGroup>
      </Box>
    </Box>
  );
}
