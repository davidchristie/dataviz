import type { NextApiRequest, NextApiResponse } from "next";
import { Data, Event } from "../../types";

export default function handler(
  request: NextApiRequest,
  response: NextApiResponse<Data>
) {
  const events: Event[] = [
    {
      id: "event1",
      name: "Event 1",
      description: "Some information about event 1.",
      startTime: "2020-01-05",
      endTime: "2020-08-14",
      latitude: -36.850109,
      longitude: 174.7677,
    },
  ];
  response.status(200).json({ events });
}
