import { z } from "zod";

export const schema = z.object({
  comment_text: z.string(),
});