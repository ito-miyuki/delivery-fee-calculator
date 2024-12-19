import { expect, test } from 'vitest'
import calculateFee from './calculateFee'

test('delivery fee should be 10€', () => {
    const cartValue = 1;
    const deliveryDistance = 100;
    const numberOfItems = 2;
    const orderTime = "2024-06-14T14:00";

    expect(calculateFee({cartValue, deliveryDistance, numberOfItems, orderTime})).toBe(10)
  })
