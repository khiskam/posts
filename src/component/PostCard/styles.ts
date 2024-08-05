import MuiCard from "@mui/material/Card";
import MuiCardContent from "@mui/material/CardContent";
import MuiTypography, { TypographyProps } from "@mui/material/Typography";
import { styled } from "@mui/system";

export const Card = styled(MuiCard)(() => ({
  height: "100%",
  display: "grid",
  gridTemplateRows: "1fr auto",
}));

export const CardContent = styled(MuiCardContent)(() => ({
  display: "flex",
  flexDirection: "column",
  alignItems: "stretch",
  overflow: "hidden",
}));

export const CardBody = styled(MuiTypography)<TypographyProps>(() => ({
  flexGrow: 1,
}));
