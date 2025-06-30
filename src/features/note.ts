import { CustomStatus } from "discord.js-selfbot-v13";
import client from "../core/client";
import { CronJob } from "cron";
import { isDev } from "../utils/is-dev";
import { getRelatedEmoji } from "../utils/emojis";

async function setCustomStatus() {
  const payload = await fetch("https://api.api-ninjas.com/v1/dadjokes", {
    headers: {
      "X-API-KEY": process.env.NINJA_API_KEY!,
    },
  }).then((res) => res.json());

  const joke = payload[0]["joke"];
  const emoji = await getRelatedEmoji(joke);

  const custom = new CustomStatus(client).setEmoji(emoji).setState(joke);

  client.user!.setPresence({
    status: "online",
    activities: [custom],
  });

  console.log("Changed status to ", emoji, joke);
}

CronJob.from({
  start: true,
  cronTime: isDev ? "*/1 * * * *" : "*/15 * * * *", // (DEV) every 1 minute, (PROD) every 15 minutes
  onTick: setCustomStatus,
});

setCustomStatus();
