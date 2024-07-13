import { Height } from '@mui/icons-material';
import { blue, deepOrange, green, orange, purple, red, teal, yellow } from '@mui/material/colors';
import { createTheme } from '@mui/material/styles';
import { experimental_extendTheme as extendTheme } from '@mui/material/styles';

const APP_BAR_HEIGHT ='58px'
const BOARD_BAR_HEIGHT ='60px'
const BOARD_CONTENT_HEIGHT = `calc(100vh - ${APP_BAR_HEIGHT} - ${BOARD_BAR_HEIGHT})`
const COLUMN_HEADER_HEIGHT = "50px";
const COLUMN_FOOTER_HEIGHT = "56px";
const theme = extendTheme({
  projectCustom: {
    appBarHeight: APP_BAR_HEIGHT,
    boardBarHeight: BOARD_BAR_HEIGHT,
    boardContentHeight:BOARD_CONTENT_HEIGHT,
    columnHeaderheight : COLUMN_HEADER_HEIGHT,
    columnFooterHeight: COLUMN_FOOTER_HEIGHT

  },
  
  colorSchemes: {
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
  },
  // palette: {
  //   primary: {
  //     light: '#757ce8',
  //     main: '#3f50b5',
  //     dark: '#002884',
  //     contrastText: '#fff',
  //   },
  //   secondary: {
  //     light: '#ff7961',
  //     main: '#f44336',
  //     dark: '#ba000d',
  //     contrastText: '#000',
  //   },
  // },
  components: {
    // Name of the component
    MuiCssBaseline:{
      styleOverrides:{
        body:{
         '*::-webkit-scrollbar': {
            width: '3px',
            height:'3px'
          },
         '*::-webkit-scrollbar-thumb': {
            backgroundColor: '#bdc3c7',
            borderRadius:'8px'
          },
          '*::-webkit-scrollbar-thumb:hover':{
            background:' white'
          }
        }
      }
    },
    MuiButton: {
      styleOverrides: {
        // Name of the slot
        root: {
          // Some CSS
          fontSize: '1rem',
          textTransform:'none',
          borderWidth:"0.5px",
          "&:hover":{borderWidth:"1.5px",}
        },
      },
    },
    MuiInputLabel:{
      styleOverrides: {
        // Name of the slot
        root: ({theme})=>({
  
          // color:theme.palette.primary.main,
          fontSize:'0.875rem'
        })
      },
    },
    MuiTypography:{
      styleOverrides: {
        // Name of the slot
        root: ({theme})=>({
  
          '& .MuiTypography-body1':{
            fontSize:'0.875rem'
          }
        })
      },
    },
    MuiOutlinedInput: {
      styleOverrides: {
          root:({theme})=>({
            
            // color:theme.palette.primary.main,
            fontSize:"0.875rem",
            // 'MuiOutlinedInput-notchedOutline':{
            //   borderColor:theme.palette.primary.main
            // },
            // '&:hover':{
            //   'MuiOutlinedInput-notchedOutline':{
            //     borderColor:theme.palette.primary.main
            //   },
            // },
            '& fieldset':{
              borderWidth:'0.5px !important'
            },
            '&:hover fieldset':{
              borderWidth:'1px !important'
            },
            '&.Mui-focused fieldset':{
              borderWidth:'1px !important'
            }
          })
      },
    },
  }
  // ...other properties
});
export default theme;
