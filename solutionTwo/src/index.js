import "@fontsource/dm-sans/400.css";
import "@fontsource/dm-sans/500.css";
import "@fontsource/dm-sans/700.css";
import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { ChakraProvider } from "@chakra-ui/react";
import { Toaster } from "react-hot-toast";
import theme from "./theme";
import { PersistGate } from "redux-persist/integration/react";
import { persistStore } from "redux-persist"; 
import configureStore from "./redux/configureStore";
import { Provider } from "react-redux";

const store = configureStore();

const persistor = persistStore(store);

ReactDOM.render(
  <React.StrictMode>
    <ChakraProvider theme={theme}>
      <Provider store={store}>
        <PersistGate persistor={persistor}>
          <App />
        </PersistGate>
        <Toaster />
      </Provider>
    </ChakraProvider>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
