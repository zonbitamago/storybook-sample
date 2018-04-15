import React from "react";
import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";
// import { withNotes } from "@storybook/addon-notes";
import Button from "./Button";

storiesOf("Basic Button", module)
  .add("with text", () => (
    <Button onClick={action("clicked")}>Hello Button</Button>
  ))
  .add("with some emoji", () => (
    <Button onClick={action("clicked")}>
      <span role="img" aria-label="so cool">
        😀 😎 👍 💯
      </span>
    </Button>
  ));

storiesOf("Center Button", module)
  .addDecorator(story => <div style={{ textAlign: "center" }}>{story()}</div>)
  .add("with text", () => (
    <Button onClick={action("clicked")}>Hello Button</Button>
  ))
  .add("with some emoji", () => (
    <Button onClick={action("clicked")}>
      <span role="img" aria-label="so cool">
        😀 😎 👍 💯
      </span>
    </Button>
  ));

// storiesOf("Button with Markdown", module).add(
//   "with Markdown",
//   withNotes("#sample markdown")(() => (
//     <Button onClick={action("clicked")}>Hello Button</Button>
//   ))
// );

storiesOf("Nesting/Button/Text", module).add("with text", () => (
  <Button onClick={action("clicked")}>Hello Button</Button>
));

storiesOf("Nesting/Button/Emoji", module).add("with some emoji", () => (
  <Button onClick={action("clicked")}>
    <span role="img" aria-label="so cool">
      😀 😎 👍 💯
    </span>
  </Button>
));
