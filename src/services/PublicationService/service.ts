import { parsedFetch } from "../parsedFetch";

import { publicationListSchema } from ".";

export class PublicationService {
  async index() {
    return parsedFetch("/publications", publicationListSchema);
  }
}
