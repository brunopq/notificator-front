import { parsedFetch } from "../parsedFetch";

import { lawsuitWithClientListSchema, fullLawsuitSchema } from ".";

export class LawsuitService {
  async index() {
    return parsedFetch("/lawsuits", lawsuitWithClientListSchema);
  }

  async show(cnj: string) {
    return parsedFetch(`/lawsuits/${cnj}`, fullLawsuitSchema);
  }
}
