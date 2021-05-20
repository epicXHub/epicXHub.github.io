import React from "react";
import Head from "next/head";

export default function Include({ title, desc }) {
  const mTitle = title.charAt(0).toUpperCase() + title.slice(1);
  return (
    <Head>
      <title>{mTitle}</title>
      <meta name="description" content={desc} />
      <link rel="icon" href="/favicon.ico" />
      <link
        href="https://cdn.jsdelivr.net/npm/remixicon@2.5.0/fonts/remixicon.css"
        rel="stylesheet"
      />
    </Head>
  );
}
