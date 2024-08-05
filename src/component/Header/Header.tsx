import Container from "@mui/material/Container";
import MuiLink from "@mui/material/Link";
import Link from "next/link";

import { Box, Stack } from "./styles";

const Header = () => {
  return (
    <Box component="header">
      <Container>
        <Stack direction="row">
          <MuiLink href="/" component={Link} underline="none">
            POSTS
          </MuiLink>

          <MuiLink href="/" component={Link} underline="none">
            Посты
          </MuiLink>
        </Stack>
      </Container>
    </Box>
  );
};

export default Header;
