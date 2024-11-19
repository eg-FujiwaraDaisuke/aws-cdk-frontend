import CssBaseline from '@mui/material/CssBaseline';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { AppProps } from 'next/app';
import * as React from 'react';
import themeConfig from './themeConfig';
import { configureAmplify } from '../configureAmplify';
import { Environment } from '../utils/environment';

const theme = createTheme({
    palette: {
      primary: {
        main: themeConfig.primaryColor,
        contrastText: '#ffffff', // 文字色を白に指定
      },
      secondary: {
        main: themeConfig.secondaryColor,
        contrastText: '#ffffff',
      },
      background: {
        default: themeConfig.backgroundColor,
      },
      text: {
        primary: themeConfig.textColor.primary,
        secondary: themeConfig.textColor.secondary,
      },
      error: {
        main: themeConfig.errorColor,
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
