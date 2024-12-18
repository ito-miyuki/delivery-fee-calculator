import { expect, test } from 'vitest'
import calculateFee from './calculateFee'

test('delivery fee should be 10€', () => {
    const cartValue = 1;
    const deliveryDistance = 100;
    const numberOfItems = 2;

    expect(calculateFee({cartValue, deliveryDistance, numberOfItems})).toBe(10)
  })
