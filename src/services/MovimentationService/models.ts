import { z } from "zod";

export const movimentationTypes = z.enum(["AUDIENCIA", "PERICIA"]);

export const movimentation = z.object({
  id: z.string(),
  judiceId: z.number(),
  lawsuitId: z.string(),
  type: movimentationTypes,
  expeditionDate: z.date(),
  finalDate: z.date(),
});
