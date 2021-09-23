import React from "react";
import { ThemeProvider } from "emotion-theming";
import { fonts } from "@ag.ds/theme";

console.log(fonts);

export const decorators = [
  (Story, context) => {
    return (
      <ThemeProvider theme={fonts}>
        <Story />
      </ThemeProvider>
    );
  },
];
export const parameters = {
  controls: { expanded: true },
};
