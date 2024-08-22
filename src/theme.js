import { createTheme } from '@mui/material/styles';

const lightTheme = createTheme({
    palette: {
      primary: {
        main: '#D2B48C', // cream beige
      },
      secondary: {
        main: '#6F4E37', // coffee brown
      },
      accent: {
        primary: '#3B2F2F', // espresso dark
        secondary: '#D2691E', // cinnamon
        tertiary: '#F5F5DC', // sugar white
      },
      background: {
        default: '#FFFFFF', // White
        paper: '#F5F5F5',
      },
      text: {
        primary: '#3B2F2F', // espresso dark
        secondary: '#6F4E37', // coffee brown
        accent: '#D2691E', // cinnamon
        background: '#F5F5DC', // sugar white
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
      primary: {
        main: '#6F4E37', // coffee brown
        light: '#6F4E37', // coffee brown
        dark: '#6F4E37', // coffee brown
      },
      secondary: {
        main: '#D2B48C', // cream beige
      },
      accent: {
        primary: '#3B2F2F', // espresso dark
        secondary: '#D2691E', // cinnamon
        tertiary: '#F5F5DC', // sugar white
      },
      background: {
        default: '#FFFFFF', // White
        paper: '#F5F5F5',
      },
      text: {
        primary: '#F5F5DC', // sugar white
        secondary: '#D2B48C', // cream beige
        accent: '#D2691E', // cinnamon
        background: '#3B2F2F' // espresso dark
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