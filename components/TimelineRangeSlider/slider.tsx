import React, { useState } from "react";
import { format } from "date-fns";
import TimeRange from "react-timeline-range-slider";
import styles from "../../styles/TimelineRangeSlider.module.css";

export type Interval = [Date, Date]

export interface TimelineRangeSliderProps {
  timelineInterval: Interval
  selectedInterval: Interval
  onSelectedIntervalChange: (selectedInterval: Interval) => void
}

export default function TimelineRangeSlider({
  timelineInterval,
  selectedInterval,
  onSelectedIntervalChange,
}: TimelineRangeSliderProps) {
  return (
    <div className={styles.container}>
      <div className={styles.info}>
        <span>Selected Interval: </span>
        {selectedInterval.map((date, index) => (
          <span key={index}>{format(date, "dd MMM yyyy")}</span>
        ))}
      </div>
      <TimeRange
        ticksNumber={15}
        formatTick={(ms: number) => format(new Date(ms), 'yyyy')}
        selectedInterval={selectedInterval}
        timelineInterval={timelineInterval}
        onUpdateCallback={() => { }}
        onChangeCallback={onSelectedIntervalChange}
      />
    </div>
  );
}
