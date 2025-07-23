import { createOpenRouter } from "@openrouter/ai-sdk-provider";

export const openrouter = createOpenRouter({
  apiKey: process.env.OPENROUTER_API_KEY
});

export const emojiModel = openrouter("google/gemini-2.5-flash-lite");
export const replyModel = openrouter("google/gemini-2.5-flash");
export const searchModel = openrouter("perplexity/sonar");
