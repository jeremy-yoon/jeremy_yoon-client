import React, { useState, lazy, Suspense } from "react";
import { Sv, DraggableSquare } from "components";
import BlogScreen from "pages/blog";
import HomeMainContainer from "pages/home/HomeMainContainer";
import dynamic from "next/dynamic";
import Head from "next/head";

export default function Home() {
  // const RateStar = dynamic(() => import("../components/buttons/RateStar"), {
  //   suspense: true,
  // });

  return (
    <Sv col f={1}>
      <Head>
        <link rel="icon" href="../public/favicon.ico" />
      </Head>
      <HomeMainContainer />
      {/* <div className="example-container">
        <DraggableSquare />
      </div> */}
      {/* <RateStar /> */}
      {/* <BlogScreen /> */}
    </Sv>
  );
}
