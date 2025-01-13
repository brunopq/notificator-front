import { z } from "zod";

export const notification = z.object({
  id: z.string(),
  movimentationId: z.string().nullable(),
  clientId: z.string(),
  message: z.string(),
  sentAt: z.date().nullable(),
  recieved: z.boolean(),
});
