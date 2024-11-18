import { render } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import type { ReactNode } from 'react';

export const setup = (jsx: ReactNode) => {
    return {
       user: userEvent.setup(),
       render: render(jsx)
    }
}
