import "./App.css";
import Routes from "./routes";
import * as React from "react";
import CssBaseline from "@mui/material/CssBaseline";
import { ThemeProvider} from "@mui/material/styles";
import {DarkTheme} from "./themes";
import GlobalStyle from "./styles/global";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";


function App() {
  
  
  return (
    <>
    <CssBaseline />
    <GlobalStyle/>
    <ThemeProvider theme={DarkTheme}> 
      <Routes />
    </ThemeProvider>
    </>
  );
}

export default App;