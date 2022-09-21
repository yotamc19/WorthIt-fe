import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { ChakraProvider } from "@chakra-ui/react";
import BigContextProvider from "./contexts/BigContexts";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <ChakraProvider>
    <BigContextProvider>
      <App />
    </BigContextProvider>
  </ChakraProvider>
);
