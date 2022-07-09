import { createTheme } from "@mui/material";
import { blue, red, yellow } from "@mui/material/colors";

export const LightTheme = createTheme({

    palette: {
        primary: {
            main: red[700],
            dark: red[800],
            light: red[500],
            contrastText: '#ffffffff',
        },
    
        secondary: {
            main: blue[500],
            dark: blue[400],
            light: blue[300],
            contrastText: '#ffffffff',
        },
        background: {
            paper: '#fff',
            default: '#848484',
        
        }
    }
   
});