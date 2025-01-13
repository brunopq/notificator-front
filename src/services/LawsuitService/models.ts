import { z } from "zod";

import { clientSchema } from "../ClientService";

export const lawsuitSchema = z.object({
  id: z.string(),
  judiceId: z.number(),
  cnj: z.string(),
  clientId: z.string(),
});
export const lawsuitListSchema = z.array(lawsuitSchema);

export const lawsuitWithClientSchema = lawsuitSchema.extend({
  client: clientSchema,
});
export const lawsuitWithClientListSchema = z.array(lawsuitWithClientSchema);
