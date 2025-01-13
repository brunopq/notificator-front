import { z } from "zod";
import { clientSchema } from "./ClientService";

export const lawsuitSchema = z.object({
  id: z.string(),
  judiceId: z.number(),
  cnj: z.string(),
  clientId: z.string(),
});

export const lawsuitWithClientSchema = lawsuitSchema.extend({
  client: clientSchema,
});

export const lawsuitsSchema = z.array(lawsuitSchema);

class LawsuitService {
  async index() {
    const response = await fetch("http://localhost:8080/lawsuits");

    if (
      response.ok &&
      response.headers.get("Content-Type")?.includes("application/json")
    ) {
      const data = await response.json();
      const lawsuits = z.array(lawsuitWithClientSchema).parse(data);
      return lawsuits;
    }

    throw new Error("Failed to fetch lawsuit");
  }
}

export default new LawsuitService();
