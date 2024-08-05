"use client";

import { createTheme } from "@mui/material/styles";
import { Nunito } from "next/font/google";

const nunito = Nunito({
  weight: ["400", "500"],
  subsets: ["latin", "cyrillic"],
});

export const theme = createTheme({
  palette: {
    primary: { main: "#4169E1" },
    secondary: { main: "#FF6A33" },
    text: { primary: "#42567A" },
  },
  typography: {
    fontFamily: nunito.style.fontFamily,
    h1: {
      fontSize: "2rem",
    },
    h2: {
      fontSize: "1.5rem",
    },
  },
});
