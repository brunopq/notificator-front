import { z, ZodSchema } from "zod";

export type PaginationOptions = {
  limit: number;
  offset: number;
};

export const generateParams = (pagination: PaginationOptions) => {
  const searchParams = new URLSearchParams();
  searchParams.append("limit", pagination.limit.toString());
  searchParams.append("offset", pagination.offset.toString());
  return "?" + searchParams.toString();
};

export const extractPaginationData = (
  searchParams: URLSearchParams
): PaginationOptions => {
  return {
    limit: parseInt(searchParams.get("limit") ?? "10"),
    offset: parseInt(searchParams.get("offset") ?? "0"),
  };
};

export const paginated = <T extends ZodSchema>(schema: T) =>
  z.object({
    data: z.array(schema),
    limit: z.number(),
    offset: z.number(),
    total: z.number(),
  });

export type Paginated<T> = {
  data: T[];
  limit: number;
  offset: number;
  total: number;
};
