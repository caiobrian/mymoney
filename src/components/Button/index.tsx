import React from "react";

import { Button } from "./styles";

interface IButtonProps {
  children: string;
}

const ButtonComponent: React.FC<IButtonProps> = ({
  children
}) => {
  return <Button>{children}</Button>
}

export default ButtonComponent
