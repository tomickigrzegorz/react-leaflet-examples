import { useEffect } from 'react';
import { MapContainer, useMap } from 'react-leaflet';
import L from 'leaflet';

const MyTileLayer = () => {
  const map = useMap();

  useEffect(() => {
    if (!map) return;

    const NewTileLayer = L.TileLayer.extend({
      getTileUrl: () => {
        const random = Math.ceil(Math.random() * 40);
        return `https://loremflickr.com/250/250?lock=${random}`;
      },
      getAttribution: () => {
        return "<a target='_blank' href='https://babakfakhamzadeh.com/project/loremflickr-com/'>loremflickr</a>";
      },
    })

    map.addControl(new NewTileLayer());

  }, [map]);

  return null;
}

const MapWrapper = () => {
  return (
    <MapContainer
      crs={L.CRS.Simple}
      center={[0, 0]}
      zoom={5}
      scrollWheelZoom={false}
    >

      <MyTileLayer />
    </MapContainer>
  )
}

export default MapWrapper;