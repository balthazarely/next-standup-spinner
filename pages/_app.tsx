import { useState } from "react";
import { AnimatePresence, domAnimation, LazyMotion, m } from "framer-motion";
import type { AppProps } from "next/app";
import { Layout } from "../src/components/Layout/Layout";
import { Navbar } from "../src/components/Navigation/Navbar";
import "../styles/globals.scss";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Layout>
      <Navbar />
      <Component {...pageProps} />
    </Layout>
  );
}
export default MyApp;
