import { Marker } from 'react-map-gl'
import styles from '../../styles/EventMarker.module.css'
import { Event } from '../../types';

export interface EventMarkerProps {
  event: Event
  zoom: number
}

function formatDate(date: string) {
  return new Date(date).toLocaleDateString('en-NZ')
}

export function EventMarker({ event, zoom }: EventMarkerProps) {
  return (
    <Marker
      latitude={event.latitude}
      longitude={event.longitude}
      offsetLeft={0}
      offsetTop={0}
    >
      <div className={styles.event}>
        <div className={styles.dot} />
        {zoom > 4 && (
          <div className={styles.info}>
            <div className={styles.title}>{event.name}</div>
            <div>{event.description}</div>
            <div>Start: {formatDate(event.startTime)}</div>
            <div>End: {formatDate(event.endTime)}</div>
          </div>
        )}
      </div>
    </Marker>
  );
}
