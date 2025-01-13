import { z } from "zod";

export const clientSchema = z.object({
  id: z.string(),
  judiceId: z.number(),
  name: z.string(),
  cpf: z.string().nullable(),
  phones: z.array(z.string()),
});
