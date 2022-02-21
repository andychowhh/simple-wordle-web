import React, { useState } from "react";

import type { NextPage } from "next";

import Input from "@/components/InputGroup/Input";

import "@/styles/Home.module.scss";

const Home: NextPage = () => {
  return (
    <div className="container">
      <Input />
      <Input />
      <Input />
      <Input />
      <Input />
    </div>
  );
};

export default Home;
