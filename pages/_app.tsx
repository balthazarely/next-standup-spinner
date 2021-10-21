import { useState } from "react";
import type { AppProps } from "next/app";
import { Layout } from "../src/components/Layout/Layout";
import { Navbar } from "../src/components/Navigation/Navbar";
import "../styles/globals.scss";
import SettingsContext from "../src/context/SettingsContext";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <SettingsContext>
      <Layout>
        <Navbar />
        <Component {...pageProps} />
      </Layout>
    </SettingsContext>
  );
}
export default MyApp;
