"use client";

import { Button, createTheme } from "@mantine/core";

export const theme = createTheme({
  colors: {
    primary: [
      "#feb1a2",
      "#fea18f",
      "#FC8472",
      "#FC6E58",
      "#FD6244",
      "#e4583d",
      "#ca4e36",
      "#b1442e",
      "#973a26",
      "#7d301e",
    ],
    secondary: [
      "#999999",
      "#858585",
      "#777777",
      "#5c5c5c",
      "#474747",
      "#333333",
      "#2e2e2e",
      "#292929",
      "#242424",
      "#1E1E1E",
    ],
  },
  components: {
    Button: Button.extend({
      defaultProps: {
        color: "primary.5",
        variant: "filled",
        radius: "md",
      },
      styles: () => ({
        root: {
          height: "50px",
          transition: "all 0.3s",
        },
      }),
    }),
  },
});
