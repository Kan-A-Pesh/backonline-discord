import { createOpenRouter } from "@openrouter/ai-sdk-provider";

export const openrouter = createOpenRouter({
  apiKey: process.env.OPENROUTER_API_KEY,
});

export const emojiModel = openrouter(
  "google/gemini-2.5-flash-lite-preview-06-17"
);

export const replyModel = openrouter(
  "google/gemini-2.5-flash-lite-preview-06-17"
);

export const searchModel = openrouter("perplexity/sonar");
