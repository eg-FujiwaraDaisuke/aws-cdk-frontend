import type { ComponentProps, ReactNode } from 'react';
import { describe, expect, it, test } from 'vitest';
import { getByTestId, render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { ButtonComponents } from '../../pages/components/button';

describe('ButtonComponents', () => {
  test('renders the button with the correct label', () => {
    render(<ButtonComponents type="submit" label="Login" />);
    
    const buttonElement = screen.getByRole('button', { name: /login/i });
    expect(buttonElement).toBeInTheDocument();
  });

  test('applies additional props correctly', () => {
    render(<ButtonComponents label="Click Me" disabled />);

    const buttonElement = screen.getByRole('button', { name: /click me/i });
    expect(buttonElement).toBeDisabled();
  });

  test('has the correct variant and color', () => {
    const { container } = render(<ButtonComponents label="Click Me" />);
    
    const buttonElement = container.querySelector('button');
    expect(buttonElement).toHaveClass('MuiButton-contained');
    expect(buttonElement).toHaveClass('MuiButton-primary');
  });
});

// const setup = (jsx: ReactNode) => {
//    return {
//       user: userEvent,
//       render: render(jsx)
//    }
// }

// describe('ButtonCompoents', () => {
//      const args: ComponentProps<typeof ButtonComponents> = {
//         // コンポーネントの引数をオブジェクト形式で記載
//        label: 'sample'
//      }

//     it('テスト項目名を入れる', () => {
//         const { user } = setup(<ButtonComponents data-testid='baseButton' {...args} />);
//         const buttonTarget = getByTestId<HTMLButtonElement>('baseButton');

//         user.click(buttonTarget)
//         expect(args.onClick).toHaveBeenCalled();
//      });
// });
