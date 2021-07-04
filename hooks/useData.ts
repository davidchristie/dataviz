import useSWR, { SWRResponse } from "swr";
import { Data } from "../types";

export type UseEventsResponse = SWRResponse<Data, Error>;

export const useData = (): UseEventsResponse => {
  return useSWR("/api/data");
};
