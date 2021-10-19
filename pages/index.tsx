import type { NextPage } from "next";
import Link from "next/link";
import Head from "next/head";
import { SpinnerWrapper } from "../src/components/Spinner/SpinnerWrapper";

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Wheel Of Standup</title>
        <meta name="description" content="The Wheel Of Standup" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className=""></main>
    </div>
  );
};

export default Home;
