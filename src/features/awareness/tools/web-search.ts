import { generateText, tool } from "ai";
import { z } from "zod";
import { searchModel } from "../../../utils/openrouter";

export const searchWebTool = tool({
  description: "Search the web for information using Perplexity's Sonar model",
  parameters: z.object({
    query: z.string().describe("The search query, can be a question, a subject, or a topic")
  }),
  execute: async ({ query }) => {
    console.log("Web search requested", { query });

    const { text } = await generateText({
      model: searchModel,
      prompt: query
    });

    console.log("Web search completed", { query, text });

    return { text };
  }
});
