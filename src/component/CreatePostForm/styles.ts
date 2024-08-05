"use client";

import MuiBox, { BoxProps } from "@mui/material/Box";
import { styled } from "@mui/system";

export const Box = styled(MuiBox)<BoxProps>(({ theme }) => ({
  display: "grid",
  justifyItems: "start",
  gap: theme.spacing(2),
}));
