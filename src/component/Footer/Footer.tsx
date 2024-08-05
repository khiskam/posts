import Container from "@mui/material/Container";
import MuiLink from "@mui/material/Link";
import Typography from "@mui/material/Typography";
import Link from "next/link";

import { Box, Stack } from "./styles";

const Footer = () => {
  return (
    <Box component="footer">
      <Container>
        <Stack direction="row">
          <MuiLink href="/" component={Link} underline="none">
            ЛОГОТИП
          </MuiLink>
          <Typography>© ЛОГОТИП</Typography>
        </Stack>
      </Container>
    </Box>
  );
};

export default Footer;
