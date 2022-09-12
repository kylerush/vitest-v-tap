import { fastify, FastifyInstance } from "fastify";
import { helloWorld } from "../lib/hello-world";

export default async (fastify: FastifyInstance) => {
  fastify.get("/", () => {
    const returnVal = helloWorld(true);
    return returnVal;
  });
};
