import { blue, deepOrange, green, orange, purple, red, teal, yellow } from '@mui/material/colors';
import { createTheme } from '@mui/material/styles';
import { experimental_extendTheme as extendTheme } from '@mui/material/styles';
const theme = extendTheme({
  projectCustom: {
    appBarHeight: "58px",
    boardBarHeight: "60px",

  },
  
  // colorSchemes: {
  //   light: {
  //     palette: {
  //       primary: {
  //         main: '#bbdefb',
  //       },

  //     },
  //     spacing: (factor) => `${0.25 * factor}rem`,
  //   },
  //   dark: {
  //     palette: {
  //       primary: {
  //         main: '#1565c0',        
  //     },


  //     },
  //     spacing: (factor) => `${0.25 * factor}rem`,
  //   }
  // },
  palette: {
    primary: {
      light: '#757ce8',
      main: '#3f50b5',
      dark: '#002884',
      contrastText: '#fff',
    },
    secondary: {
      light: '#ff7961',
      main: '#f44336',
      dark: '#ba000d',
      contrastText: '#000',
    },
  },
  components: {
    // Name of the component
    MuiButton: {
      styleOverrides: {
        // Name of the slot
        root: {
          // Some CSS
          fontSize: '1rem',
          textTransform:'none'
        },
      },
    },
    MuiInputLabel:{
      styleOverrides: {
        // Name of the slot
        root: ({theme})=>({
  
          color:theme.palette.primary.main,
          fontSize:'0.875rem'
        })
      },
    },
    MuiOutlinedInput: {
      styleOverrides: {
          root:({theme})=>({
            
            color:theme.palette.primary.main,
            fontSize:"0.875rem",
            'MuiOutlinedInput-notchedOutline':{
              borderColor:theme.palette.primary.main
            },
            '&:hover':{
              'MuiOutlinedInput-notchedOutline':{
                borderColor:theme.palette.primary.main
              },
            },
            '& fieldset':{
              borderWidth:'1px !important'
            }
          })
      },
    },
  }
  // ...other properties
});
export default theme;
