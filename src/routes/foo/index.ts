import { fastify, FastifyInstance } from "fastify";
import { fooBar } from "../../lib/foo-bar";

export default async (fastify: FastifyInstance) => {
  fastify.get("/", () => {
    return fooBar(true)
  });
};
