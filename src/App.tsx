import { Box, CssBaseline, PaletteMode} from "@mui/material";
import { useState } from "react";
import { ThemeProvider, createTheme } from '@mui/material/styles';
import AppBar from "./components/AppBar";
import CencusSection from "./components/CensusSection";

function App() {
    const [mode, setMode] = useState<PaletteMode>('light');
    const defaultTheme = createTheme({ palette: { 
        mode, 
        primary: {
            main: '#56C9A2',
            contrastText: '#fff',
            50: '#E0F7EF',
            100: '#B3EAD9',
            200: '#80DDBF',
            300: '#4DCFA5',
            400: '#26C293',
            500: '#00B380',
            600: '#00A974',
            700: '#009F6A',
            800: '#009560',
            900: '#00874D',
        },
    } });

  const toggleColorMode = () => {
    setMode((prev) => (prev === 'dark' ? 'light' : 'dark'));
  };

    return (
        <ThemeProvider theme={defaultTheme}>
            <CssBaseline />
            <AppBar mode={mode} toggleColorMode={toggleColorMode} />
            <Box sx={{ bgcolor: 'background.default' }}>
                <CencusSection />
            </Box>
        </ThemeProvider>
    );
}

export default App;
