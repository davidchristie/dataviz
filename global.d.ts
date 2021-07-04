declare module "react-timeline-range-slider" {
  import React from "react";
  interface Internal {
    start: Date;
    end: Date;
  }
  type TimelineRangeSliderProps = any; // FIXME
  const TimelineRangeSlider: (props: TimelineRangeSliderProps) => JSX.Element;
  export default TimelineRangeSlider;
}
