import React from "react";

import { Container, ToggleLabel, ToogleSelector } from "./styles";

const Toggle: React.FC = () => (
  <Container>
    <ToggleLabel>Light</ToggleLabel>
    <ToogleSelector
      checked
      onChange={() => {}}
      checkedIcon={false}
      uncheckedIcon={false}
    />
    <ToggleLabel>Dark</ToggleLabel>
  </Container>
);

export default Toggle;
