import React, { useState } from "react";

import type { NextPage } from "next";

import InputGroup from "@/components/InputGroup/InputGroup";

import "@/styles/Home.module.scss";

const Home: NextPage = () => {
  return (
    <div className="container">
      <InputGroup/>
      <InputGroup/>
      <InputGroup/>
      <InputGroup/>
      <InputGroup/>
    </div>
  );
};

export default Home;
