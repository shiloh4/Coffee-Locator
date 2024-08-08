import { createTheme } from '@mui/material/styles';

const lightTheme = createTheme({
    palette: {
      mode: 'light',
      primary: {
        main: '#008080', // teal
      },
      secondary: {
        main: '#F0F0F0', // off-white
      },
      accent: {
        main: '#FF6F61', // coral
      },
      background: {
        default: '#FFFFFF', // White
        paper: '#F5F5F5',
      },
      text: {
        primary: '#444444',
      },
      link: {
        primary: '#003057',
      },
    },
    typography: {
      fontFamily: 'Roboto, sans-serif',
      h1: {
        fontFamily: 'Open Sans, sans-serif',
      },
      h2: {
          fontFamily: 'Open Sans, sans-serif',
      },
          // You can customize other variants as needed
    },
    components: {
      MuiAccordionSummary: {
        styleOverrides: {
          root: {
            backgroundColor: '#ACACAC'
          }
        }
      },
      MuiAccordionDetails: {
        styleOverrides: {
          root: {
            backgroundColor: '#FFFFFF',
          }
        }
      },
      MuiAppBar: {
        styleOverrides: {
          root: {
            backgroundColor: '#1C1C1C', // Custom background color for Paper
          },
        },
      },
      MuiIcon: {
        styleOverrides: {
          root: {
            primary: 'black',
          }
        }
      }
    },
  });
  
  const darkTheme = createTheme({
    palette: {
      mode: 'dark',
      primary: {
        main: '#008080', // teal
      },
      secondary: {
        main: '#333333', // Dark gray
      },
      accent: {
        main: '#FF6F61', // coral
      },
      background: {
        default: '#121212', // Dark Navy
        paper: '#121212',
      },
      text: {
        primary: '#E0E0E0', // off-white
      },
      link: {
        primary: '#61dafb',
      },
    },
    typography: {
      fontFamily: 'Roboto, sans-serif',
      h1: {
        fontFamily: 'Open Sans, sans-serif',
      },
      h2: {
          fontFamily: 'Open Sans, sans-serif',
      },
          // You can customize other variants as needed
    },
    components: {
      MuiAccordionSummary: {
        styleOverrides: {
          root: {
            backgroundColor: '#707070'
          }
        }
      },
      MuiAccordionDetails: {
        styleOverrides: {
          root: {
            backgroundColor: '#1C1C1C',
          }
        }
      },
      MuiAppBar: {
        styleOverrides: {
          root: {
            backgroundColor: '#1C1C1C', // Custom background color for Paper
          },
        },
      },
      MuiIcon: {
        styleOverrides: {
          root: {
            primary: 'white',
          }
        }
      },
    },
  });
  
  export { lightTheme, darkTheme };