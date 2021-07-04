import { addMonths } from "date-fns";
import type { NextApiRequest, NextApiResponse } from "next";
import { getData } from "../../datasources/random";
import { Data, Event } from "../../types";

function random(min: number, max: number) {
  return (max - min) * Math.random() + min;
}

export default function handler(
  request: NextApiRequest,
  response: NextApiResponse<Data>
) {
  response.status(200).json(getData());
}
