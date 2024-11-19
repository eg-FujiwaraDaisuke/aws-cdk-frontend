import { cleanup } from '@testing-library/react';
import { afterEach } from 'vitest';
import '@testing-library/dom';

afterEach(()=> {
    cleanup();
})
