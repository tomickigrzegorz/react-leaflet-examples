import { useEffect, useState } from 'react';
import { MapContainer, TileLayer } from 'react-leaflet';
import L from 'leaflet';
import tileLayer from '../util/tileLayer';

const center = [52.22977, 21.01178];

const MapWrapper = () => {
  const [map, setMap] = useState(null)

  useEffect(() => {
    if (!map) return;

    const info = L.DomUtil.create('div', 'legend');

    const positon = L.Control.extend({
      options: {
        position: 'bottomleft'
      },

      onAdd: function () {
        info.textContent = 'move the map';
        return info;
      }
    })

    map.addControl(new positon());

    const bounds = map.getBounds();

    map.setMaxBounds(bounds);
    map.fitBounds(bounds, { reset: true });

  }, [map])

  return (

    <MapContainer
      whenCreated={setMap}
      center={center}
      zoom={18}
      scrollWheelZoom={false}
    >

      <TileLayer {...tileLayer} />

    </MapContainer>
  )
}

export default MapWrapper;