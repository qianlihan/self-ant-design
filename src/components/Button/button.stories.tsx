import React from "react";
import { storiesOf } from "@storybook/react";
import { withInfo } from "@storybook/addon-info";
import { action } from "@storybook/addon-actions";

import Button, { ButtonSize, ButtonType } from "./button";

const defaultButton = () => (
  <Button onClick={action("clicked")}> default button </Button>
);

const buttonWithSize = () => (
  <>
    <Button autoFocus>Hello</Button>
    <Button size={ButtonSize.Large}>Large</Button>
    <Button size={ButtonSize.Small}>Small</Button>
  </>
);

const buttonWithType = () => (
  <>
    <Button btnType={ButtonType.Primary}> primary button </Button>
    <Button btnType={ButtonType.Danger}> danger button </Button>
    <Button btnType={ButtonType.Link} href="https://google.com">
      {" "}
      link button{" "}
    </Button>
  </>
);
storiesOf("Button", module)
  .add("Default", defaultButton)
  .add("Different sizes", buttonWithSize)
  .add("Different types", buttonWithType);
