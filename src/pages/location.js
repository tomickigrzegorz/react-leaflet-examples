import { useEffect, useState } from 'react';
import { MapContainer, TileLayer, useMap, Marker, Popup, Circle } from 'react-leaflet';
import tileLayer from '../util/tileLayer';

const center = [52.22977, 21.01178];

const Location = () => {
  const map = useMap();
  const [position, setPosition] = useState(null)

  useEffect(() => {
    map.locate({
      setView: true
    })
    map.on('locationfound', (event) => {
      setPosition(event.latlng)
    })
  }, [map])


  return position
    ? (
      <>
        <Circle center={position} weight={2} color={'red'} fillColor={'red'} fillOpacity={0.1} radius={500}></Circle>
        <Marker position={position}>
          <Popup>You are here</Popup>
        </Marker>
      </>
    )
    : null
}

const MapWrapper = () => {
  return (
    <MapContainer
      center={center}
      zoom={18}
      scrollWheelZoom={false}
    >

      <TileLayer {...tileLayer} />

      <Location />

    </MapContainer>
  )
}

export default MapWrapper;