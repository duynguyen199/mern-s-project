import { blue, deepOrange, orange, red, teal, yellow } from '@mui/material/colors';
import { createTheme } from '@mui/material/styles';
import { experimental_extendTheme as extendTheme} from '@mui/material/styles';
const theme = extendTheme({
  projectCustom:{
    appBarHeight:"48px",
    boardBarHeight:"58px"
  },
  colorSchemes: {
    light: {
      palette: {
        primary: teal,
        secondary: deepOrange
      },
      spacing: (factor) => `${0.25 * factor}rem`,
    },
    dark: {
      palette: {
        primary: teal,
        secondary:orange
      },
      spacing: (factor) => `${0.25 * factor}rem`,
    }
  },
  // ...other properties
  });
export default theme;
