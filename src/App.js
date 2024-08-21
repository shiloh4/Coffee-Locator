import logo from './logo.svg';
import Navbar from './Components/navbar.js';
import { ThemeContextProvider } from './themeContextProvider';
import { darkTheme, lightTheme } from './theme'; // Import your custom theme
import './App.css';

function App() {
  return (
    <ThemeContextProvider theme={lightTheme}>
      <Navbar />
    </ThemeContextProvider>
  );
}

export default App;
