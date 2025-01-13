import { z } from "zod";

import { lawsuitSchema } from "../LawsuitService";

export const publicationSchema = z.object({
  id: z.string(),
  judiceId: z.number(),
  lawsuitId: z.string(),
  movimentationId: z.string().nullable(),
  expeditionDate: z.date(),
  hasBeenTreated: z.boolean(),
});

export const publicationWithLawsuitSchema = publicationSchema.extend({
  lawsuit: lawsuitSchema,
});
