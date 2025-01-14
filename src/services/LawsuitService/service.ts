import { parsedFetch } from "../parsedFetch";

import { lawsuitWithClientListSchema, fullLawsuit } from "./models";

export class LawsuitService {
  async index() {
    return parsedFetch("/lawsuits", lawsuitWithClientListSchema);
  }

  async show(cnj: string) {
    return parsedFetch(`/lawsuits/${cnj}`, fullLawsuit);
  }
}
