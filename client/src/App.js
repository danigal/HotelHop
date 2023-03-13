import { BrowserRouter, Navigate, Routes, Route } from "react-router-dom";

import Layout from "layouts/Main";
import HomePage from "pages/HomePage";
import LoginPage from "pages/LoginPage";
//import ProfilePage from "scenes/profilePage";
import { useMemo } from "react"; // the useMemo hook is used to memoize the result of a function
import { useSelector } from "react-redux"; // the useSelector hook is used to access the state of the store
import { CssBaseline, ThemeProvider } from "@mui/material";
import { createTheme } from "@mui/material/styles";
import { themeSettings } from "./theme";
import AddScenesPage from "pages/AddScenesPage";

function App() {
  const mode = useSelector((state) => state.mode); // we grab the mode from the state
  const theme = useMemo(() => createTheme(themeSettings(mode)), [mode]);
  const isAuth = Boolean(useSelector((state) => state.token));

  return (
    <div className="app">
      <BrowserRouter>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <Routes>
            <Route path="/" element={<LoginPage />} />
            <Route element={<Layout />}>
              {/* Any route within this component it will have the layout component
            as his main parent so we can have the navbar existing in every single page */}
              <Route
                path="/home"
                element={isAuth ? <HomePage /> : <Navigate to="/" />}
              />
              < Route
                path="/scenes/:scenarioId" 
                element={isAuth ? <AddScenesPage /> : <Navigate to = "/" />}
              />
            </Route>
            <Route
              path="/scenes/:sceneId/view"           
            >

            </Route>

            {/* <Route path= "/scenarios" element= {<HomePage />} />
            <Route
              path="/profile/:userId"
              element={isAuth ? <ProfilePage /> : <Navigate to="/" />}
            /> */}
          </Routes>
        </ThemeProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;
