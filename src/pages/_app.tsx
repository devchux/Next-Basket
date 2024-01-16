import Layout from "@/layouts";
import "@/styles/globals.css";
import { ThemeProvider } from "@emotion/react";
import type { AppProps } from "next/app";
import { theme } from "../../theme";
import { GlobalStyles } from "@mui/material";
import { Provider } from "react-redux";
import { persistor, store } from "@/store";
import { PersistGate } from "redux-persist/integration/react";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <ThemeProvider theme={theme}>
          <GlobalStyles
            styles={{
              "*": {
                margin: 0,
                padding: 0,
                boxSizing: "border-box",
              },
              a: {
                textDecoration: "none",
              },
            }}
          />
          <Layout>
            <Component {...pageProps} />
          </Layout>
        </ThemeProvider>
      </PersistGate>
    </Provider>
  );
}
