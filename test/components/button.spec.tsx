import { getByTestId, render } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import type { ComponentProps, ReactNode } from 'react';
import { describe, expect, it, vi }  from 'vitest';
import { ButtonComponents } from '../../pages/components/button';

const setup = (jsx: ReactNode) => {
   return {
      user: userEvent.setup(),
      render: render(jsx)
   }
}


describe('テスト対象 コンポーネント名とか', () => {
     const args: ComponentProps<typeof ButtonComponents> = {
        // コンポーネントの引数をオブジェクト形式で記載
       label: 'sample',
       onClick: vi.fn()
     }

   it('テスト項目名を入れる', async () => {
         const { render, user } = setup(<ButtonComponents data-testid="baseButton" {...args} />)
         // test-dataidを捕まえる
         
         const buttonTarget = getByTestId<HTMLButtonElement>(render.container, 'baseButton')

         await user.click(buttonTarget)
         expect(args.onClick).toHaveBeenCalled();
     })
})