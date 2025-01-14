import type { z, ZodSchema } from "zod";

const BASE_URL = "http://localhost:8080";

export async function parsedFetch<T extends ZodSchema>(
  url: string,
  schema: T
): Promise<z.infer<T>> {
  const response = await fetch(BASE_URL + url);

  if (
    response.ok &&
    response.headers.get("Content-Type")?.includes("application/json")
  ) {
    const data = await response.json();
    return schema.parse(data);
  }

  throw new Error("Failed to fetch data");
}
