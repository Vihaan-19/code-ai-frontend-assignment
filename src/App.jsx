import { Dashboard } from "./pages/Dashboard";
import { Signin } from "./pages/Signin";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { CssBaseline, GlobalStyles } from "@mui/material";
function App() {
  return (
    <>
          {/* Global CSS Reset */}
          <CssBaseline />
      <GlobalStyles
        styles={{
          body: {
            margin: 0,
            padding: 0,
            boxSizing: "border-box",
          },
          "*": {
            margin: 0,
            padding: 0,
            boxSizing: "border-box",
          },
        }}
      />
      <BrowserRouter>
        <Routes>
          <Route path="/signin" element={<Signin />} />
          <Route path="/dashboard" element={<Dashboard />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
