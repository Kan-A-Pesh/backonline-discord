import "dotenv/config";
import client from "./core/client";
import { isDev } from "./utils/is-dev";

console.log(`Running in ${isDev ? "DEV" : "PROD"} mode`);

// Load features
client.on("ready", async () => {
  await import("./features/note");
  await import("./features/awareness");
});

client.login(process.env.TOKEN);
