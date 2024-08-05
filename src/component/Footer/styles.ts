"use client";

import MuiBox, { BoxProps } from "@mui/material/Box";
import MuiStack, { StackProps } from "@mui/material/Stack";
import { styled } from "@mui/system";

export const Box = styled(MuiBox)<BoxProps>(({ theme }) => ({
  padding: `${theme.spacing(2)} 0`,
  borderTop: `1px solid ${theme.palette.grey[200]}`,
}));

export const Stack = styled(MuiStack)<StackProps>(() => ({
  justifyContent: "space-between",
  alignItems: "center",
}));
