import React from "react";
import { BrowserRouter } from "react-router-dom";
import { ColorsProvider } from "./Context/Context";
import Routes from "./routes";
import GlobalStyles from "./Styles/globalStyles.jsx";

function App() {
  return (
    <>
      <BrowserRouter>
        <ColorsProvider>
          <GlobalStyles />
          <Routes />
        </ColorsProvider>
      </BrowserRouter>
    </>
  );
}

export default App;
