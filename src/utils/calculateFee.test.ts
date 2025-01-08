import { expect, test } from 'vitest'
import calculateFee from './calculateFee'


/* test for delivery distance */
test('delivery fee should be 2€', () => {
  const cartValue = 50; // 0
  const deliveryDistance = 500; // 2
  const numberOfItems = 2; // 0
  const orderTime = "2024-06-14T14:00"; // 0

  expect(calculateFee({cartValue, deliveryDistance, numberOfItems, orderTime})).toBe(2)
});

test('delivery fee should be 3€', () => {
  const cartValue = 50; // 0
  const deliveryDistance = 1001; // 3
  const numberOfItems = 2; // 0
  const orderTime = "2024-06-14T14:00"; // 0

  expect(calculateFee({cartValue, deliveryDistance, numberOfItems, orderTime})).toBe(3)
});

test('delivery fee should be 4€', () => {
  const cartValue = 50; // 0
  const deliveryDistance = 2000; // 4
  const numberOfItems = 2; // 0
  const orderTime = "2024-06-14T14:00"; // 0

  expect(calculateFee({cartValue, deliveryDistance, numberOfItems, orderTime})).toBe(4)
});

test('delivery fee should be 4€', () => {
  const cartValue = 50; // 0
  const deliveryDistance = 2001; // 5
  const numberOfItems = 2; // 0
  const orderTime = "2024-06-14T14:00"; // 0

  expect(calculateFee({cartValue, deliveryDistance, numberOfItems, orderTime})).toBe(5)
});

test('delivery fee should be 12€', () => {
  const cartValue = 50; // 0
  const deliveryDistance = 6000; // 12
  const numberOfItems = 2; // 0
  const orderTime = "2024-06-14T14:00"; // 0

  expect(calculateFee({cartValue, deliveryDistance, numberOfItems, orderTime})).toBe(12)
});

/* test for small cart value */
test('delivery fee should be 11€', () => {
  const cartValue = 1; // 9
  const deliveryDistance = 100; // 2
  const numberOfItems = 2; // 0
  const orderTime = "2024-06-14T14:00"; // 0

  expect(calculateFee({cartValue, deliveryDistance, numberOfItems, orderTime})).toBe(11)
});

test('delivery fee should be 3€', () => {
  const cartValue = 9; // 1
  const deliveryDistance = 100; // 2
  const numberOfItems = 2; // 0
  const orderTime = "2024-06-14T14:00"; // 0

  expect(calculateFee({cartValue, deliveryDistance, numberOfItems, orderTime})).toBe(3)
});

/* test for large order(bulk fee applies) */
test('delivery fee should be 2.5€', () => {
  const cartValue = 35; // 0
  const deliveryDistance = 999; // 2
  const numberOfItems = 5; // 0.5
  const orderTime = "2024-06-14T14:00";

  expect(calculateFee({cartValue, deliveryDistance, numberOfItems, orderTime})).toBe(2.5)
});

test('delivery fee should be 10.7€', () => {
  const cartValue = 35; // 0
  const deliveryDistance = 1500; // 3
  const numberOfItems = 13; // 4.5€ + 1.2€
  const orderTime = "2025-01-07T20:00";

  expect(calculateFee({cartValue, deliveryDistance, numberOfItems, orderTime})).toBe(8.7)
});

/* test for rush hour */
test('delivery fee should be 2.4€', () => {
  const cartValue = 20; // 0
  const deliveryDistance = 500; // 2
  const numberOfItems = 4; // 0
  const orderTime = "2025-01-08T16:20"; // 2 * 1.2

  expect(calculateFee({cartValue, deliveryDistance, numberOfItems, orderTime})).toBe(2.4)
});

test('delivery fee should be 10.8€', () => {
  const cartValue = 5; // 5
  const deliveryDistance = 1580; // 4
  const numberOfItems = 4; // 0
  const orderTime = "2025-01-08T16:20"; // 9 * 1.2

  expect(calculateFee({cartValue, deliveryDistance, numberOfItems, orderTime})).toBe(10.8)
});

/* test for over 15€ delivery fee */
test('delivery fee should be 15€', () => {
  const cartValue = 50; // 0
  const deliveryDistance = 9000; // 16
  const numberOfItems = 2; // 0
  const orderTime = "2024-06-14T14:00"; // 0

  expect(calculateFee({cartValue, deliveryDistance, numberOfItems, orderTime})).toBe(15)
});

/* test for over 200€ order */
test('delivery fee should be 0€', () => {
  const cartValue = 200; // 0
  const deliveryDistance = 2000;
  const numberOfItems = 2;
  const orderTime = "2024-06-14T14:00";

  expect(calculateFee({cartValue, deliveryDistance, numberOfItems, orderTime})).toBe(0)
});

