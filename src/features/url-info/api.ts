import clientApi from "../../shared/api/base-api";
import { UrlInfoResponse } from "./types";

export const fetchUrlInfo = async (
  shortUrl: string
): Promise<UrlInfoResponse> => {
  const response = await clientApi.get(`info/${shortUrl}`);
  return response.data;
};
