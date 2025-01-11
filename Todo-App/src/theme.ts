import { createTheme } from "@mui/material/styles";

export const theme = createTheme({
  palette: {
    mode: "dark", // Sets dark mode as the default
    primary: {
      main: "#4caf50", // Vibrant green for primary elements
    },
    secondary: {
      main: "#03a9f4", // Cool blue for secondary elements
    },
    error: {
      main: "#f44336", // Red for errors
    },
    warning: {
      main: "#ffeb3b", // Yellow for warnings
    },
    success: {
      main: "#8bc34a", // Soft green for success
    },
    background: {
      default: "#121212", // Dark mode background
      paper: "#1e1e1e", // Slightly lighter for surfaces like cards
    },
    text: {
      primary: "#e0e0e0", // Light text for dark background
      secondary: "#bdbdbd", // Dimmed text
    },
  },
  spacing: 8, // Base spacing unit (8px grid system)
  shape: {
    borderRadius: 8, // Default border-radius
  },
});
