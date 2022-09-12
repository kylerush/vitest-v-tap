import { describe, test, expect, afterAll } from "vitest";
import app from "../src/app";

describe("basic test", () => {
  const fastify = app();
  afterAll(async () => {
    await fastify.close();
  });
  test("e2e test", async () => {
    const response = await fastify.inject({
      method: "GET",
      url: "/",
    });
    expect(JSON.parse(response.payload)).toEqual({ hello: "world" });
  });
});
