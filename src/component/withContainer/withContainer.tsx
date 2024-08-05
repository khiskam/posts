import Container from "@mui/material/Container";
import { ComponentType } from "react";

const withContainer = <T extends {}>(Component: ComponentType<T>) => {
  const ComponentWithContainer = (props: T) => {
    return (
      <Container>
        <Component {...props} />
      </Container>
    );
  };

  return ComponentWithContainer;
};

export default withContainer;
