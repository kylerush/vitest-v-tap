import tap from "tap";
import app from "../src/app";

tap.test("Basic test", async (t) => {
  const fastify = app()
  t.teardown(async () => {
    await fastify.close()
  })
  const root = await fastify.inject({
    method: 'GET',
    url: '/'
  })
  t.same(JSON.parse(root.payload), { hello: 'world' })
});
