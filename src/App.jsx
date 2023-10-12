import Sidebar from "./components/Sidebar";
import FeedContainer from './components/FeedContainer'
import Rightbar from "./components/Rightbar";
import { Box, Stack, createTheme } from "@mui/material";
import Navbar from "./components/Navbar";
import Add from './components/Add';
import { useState } from "react";
import { ThemeProvider } from "@emotion/react";

function App() {
  const [mode,setMode] = useState("light")

  const darkTheme = createTheme({
    palette:{
      mode: mode,
    }
  })
  return (
    <ThemeProvider theme={darkTheme}>
    <Box bgcolor={"background.default"} color={"text.primary"}>
      <Navbar/>
      <Stack direction="row" spacing={2} justifyContent="space-between">
        <Sidebar mode={mode} setMode={setMode} />
        <FeedContainer/>
        <Rightbar />
      </Stack>
      <Add/>
    </Box>

    </ThemeProvider>
  );
}

export default App;
