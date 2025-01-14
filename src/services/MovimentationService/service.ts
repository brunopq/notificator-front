import { parsedFetch } from "../parsedFetch";

import { fullMovimentationSchema, movimentationListSchema } from ".";

export class MovimentationService {
  async index() {
    return parsedFetch("/movimentations", movimentationListSchema);
  }

  async show(id: string) {
    return parsedFetch(`/movimentations/${id}`, fullMovimentationSchema);
  }
}
