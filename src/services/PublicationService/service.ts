import {
  generateParams,
  paginated,
  type PaginationOptions,
} from "../../utils/pagination";

import { parsedFetch } from "../parsedFetch";

import { publicationSchema } from ".";

export class PublicationService {
  async index(pagination: PaginationOptions) {
    return await parsedFetch(
      `/publications${generateParams(pagination)}`,
      paginated(publicationSchema)
    );
  }
}
