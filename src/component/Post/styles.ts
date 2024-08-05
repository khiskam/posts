"use client";

import MuiBox, { BoxProps } from "@mui/material/Box";
import { styled } from "@mui/system";

export const Box = styled(MuiBox)<BoxProps>(({ theme }) => ({
  position: "relative",
  width: "100%",
  height: "400px",

  [theme.breakpoints.only("sm")]: {
    width: "60%",
    height: "300px",
  },

  [theme.breakpoints.only("xs")]: {
    width: "100%",
  },
}));
