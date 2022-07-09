import { ThemeProvider } from "@mui/material"
import AppRoutes from "./routes/routes"
import { LightTheme } from "./shared/themes"

function App() {

  return (
    
    <ThemeProvider theme={LightTheme}>
       <AppRoutes />
    </ThemeProvider>
    
  )

}

export default App
