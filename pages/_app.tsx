import "../styles/globals.css";
import type { AppProps } from "next/app";

import Head from "next/head";

function MyApp({ Component, pageProps }: AppProps) {
  console.log = function () {};
  return (
    <>
      <Head>
        <title>Simple Wordle Web</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta
          name="description"
          content="Simple Wordle Web is a clone project of a word guessing game. Do you want to play it infinitely? Here you are."
        />
        <meta name="keywords" content="wordle, word-guess" />
        <meta name="og:title" content="Simple Wordle Web" />
        <meta
          name="og:description"
          content="Simple Wordle Web is a clone project of a word guessing game. Do you want to play it infinitely? Here you are."
        />
      </Head>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
