import { useEffect, useState } from 'react';
import { MapContainer, Rectangle, TileLayer } from 'react-leaflet';
import L from 'leaflet';
import tileLayer from '../util/tileLayer';

const center = [52.22977, 21.01178];

function getRandomColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`.toString();
}

const SetRentacle = ({ bounds }) => {
  return bounds.map((bound, index) => (
    <Rectangle
      key={index}
      bounds={bound}
      color={getRandomColor()}
      weight={10}
      fillOpacity={0.1} />
  ));
}

function contentText(getBounds) {
  const { _northEast, _southWest } = getBounds;
  return `SouthWest: ${_southWest}, NorthEast: ${_northEast}`;
}

const Location = ({ map }) => {
  const [bounds, setBounds] = useState([])

  useEffect(() => {
    if (!map) return;

    const info = L.DomUtil.create('div', 'legend');

    const positon = L.Control.extend({
      options: {
        position: 'bottomleft'
      },

      onAdd: function () {
        info.innerHTML = contentText(map.getBounds());
        return info;
      }
    })

    map.addControl(new positon());

    map.on('moveend zoomend', () => {
      const bounds = map.getBounds();
      info.textContent = contentText(bounds);
      setBounds(b => [...b, bounds])
    });

  }, [map])

  return bounds?.length <= 0
    ? <SetRentacle bounds={bounds} />
    : null;
}

const MapWrapper = () => {
  const [map, setMap] = useState(null)

  return (
    <MapContainer
      whenCreated={setMap}
      center={center}
      zoom={18}
      scrollWheelZoom={false}
    >

      <TileLayer {...tileLayer} />

      <Location map={map} />

    </MapContainer>
  )
}

export default MapWrapper;