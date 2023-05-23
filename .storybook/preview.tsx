import type { Preview } from "@storybook/react";
import store from "../src/redux/store"
import { Provider } from "react-redux";
import React from "react";

const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: "^on[A-Z].*" },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
  },
};

export const decorators = [
  (StoryComponent: typeof React.Component) => (
    <Provider store={store}>
      <StoryComponent />
    </Provider>
  ),
];

export default preview;
