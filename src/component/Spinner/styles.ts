"use client";

import MuiBox, { BoxProps } from "@mui/material/Box";
import { styled } from "@mui/system";

export const Box = styled(MuiBox)<BoxProps>(() => ({
  display: "grid",
  alignItems: "center",
  justifyContent: "center",
  height: "100%",
}));
