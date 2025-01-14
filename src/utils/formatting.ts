import { format } from "date-fns";

export const formatDate = (date: Date) => format(date, "dd/MM/yyyy");
export const formatDateTime = (date: Date) => format(date, "dd/MM/yyyy HH:mm");
