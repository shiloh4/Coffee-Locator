import logo from './logo.svg';
import Box from '@mui/material/Box';
import Navbar from './Components/navbar.js';
import HomePage from './Pages/HomePage.js';
import { useTheme, useMediaQuery } from '@mui/material';
import { ThemeContextProvider } from './themeContextProvider';
import { darkTheme, lightTheme } from './theme'; // Import your custom theme
import './App.css';

function App() {
  const theme = useTheme();

  return (
    <div className="App">
    <ThemeContextProvider theme={lightTheme}>
      <Navbar />
      {/* <Box sx={{ height: '10%' }}/> */}
      <HomePage />
    </ThemeContextProvider>
    </div>
  );
}

export default App;
