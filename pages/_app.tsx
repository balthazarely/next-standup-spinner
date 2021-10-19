import "../styles/globals.scss";
import type { AppProps } from "next/app";
import { Layout } from "../src/components/Layout/Layout";
import { Navbar } from "../src/components/Navigation/Navbar";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Layout>
      <Navbar />
      <Component {...pageProps} />
    </Layout>
  );
}
export default MyApp;
