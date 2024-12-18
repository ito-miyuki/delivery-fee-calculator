import "vitest";
import "@testing-library/jest-dom";

declare global {
  namespace Vi {
    type Assertion<T = unknown> = jest.Matchers<T>
    type AsymmetricMatchersContaining = jest.MatchersContaining
  }
}
