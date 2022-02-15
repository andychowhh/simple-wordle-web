import { useState } from "react";

import type { NextPage } from "next";

import { HStack, PinInput, PinInputField } from "@chakra-ui/react";

import InputFieldGroup from "../components/InputFieldGroup/InputFieldGroup";

const Home: NextPage = () => {
  return (
    <>
      <HStack>
        <InputFieldGroup />
      </HStack>
      <HStack>
        <PinInput type="alphanumeric">
          <PinInputField />
          <PinInputField />
        </PinInput>
      </HStack>
    </>
  );
};

export default Home;
