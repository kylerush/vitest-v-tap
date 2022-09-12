import { fooBar } from "../src/lib/foo-bar";
import { describe, test, expect } from "@jest/globals";

describe('unit test suite', () => {
  test('fooBar', () => {
    const trueReturn = fooBar(true)
    expect(trueReturn).toEqual({ foo: 'bar' })
    const falseReturn = fooBar(false)
    expect(falseReturn).toEqual({ foo: 'no' })
  })
})
