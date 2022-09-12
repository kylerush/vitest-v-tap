import app from "./app";

const server = app();

const start = async (): Promise<void> => {
  try {
    await server.listen({ port: 3000, host: "0.0.0.0" });
    console.log("Server running...");
  } catch (error) {
    server.log.error(error);
    process.exit(1);
  }
};

start();
