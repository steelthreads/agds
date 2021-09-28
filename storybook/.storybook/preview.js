import React from "react";
import { addDecorator } from "@storybook/react";
import { AgdsDecorator } from './decorators';

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    expanded: true,
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
}

addDecorator(AgdsDecorator);
