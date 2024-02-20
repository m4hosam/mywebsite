import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './Components/App';
import { createTheme, ThemeProvider } from '@mui/material/styles';
const theme = createTheme({
  typography: {
    fontFamily: [
      '"JetBrains Mono"',
      'monospace',
      '"Segoe UI"',
      'Roboto',
    ].join(','),
  },
});

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <ThemeProvider theme={theme}>
    <App />
  </ThemeProvider>
);

