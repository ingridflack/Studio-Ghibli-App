import type { AppProps } from "next/app";
import { ThemeProvider } from "styled-components";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import theme from "../styles/theme";
import { GlobalStyle } from "../styles/global";
import { FavoriteProvider } from "../hooks/useFavorite";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={theme}>
      <FavoriteProvider>
        <GlobalStyle />

        <Component {...pageProps} />
        <ToastContainer limit={6} autoClose={3000} />
      </FavoriteProvider>
    </ThemeProvider>
  );
}

export default MyApp;
