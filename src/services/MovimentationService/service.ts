import { parsedFetch } from "../parsedFetch";

import { movimentationListSchema } from "./models";

export class MovimentationService {
  async index() {
    return parsedFetch("/movimentations", movimentationListSchema);
  }

  async show(id: string) {
    return parsedFetch(`/movimentations/${id}`, movimentationListSchema);
  }
}
