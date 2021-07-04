/// <reference types="next" />
/// <reference types="next/types/global" />
/// <reference types="next/image-types/global" />

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
