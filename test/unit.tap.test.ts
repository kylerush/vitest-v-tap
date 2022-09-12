import { fooBar } from "../src/lib/foo-bar";
import tap from "tap";

tap.test('unit test for fooBar', async (t) => {
  const trueReturn = fooBar(true)
  t.same(trueReturn, { foo: 'bar' })
  const falseReturn = fooBar(false)
  t.same(falseReturn, { foo: 'no' })
})