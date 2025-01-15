import {
  generateParams,
  paginated,
  type PaginationOptions,
} from "../../utils/pagination";

import { parsedFetch } from "../parsedFetch";

import { fullLawsuitSchema, lawsuitWithClientSchema } from ".";

export class LawsuitService {
  async index(pagination: PaginationOptions) {
    return parsedFetch(
      `/lawsuits${generateParams(pagination)}`,
      paginated(lawsuitWithClientSchema)
    );
  }

  async show(cnj: string) {
    return parsedFetch(`/lawsuits/${cnj}`, fullLawsuitSchema);
  }
}
