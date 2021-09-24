import React from "react";
// there is an open issue about this
import { ThemeProvider } from "emotion-theming";
import { theme } from "@ag.ds/theme";

export const decorators = [
  (Story, context) => {
    return (
      <ThemeProvider theme={theme}>
        <Story />
      </ThemeProvider>
    );
  },
];
export const parameters = {
  controls: { expanded: true },
};
