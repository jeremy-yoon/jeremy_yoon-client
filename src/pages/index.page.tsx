import React, { useState, lazy, Suspense } from "react";
import { Sv } from "components";
import HomeMainContainer from "pages/home/HomeMainContainer";
import dynamic from "next/dynamic";
import Head from "next/head";
import BlogScreen from "pages/blog/index.page";

export default function Home() {
  // const RateStar = dynamic(() => import("../components/buttons/RateStar"), {
  //   suspense: true,
  // });

  return (
    <Sv col f={1}>
      <BlogScreen />
      {/* <HomeMainContainer /> */}
    </Sv>
  );
}
