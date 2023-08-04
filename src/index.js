import React from 'react';
import { createRoot } from 'react-dom/client';
import { ThemeProvider, createTheme } from '@mui/material';

import './index.css';
import App from './components/App';

const theme = createTheme({
  palette: {
    primary: {
      main: '#660066',
    },
    secondary: {
      main: '#66CCFF',
    },
  },
});

const root = document.getElementById('root');
const rootRender = createRoot(root);
rootRender.render(
  <ThemeProvider theme={theme}>
    <App />
  </ThemeProvider>
);
