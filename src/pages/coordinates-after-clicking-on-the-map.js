import { useEffect } from 'react';
import { MapContainer, useMap, TileLayer, } from 'react-leaflet';
import L from 'leaflet';
import tileLayer from '../util/tileLayer';

const center = [52.22977, 21.01178];

const GetCoordinates = () => {
  const map = useMap();

  useEffect(() => {
    if (!map) return;
    const info = L.DomUtil.create('div', 'legend');

    const positon = L.Control.extend({
      options: {
        position: 'bottomleft'
      },

      onAdd: function () {
        info.textContent = 'Click on map';
        return info;
      }
    })

    map.on('click', (e) => {
      info.textContent = e.latlng;
    })

    map.addControl(new positon());

  }, [map])


  return null

}

const MapWrapper = () => {
  return (
    <MapContainer center={center} zoom={18} scrollWheelZoom={false}>
      <TileLayer {...tileLayer} />

      <GetCoordinates />

    </MapContainer>
  )
}

export default MapWrapper;