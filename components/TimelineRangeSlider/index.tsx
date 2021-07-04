import dynamic from 'next/dynamic'

import { Interval, TimelineRangeSliderProps } from './slider'

export type { Interval }

export const TimelineRangeSlider = dynamic<TimelineRangeSliderProps>(() => import('./slider'), { ssr: false })
