import {
    BrowserRouter,
    Route,
    Routes,
    Navigate
  } from "react-router-dom";

  import { Home } from "../pages/home";

  export default function AppRoutes() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="*" element={<Navigate to="/" />} />
            </Routes>
        </BrowserRouter>
    )

  } 