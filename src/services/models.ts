/**
 * File to contain all the models in order to avoid circular dependency issues.
 *
 * Related thread: https://github.com/colinhacks/zod/issues/1193
 */

import { z } from "zod";

// base models first
// lawsuit
export const lawsuitSchema = z.object({
  id: z.string(),
  judiceId: z.number(),
  cnj: z.string(),
  clientId: z.string(),
});
export const lawsuitListSchema = z.array(lawsuitSchema);

// client
export const clientSchema = z.object({
  id: z.string(),
  judiceId: z.number(),
  name: z.string(),
  cpf: z.string().nullable(),
  phones: z.array(z.string()),
});

// movimentation
export const movimentationTypes = z.enum(["AUDIENCIA", "PERICIA"]);

export const movimentationSchema = z.object({
  id: z.string(),
  judiceId: z.number(),
  lawsuitId: z.string(),
  type: movimentationTypes,
  expeditionDate: z.date({ coerce: true }),
  finalDate: z.date({ coerce: true }),
});
export const movimentationListSchema = z.array(movimentationSchema);

// notification
export const notificationSchema = z.object({
  id: z.string(),
  movimentationId: z.string().nullable(),
  clientId: z.string(),
  message: z.string(),
  sentAt: z.date({ coerce: true }).nullable(),
  recieved: z.boolean(),
});

export const notificationListSchema = z.array(notificationSchema);

// publication
export const publicationSchema = z.object({
  id: z.string(),
  judiceId: z.number(),
  lawsuitId: z.string(),
  movimentationId: z.string().nullable(),
  expeditionDate: z.date({ coerce: true }),
  hasBeenTreated: z.boolean(),
});
export const publicationListSchema = z.array(publicationSchema);

// extended models

export const lawsuitWithClientSchema = lawsuitSchema.extend({
  client: clientSchema,
});
export const lawsuitWithClientListSchema = z.array(lawsuitWithClientSchema);

export const fullLawsuitSchema = lawsuitWithClientSchema.extend({
  movimentations: movimentationListSchema,
});

export const fullMovimentationSchema = movimentationSchema.extend({
  lawsuit: lawsuitWithClientSchema,
  notifications: notificationListSchema,
});

export const publicationWithLawsuitSchema = publicationSchema.extend({
  lawsuit: lawsuitSchema,
});

export const notificationWithClientSchema = notificationSchema.extend({
  client: clientSchema,
});
export const notificationWithClientListSchema = z.array(
  notificationWithClientSchema
);
