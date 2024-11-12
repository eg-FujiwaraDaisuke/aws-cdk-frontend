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
    env      | expectedUserPoolId  | expectedIdentityPoolId
    ${'prd'} | ${'prd-userPoolId'} | ${'prd-identityPoolId'}
    ${'stg'} | ${'stg-userPoolId'} | ${'stg-identityPoolId'}
    ${'dev'} | ${'dev-userPoolId'} | ${'dev-identityPoolId'}
`('configureAmplify', ({ env, expectedUserPoolId, expectedIdentityPoolId }) => {
  
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
            userPoolClientId: '123',
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
