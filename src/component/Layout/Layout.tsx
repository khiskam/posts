import CssBaseline from "@mui/material/CssBaseline";
import { FC, PropsWithChildren } from "react";

import Footer from "../Footer";
import Header from "../Header";
import MessageProvider from "../MessageProvider";
import { Container, Main, Stack } from "./styles";

const Layout: FC<PropsWithChildren> = ({ children }) => {
  return (
    <>
      <CssBaseline />
      <MessageProvider />
      <Stack>
        <Header />
        <Container>
          <Main>{children}</Main>
        </Container>
        <Footer />
      </Stack>
    </>
  );
};

export default Layout;
