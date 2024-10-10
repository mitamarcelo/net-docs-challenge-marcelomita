import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import { ThemeProvider } from "styled-components";
import { store } from "./store";
import App from "./App";
import * as Styled from "./styles/globalStyles";

const theme = {
  colors: {
    primary: "#4CAF50",
    secondary: "#45a049",
    background: "#f0f0f0",
    text: "#333",
  },
};

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <Styled.GlobalStyle />
        <App />
      </ThemeProvider>
    </Provider>
  </React.StrictMode>
);
