import * as React from "react";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { Box, useColorScheme } from "@mui/material";
useColorScheme;
import LightModeIcon from "@mui/icons-material/LightMode";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import SettingsBrightnessIcon from "@mui/icons-material/SettingsBrightness";
import theme from "../../theme";

const ModeToggle = () => {
  const prefersDarkMode = useMediaQuery("(prefers-color-scheme: dark)");
  const prefersLightMode = useMediaQuery("(prefers-color-scheme: light)");

  return (
    <Button
      onClick={() => {
        setMode(mode === "light" ? "dark" : "light");
      }}
    >
      {mode === "light" ? "Turn dark" : "Turn light"}
    </Button>
  );
};
const DarkLightMode = () => {
  const { mode, setMode } = useColorScheme();

  const handleChange = (event) => {
    setMode(event.target.value);
  };

  return (
    <FormControl sx={{ m: 1, minWidth: 120}} size="small">
      <InputLabel 
      id="label-select-light-dark-mode"
      sx={{color:"white",
        "&.Mui-focused": {color:"white"}
      }}
      >
        Mode</InputLabel>
      <Select
        labelId="label-select-light-dark-mode"
        id="select-light-dark-mode"
        value={mode}
        label="Mode"
        onChange={handleChange}
        sx={{
          color:"white",
          '.MuiOutlinedInput-notchedOutline':{borderColor:"white"},
          '&:hover .MuiOutlinedInput-notchedOutline':{borderColor:"white"},
          '&.Mui-focused .MuiOutlinedInput-notchedOutline':{borderColor:"white"},
          '&.MuiSvgIcon-root':{color:"white"}


        }}
      >
        <MenuItem value="light">
          <Box sx={{ display: "flex", alignItems: "center", gap:theme.spacing(1) }}>
            <LightModeIcon fontSize="small" /> Light
          </Box>
        </MenuItem>
        <MenuItem value="dark">
        <Box sx={{ display: "flex", alignItems: "center", gap:theme.spacing(1) }}>
          <DarkModeIcon fontSize="small" /> Dark
          </Box>
        </MenuItem>
        <MenuItem value="system">
        <Box  sx={{ display: "flex", alignItems: "center", gap: theme.spacing(1) }}>
          <SettingsBrightnessIcon fontSize="small" /> System
          </Box>
        </MenuItem>
      </Select>
    </FormControl>
  );
};
export default DarkLightMode;
