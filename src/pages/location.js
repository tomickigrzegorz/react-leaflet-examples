import React, { useEffect, useState } from 'react';
import { MapContainer, TileLayer, useMap, Marker, Popup, Circle } from 'react-leaflet';

const center = [52.22977, 21.01178];

function Location() {
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


  return position === null ? null : (
    <>
      <Circle center={position} weight={2} color={'red'} fillColor={'red'} fillOpacity={0.1} radius={500}></Circle>
      <Marker position={position}>
        <Popup>You are here</Popup>
      </Marker>
    </>
  )
}

const MapWrapper = () => {
  return (
    <MapContainer center={center} zoom={18} scrollWheelZoom={false}>
      <TileLayer
        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />

      <Location />

    </MapContainer>
  )
}

export default MapWrapper;