import React from 'react';
import { ThemeProvider } from "styled-components";
import dark from "../../../styles/themes/dark";
import { Meta } from '@storybook/react/types-6-0';

import Button from '../../../components/Button';

export default {
  title: 'Components/Button',
  component: Button,
} as Meta;

export const Default = () => (
  <ThemeProvider theme={dark}>
    <Button>Clica aqui</Button>
  </ThemeProvider>
)
