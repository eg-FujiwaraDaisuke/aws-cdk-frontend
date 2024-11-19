import { render, screen } from '@testing-library/react';
import { describe, expect, test } from 'vitest';
import LoginPage from '../../pages/login';

describe('LoginPage', () => {
  test('正しく描画されること', () => {
    render(<LoginPage />);

    const emailInput = screen.getByLabelText('Email');
    expect(emailInput).toBeTruthy();

    const passwordInput = screen.getByLabelText('Password');
    expect(passwordInput).toBeTruthy();

    const loginButton = screen.getByRole('button', { name: /Login/i });
    expect(loginButton).toBeTruthy();
  });
});
