import React from 'react';
import { ThemeProvider } from "styled-components";
import dark from "../../../styles/themes/dark";
import { Meta } from '@storybook/react/types-6-0';

import Aside from '../../../components/Aside';

export default {
  title: 'Components/Aside',
  component: Aside,
} as Meta;

export const Default = () => (
  <ThemeProvider theme={dark}>
    <Aside />
  </ThemeProvider>
)
