import React, { useMemo } from "react";
import emojis from "../../utils/emojis";
import { Container, Profile, Welcome, Username } from "./styles";

import Toggle from "../Toggle";

const Header: React.FC = () => {
  const emoji = useMemo(() => {
    const index = Math.floor(Math.random() * emojis.length);
    return emojis[index];
  }, []);

  return (
    <Container>
      <Toggle />

      <Profile>
        <Welcome> Olá, {emoji}</Welcome>
        <Username>Caio Gomes</Username>
      </Profile>
    </Container>
  );
};

export default Header;
