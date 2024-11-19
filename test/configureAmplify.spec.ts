import { cognitoUserPoolsTokenProvider } from '@aws-amplify/auth/cognito';
import { Amplify } from 'aws-amplify';
import { sessionStorage } from 'aws-amplify/utils';
import { beforeEach, afterEach, describe, expect, test, vi } from 'vitest';
import { configureAmplify } from '../configureAmplify';

vi.mock('aws-amplify', () => ({
  Amplify: {
    configure: vi.fn(),
  },
  sessionStorage: {},
}));

vi.mock('@aws-amplify/auth/cognito', () => ({
  cognitoUserPoolsTokenProvider: {
    setKeyValueStorage: vi.fn(),
  },
}));

describe.each`
    env      | expectedUserPoolClientId | expectedUserPoolId  | expectedIdentityPoolId
    ${'prd'} | ${'123'}                 | ${'prd-userPoolId'} | ${'prd-identityPoolId'}
    ${'stg'} | ${'123'}                 | ${'stg-userPoolId'} | ${'stg-identityPoolId'}
    ${'dev'} | ${'6272o92pirbogh213ohf7lo8o0'} | ${'ap-northeast-1_Z0F1NdHfU'} | ${'ap-northeast-1:3a135d8e-faec-45a5-aa02-438a9beb895d'}
`('configureAmplify', ({ env, expectedUserPoolClientId, expectedUserPoolId, expectedIdentityPoolId }) => {
  
    beforeEach(() => {
        configureAmplify(env);
    });

    afterEach(() => {
        vi.clearAllMocks();
    });

  test('環境変数$envの場合、Amplify.configureが正しく設定されること', () => {
      expect(Amplify.configure).toHaveBeenCalledWith(expect.objectContaining({
        Auth: expect.objectContaining({
          Cognito: expect.objectContaining({
            userPoolId: expectedUserPoolId,
            userPoolClientId: expectedUserPoolClientId,
            identityPoolId: expectedIdentityPoolId,
          }),
        }),
      }));
    },
  );

  test('setKeyValueStorageが呼び出されること', () => {
    expect(cognitoUserPoolsTokenProvider.setKeyValueStorage).toHaveBeenCalledWith(sessionStorage);
  });
});
