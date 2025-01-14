import clientApi from "../../shared/api/base-api";

export const deleteUrl = async (shortUrl: string) => {
  await clientApi.delete(`delete/${shortUrl}`);
};
