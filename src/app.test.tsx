import { render, screen } from '@testing-library/react'

import App from './app'

describe('app', () => {
  it('should return the correct text', () => {
    render(<App />)

    expect(screen.getByText('hello')).toBeTruthy()
  })
})
