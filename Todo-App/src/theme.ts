import { createTheme } from "@mui/material";

export const theme = createTheme({
  colors: {
    primary: "#4caf50", // Vibrant green for primary elements
    secondary: "#03a9f4", // Cool blue for secondary elements
    accent: "#ff9800", // Orange for accents
    error: "#f44336", // Red for errors
    warning: "#ffeb3b", // Yellow for warnings
    success: "#8bc34a", // Soft green for success
    background: {
      light: "#ffffff", // Light mode background
      dark: "#121212", // Dark mode background
    },
    text: {
      light: "#333333", // Text color for light mode
      dark: "#e0e0e0", // Text color for dark mode
    },
  },
  spacing: (factor: number) => `${factor * 8}px`, // Spacing utility (8px grid system)
  shadows: {
    light: "0px 2px 4px rgba(0, 0, 0, 0.1)",
    medium: "0px 4px 8px rgba(0, 0, 0, 0.15)",
    dark: "0px 6px 12px rgba(0, 0, 0, 0.2)",
  },
  borderRadius: {
    small: "4px",
    normal: "8px",
    large: "16px",
  },
});
