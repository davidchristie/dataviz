export interface Data {
  events: Event[];
}

export interface Event {
  id: string;
  name: string;
  description: string;
  startTime: string;
  endTime: string;
  latitude: number;
  longitude: number;
}
