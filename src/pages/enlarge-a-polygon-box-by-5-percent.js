import { useEffect, useState } from 'react';
import { MapContainer, useMap, TileLayer, Polyline } from 'react-leaflet';
import { polygon, transformScale } from '@turf/turf';
import tileLayer from '../util/tileLayer';

const center = [52.22977, 19.01178];

const poland = [
  [54.80068486732236, 18.292236328125004],
  [53.89786522246521, 14.611816406250002],
  [51.055207338584964, 15.281982421875002],
  [49.57510247172322, 19.138183593750004],
  [50.57626025689928, 23.642578125000004],
  [52.214338608258224, 23.148193359375004],
  [52.86912972768522, 23.741455078125],
  [54.29729354239267, 22.928466796875004],
  [54.29729354239267, 19.489746093750004],
  [54.80068486732236, 18.292236328125004]
];

const MyCountry = () => {
  const map = useMap();
  const [newCoordinates, setCoordinates] = useState(null)

  useEffect(() => {
    if (!map) return

    const poly = polygon([poland]);
    const scalePoly = transformScale(poly, 1.05)

    const { coordinates } = scalePoly.geometry;

    setCoordinates(coordinates);

  }, [map])

  return newCoordinates
    ? (
      <>
        <Polyline positions={poland} fill={'red'} color={'red'} />
        <Polyline positions={newCoordinates} fill={'white'} color={'white'} />
      </>
    )
    : null

}

const MapWrapper = () => {
  return (
    <MapContainer
      center={center} zoom={6}
      scrollWheelZoom={false}
    >
      <TileLayer {...tileLayer} />

      <MyCountry />

    </MapContainer>
  )
}

export default MapWrapper;