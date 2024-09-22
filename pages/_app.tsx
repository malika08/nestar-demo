import { CssBaseline } from "@mui/material";
import { light } from "../scsss/MaterialTheme";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import type { AppProps } from "next/app";
import { useState } from "react";
import { ApolloProvider } from "@apollo/client";
import client from "@/apollo/client";
import "../scsss/app.scss";
import "../scsss/pc/main.scss";
import "../scsss/mobile/main.scss";

export default function App({ Component, pageProps }: AppProps) {
  // @ts-ignore
  const [theme, setTheme] = useState(createTheme(light));

  //Socket.io, Redux
  return (
    <ApolloProvider client={client}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Component {...pageProps} />;
      </ThemeProvider>
    </ApolloProvider>
  );
}
