import { expect, test } from 'vitest'
import { render, screen } from '@testing-library/react';
import Form from "./Form";

test('Form has cart value label', () => {
    render(<Form />)

    const label = screen.getByTestId("cart-value-label")
    const labelText = "Cart value"

    expect(label).toContain(labelText)
  })