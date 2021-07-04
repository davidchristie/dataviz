import { useState } from 'react'
import ReactMapGL from 'react-map-gl'
import styles from '../../styles/Map.module.css'
import { Event } from '../../types';
import { EventMarker } from '../EventMarker'

interface Viewport {
  latitude: number,
  longitude: number,
  zoom: number
}

const mapboxApiAccessToken = process.env.NEXT_PUBLIC_MAPBOX_TOKEN

export interface MapProps {
  events: Event[]
}

export function Map({ events }: MapProps) {
  const [viewport, setViewport] = useState<Viewport
  >({
    latitude: -36.850109,
    longitude: 174.7677,
    zoom: 8
  });
  return (
    <div className={styles.map}>
      <ReactMapGL
        {...viewport}
        width="100%"
        height="100%"
        mapboxApiAccessToken={mapboxApiAccessToken}
        onViewportChange={(nextViewport: Viewport) => setViewport(nextViewport)}
      >
        {events.map(event => (
          <EventMarker key={event.id} event={event} zoom={viewport.zoom} />
        ))}
      </ReactMapGL>
    </div>
  );
}
