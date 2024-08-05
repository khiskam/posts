"use client";

import { styled } from "@mui/system";

export const Stack = styled("div")(() => ({
  display: "flex",
  flexDirection: "column",
  minHeight: "100vh",
}));

export const Container = styled("div")(() => ({
  minHeight: "100%",
  flexGrow: 1,
  display: "grid",
}));

export const Main = styled("main")(({ theme }) => ({
  margin: `${theme.spacing(8)} 0`,
}));
