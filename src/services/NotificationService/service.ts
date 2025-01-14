import { notificationListSchema, notificationWithClientListSchema } from ".";
import { parsedFetch } from "../parsedFetch";

export class NotificationService {
  async index() {
    return parsedFetch("/notifications", notificationWithClientListSchema);
  }
}
