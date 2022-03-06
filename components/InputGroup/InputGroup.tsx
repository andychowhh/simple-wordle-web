import React from "react";

import Input from "@/components/Input/Input";

import styles from "./input-group.module.scss";

function InputGroup(): JSX.Element {
  return (
    <form>
      <div className={styles.input__group}>
        <Input key={1} id={1} value="1" setValue={() => {}} />
        <Input key={2} id={2} value="1" setValue={() => {}} />
        <Input key={3} id={3} value="1" setValue={() => {}} />
        <Input key={4} id={4} value="1" setValue={() => {}} />
        <Input key={5} id={5} value="1" setValue={() => {}} />
      </div>
    </form>
  );
}

export default InputGroup;
