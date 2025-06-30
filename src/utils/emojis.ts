import { generateText } from "ai";
import { emojiModel } from "./openrouter";

export const getRelatedEmoji = async (context: string): Promise<string> => {
  const { text } = await generateText({
    model: emojiModel,
    prompt: `Based on the following context, return only ONE emoji that best represents or relates to the content. Do not include any text, explanations, or additional characters - just the single emoji:

Context: ${context}`,
    maxTokens: 10,
  });

  // Extract only the first emoji from the response
  const emoji = text.trim().match(/\p{Emoji}/u)?.[0];

  // Return the found emoji or fallback to random emoji
  return emoji || "⚠︎";
};
