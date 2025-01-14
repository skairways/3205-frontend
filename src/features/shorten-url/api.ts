import clientApi from "../../shared/api/base-api";
import { ShortenedUrlResponse } from "./types";

export const shortenUrl = async (
  originalUrl: string
): Promise<ShortenedUrlResponse> => {
  const response = await clientApi.post("shorten", {
    originalUrl,
  });
  return response.data;
};
