import React from 'react';
import { render, fireEvent, waitFor, screen } from '@testing-library/react'

import App from '../App'

describe("<App />", () => {
    it('should run without crashing', () => {
        const { getByTestId } = render(<App />)

        const app = getByTestId('oyster-app')

        expect(app).toBeDefined();
    })
})


