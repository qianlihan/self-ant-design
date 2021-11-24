import React from "react";
import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";
import { Input } from "./input";
const defaultInput = () => (
  <Input placeholder="Input" onChange={action("changed")} />
);
const disabledInput = () => <Input placeholder="disabled input" disabled />;

const iconInput = () => <Input placeholder="input with icon" icon="search" />;

const sizeInput = () => (
  <>
    <Input defaultValue="large size" size="lg" />
    <Input defaultValue="small size" size="sm" />
  </>
);

const pandInput = () => (
  <>
    <Input defaultValue="prepend text" prepend="https://" />
    <Input defaultValue="google" append=".com" />
  </>
);

storiesOf("Input", module)
  .add("Input", defaultInput)
  .add("Disabled Input", disabledInput)
  .add("Input w/ Icons", iconInput)
  .add("Differen sizes", sizeInput)
  .add("Suffix", pandInput);
