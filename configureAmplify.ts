import { cognitoUserPoolsTokenProvider } from '@aws-amplify/auth/cognito';
import { Amplify } from 'aws-amplify';
import { sessionStorage } from 'aws-amplify/utils';
import { Environment } from './utils/environment';

/**
 * APIのエラー
 *
 * @export
 * @interface CognitoEnv
 */
export interface CognitoEnv {
  /** Auth */
  Auth: {
    /** Cognito */
    Cognito: {
      /** ユーザプールID */
      userPoolId: string,
      /** ユーザプールクライアントID */
      userPoolClientId: string,
      /** アイデンティティプールID */
      identityPoolId: string,
    },
  },
}

export const configureAmplify = (environment: Environment): void => {
  const baseConfig = {
    Auth: {
      Cognito: {
        loginWith: {
          email: true,
        },
        userAttributes: {
          email: {
            required: true,
          },
        },
      },
    },
  };

  let envConfig: CognitoEnv;
  switch (environment) {
    case 'stg':
      envConfig = {
        Auth: {
          Cognito: {
            userPoolId: 'stg-userPoolId',
            userPoolClientId: '123',
            identityPoolId: 'stg-identityPoolId',
          },
        },
      };
      break;
    case 'prd':
      envConfig = {
        Auth: {
          Cognito: {
            userPoolId: 'prd-userPoolId',
            userPoolClientId: '123',
            identityPoolId: 'prd-identityPoolId',
          },
        },
      };
      break;
    default:
      // その他は dev 環境とする
      envConfig = {
        Auth: {
          Cognito: {
            userPoolId: 'ap-northeast-1_Z0F1NdHfU',
            userPoolClientId: '6272o92pirbogh213ohf7lo8o0',
            identityPoolId: 'ap-northeast-1:3a135d8e-faec-45a5-aa02-438a9beb895d',
          },
        },
      };
      break;
  }

  Amplify.configure({
    ...baseConfig,
    ...envConfig,
  });

  cognitoUserPoolsTokenProvider.setKeyValueStorage(sessionStorage)
};
