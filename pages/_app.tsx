import CssBaseline from '@mui/material/CssBaseline';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { AppProps } from 'next/app';
import * as React from 'react';
import themeConfig from './themeConfig';
import { configureAmplify } from '../configureAmplify';
import { Environment } from '../utils/context';

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

// 環境を決定するロジック
const environment: Environment = process.env.NEXT_PUBLIC_ENVIRONMENT as Environment || 'dev';

// Amplify の設定を行う
configureAmplify(environment);

const AwsCdkFrontApp = ({ Component, pageProps }: AppProps) => {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Component {...pageProps} />
    </ThemeProvider>
  );
};

export default AwsCdkFrontApp;
