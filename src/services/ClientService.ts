import { z } from "zod";

export const clientSchema = z.object({
  name: z.string(),
  cpf: z.string().nullable(),
  phones: z.array(z.string()),
  judiceId: z.number(),
  id: z.string(),
});
