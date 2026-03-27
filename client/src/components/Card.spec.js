import { render, screen } from '@testing-library/react'
import Card from './Card'

describe('Card', () => {
  it('renders its children', () => {
    render(<Card text="What is MongoDB?" author="Jane Doe" />)
    expect(screen.getByText('What is MongoDB?', 'Jane Doe')).toBeInTheDocument()
  })
})
