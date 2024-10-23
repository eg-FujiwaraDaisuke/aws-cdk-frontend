import CssBaseline from '@mui/material/CssBaseline';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { AppProps } from 'next/app';
import * as React from 'react';
import themeConfig from './themeConfig';

const theme = createTheme({
    palette: {
      primary: {
        main: themeConfig.primaryColor,
      },
      secondary: {
        main: themeConfig.secondaryColor,
      },
      background: {
        default: themeConfig.backgroundColor,
      },
      text: {
        primary: themeConfig.textColor.primary,
        secondary: themeConfig.textColor.secondary,
      },
    },
});

const AwsCdkFrontApp = ({ Component, pageProps }: AppProps) => {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Component {...pageProps} />
    </ThemeProvider>
  );
};

export default AwsCdkFrontApp;
