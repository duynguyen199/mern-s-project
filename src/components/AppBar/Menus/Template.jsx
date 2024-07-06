import * as React from "react"
import Divider from "@mui/material/Divider"
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'
import MenuItem from "@mui/material/MenuItem"
import ListItemText from "@mui/material/ListItemText"
import ListItemIcon from "@mui/material/ListItemIcon"
import Typography from "@mui/material/Typography"
import ContentCut from "@mui/icons-material/ContentCut"
import ContentCopy from "@mui/icons-material/ContentCopy"
import ContentPaste from "@mui/icons-material/ContentPaste"
import Cloud from "@mui/icons-material/Cloud"
import { Button, Menu } from "@mui/material"
import { Check } from "@mui/icons-material"

function Template() {
  const [anchorEl, setAnchorEl] = React.useState(null)
  const open = Boolean(anchorEl)
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget)
  };
  const handleClose = () => {
    setAnchorEl(null)
  };
  return (
    <div>
      <Button
        id="button-menu-template"
        aria-controls={open ? "basic-menu-template" : undefined}
        aria-haspopup="true"
        aria-expanded={open ? "true" : undefined}
        onClick={handleClick}
        sx={{ color: theme=> theme.colorSchemes}}
        endIcon={<ExpandMoreIcon/>}
      >
       Template
      </Button>
      <Menu
        id="basic-menu-template"
        aria-labelledby="button-menu-template"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        anchorOrigin={{
          vertical: "top",
          horizontal: "left",
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "left",
        }}
      >
  
  <MenuItem>
          <ListItemText inset>Single</ListItemText>
        </MenuItem>
        <MenuItem>
          <ListItemText inset>1.15</ListItemText>
        </MenuItem>
        <MenuItem>
          <ListItemText inset>Double</ListItemText>
        </MenuItem>
        <MenuItem>
          <ListItemIcon>
            <Check />
          </ListItemIcon>
          Custom: 1.2
        </MenuItem>
        <Divider />
        <MenuItem>
          <ListItemText>Add space before paragraph</ListItemText>
        </MenuItem>
        <MenuItem>
          <ListItemText>Add space after paragraph</ListItemText>
        </MenuItem>
        <Divider />
        <MenuItem>
          <ListItemText>Custom spacing...</ListItemText>
        </MenuItem>
      </Menu>

    </div>
  )
}

export default Template;
