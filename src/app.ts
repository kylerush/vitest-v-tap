import { join } from "path";
import fastifyAutoload from "@fastify/autoload";
import fastify, { FastifyInstance } from "fastify";

export default (): FastifyInstance => {
  const app = fastify();
  app.register(fastifyAutoload, {
    dir: join(__dirname, "routes"),
  });
  return app;
};
