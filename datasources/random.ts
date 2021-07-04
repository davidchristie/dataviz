import { addMonths } from "date-fns";
import seedrandom from "seedrandom";
import { Data, Event } from "../types";

function random(min: number, max: number, rng: () => number) {
  return (max - min) * rng() + min;
}

export function getData(): Data {
  const rng = seedrandom("");
  const events: Event[] = Array(100)
    .fill(null)
    .map((_, index) => {
      const startTime = new Date(
        random(new Date("2000").getTime(), new Date().getTime(), rng)
      );
      const endTime = addMonths(startTime, random(0, 30, rng));
      return {
        id: `event${index}`,
        name: `Event ${index}`,
        description: `Some information about event ${index}.`,
        startTime: startTime.toISOString(),
        endTime: endTime.toISOString(),
        latitude: random(-90, 90, rng),
        longitude: random(-180, 180, rng),
      };
    });
  return {
    events,
  };
}
