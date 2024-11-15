import { getByTestId } from '@testing-library/react'
import type { ComponentProps } from 'react';
import { describe, expect, test, vi }  from 'vitest';
import { ButtonComponents } from '../../pages/components/button';
import { setup } from '../util';

describe('ButtonComponents', () => {
   const args: ComponentProps<typeof ButtonComponents> = {
      // コンポーネントの引数をオブジェクト形式で記載
      label: 'sample',
      onClick: vi.fn()
   };

   const { render, user } = setup(<ButtonComponents data-testid="baseButton" {...args} />)
   const buttonTarget = getByTestId<HTMLButtonElement>(render.container, 'baseButton')

   test('onClickが発火すること', async () => {
      await user.click(buttonTarget);
      expect(args.onClick).toHaveBeenCalled();
   });

   test('labelが正しく表示されること', async () => {
      expect(buttonTarget.textContent).toEqual(args.label);
   });

});
