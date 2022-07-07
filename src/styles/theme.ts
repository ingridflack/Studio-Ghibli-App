const theme = {
  colors: {
    background: "#000",

    gray: {
      white: "#f6f6f6",
      platinum: "#e1e1e6",
      silver: "#a8a8b3",
      lightGray: "#7b8c98",
      dark: "#141414",
    },

    primary: "#e50914",
    secondary: "#b20710",
  },
  fontSize: {
    tiny: "0.65rem",
    small: "0.75rem",
    medium: "0.875rem",
    normal: "1rem",
    large: "1.5rem",
  },
} as const;

export type Theme = typeof theme;

export default theme;
