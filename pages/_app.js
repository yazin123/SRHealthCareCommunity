import { Fragment } from "react";
import Head from "next/head";
import "./global.css";

function MyApp({ Component, pageProps }) {
  return (
    <Fragment>
      <Head>
        <title>SR First Aid Healthcare Pvt Ltd - Healthcare Consultancy</title>
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width"
        />
        <meta name="description" content="SR First Aid Healthcare Pvt Ltd provides healthcare consultancy services, combining medical, financial, architectural, and technological expertise to create tailored solutions for healthcare facilities." />
        <meta name="keywords" content="healthcare consultancy, healthcare strategy, medical facility planning, healthcare facility experts, healthcare operations, multidisciplinary healthcare team, healthcare solutions, facility planning, operational experts" />
        <meta name="robots" content="index, follow" />
        <meta property="og:title" content="SR First Aid Healthcare Pvt Ltd - Healthcare Consultancy" />
        <meta property="og:description" content="SR First Aid Healthcare Pvt Ltd provides expert healthcare consultancy, offering innovative solutions for healthcare facilities through a multidisciplinary team of strategists and operational experts." />
        <meta property="og:image" content="/sr-hc-logo01-1@2x.png" />
        <meta property="og:url" content="https://www.srhealthcarecommunity.com" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="SR First Aid Healthcare Pvt Ltd - Healthcare Consultancy" />
        <meta name="twitter:description" content="SR First Aid Healthcare Pvt Ltd offers customized healthcare solutions through a team of healthcare strategists, facility planners, and operational experts." />
        <meta name="twitter:image" content="/sr-hc-logo01-1@2x.png" />
        <link rel="shortcut icon" href="/sr-hc-logo01-1@2x.png" type="image/x-icon" />
      </Head>
      <Component {...pageProps} />
    </Fragment>
  );
}

export default MyApp;
