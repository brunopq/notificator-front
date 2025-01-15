import {
  generateParams,
  paginated,
  type PaginationOptions,
} from "../../utils/pagination";

import { notificationWithClientSchema } from ".";
import { parsedFetch } from "../parsedFetch";

export class NotificationService {
  async index(pagination: PaginationOptions) {
    return parsedFetch(
      `/notifications${generateParams(pagination)}`,
      paginated(notificationWithClientSchema)
    );
  }
}
