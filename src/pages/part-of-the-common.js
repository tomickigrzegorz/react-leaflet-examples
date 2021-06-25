import { useState, useEffect } from 'react';
import { useMap, MapContainer, TileLayer, GeoJSON } from 'react-leaflet';
import { circle, intersect } from '@turf/turf';
import tileLayer from '../util/tileLayer';

const center = [52.22977, 21.01178];

const centers = [
  { lat: 52.22990558765487, lng: 21.01168513298035 },
  { lat: 52.22962958994604, lng: 21.011593937873844 },
  { lat: 52.2297445891999, lng: 21.012012362480167 }
]

const options = {
  steps: 64,
  units: 'meters',
  options: {}
}

const intersectionColor = {
  color: "yellow",
  weight: 2,
  opacity: 1,
  fillColor: "yellow",
  fillOpacity: 0.7
};

const radius = 30;

const Intersection = () => {
  const map = useMap();
  const [polygons, setPolygons] = useState([])

  useEffect(() => {

    centers.map(({ lat, lng }) => {
      const polygon = circle([lng, lat], radius, options);

      return setPolygons(pol => [...pol, polygon]);
    })

  }, [map])

  return polygons.length > 0
    ? (
      <>
        <GeoJSON data={polygons} color={'red'} weight={2} />
        <GeoJSON data={intersect(...polygons)} style={intersectionColor} />
      </>
    )
    : null
}


const MapWrapper = () => {
  return (
    <MapContainer center={center} zoom={18}>

      <TileLayer {...tileLayer} />

      <Intersection />

    </MapContainer>
  )
}

export default MapWrapper;