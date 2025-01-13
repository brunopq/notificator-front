import {
  lawsuitSchema,
  lawsuitWithClientSchema,
  lawsuitWithClientListSchema,
} from "./models";

export class LawsuitService {
  async index() {
    const response = await fetch("http://localhost:8080/lawsuits");

    if (
      response.ok &&
      response.headers.get("Content-Type")?.includes("application/json")
    ) {
      const data = await response.json();
      const lawsuits = lawsuitWithClientListSchema.parse(data);
      return lawsuits;
    }

    throw new Error("Failed to fetch lawsuit");
  }
}