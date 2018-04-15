import { configure } from "@storybook/react";

function loadStories() {
  // require("../stories/index.js");
  // You can require as many stories as you need.
  require("../src/components/Button/Button.stories.js");
}

configure(loadStories, module);
