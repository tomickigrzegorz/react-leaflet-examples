import React, { useEffect, useState } from 'react';
import { MapContainer, TileLayer, useMap, useMapEvent } from 'react-leaflet';
import L from 'leaflet';

const center = [52.22977, 21.01178];

function HomeButton() {
  const map = useMap();
  const defaultMapCenter = map.getCenter();

  useMapEvent({
    dragend(e) {
      // const mapCenter = map.getCenter();
      const { lat: latD, lng: lngD } = defaultMapCenter;
      const { lat, lng } = map.getCenter();
      if ([lat, lng] !== [latD.toFixed(5) * 1, lngD.toFixed(5) * 1]) {
        document.body.classList.add('show-button-home');
      } else {
        document.body.classList.remove('show-button-home');
      }
    },
  })

  useEffect(() => {
    if (map) {
      const customControler = L.Control.extend({
        options: {
          position: 'topleft'
        },

        onAdd: function () {
          const btn = L.DomUtil.create('button', 'back-to-home');
          btn.title = 'pooooooooooooop rotation';
          btn.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32"><path d="M32 18.451L16 6.031 0 18.451v-5.064L16 .967l16 12.42zM28 18v12h-8v-8h-8v8H4V18l12-9z"></path></svg>';

          btn.onclick = function () {
            map.flyToBounds([center]);
            document.body.classList.remove('show-button-home');
          };

          return btn;
        }
      })

      map.addControl(new customControler());


      const info = L.Control.extend({
        options: {
          position: 'bottomleft'
        },

        onAdd: function () {
          const info = L.DomUtil.create('div', 'legend');
          info.textContent = 'move the map';
          return info;
        }
      })

      map.addControl(new info());

    }
  }, [map])

  return null
}

const MapWrapper = () => {
  const [map, setMap] = useState(null);

  return (
    <MapContainer whenCreated={setMap} center={center} zoom={18} scrollWheelZoom={false}>
      <HomeButton map={map} />

      <TileLayer
        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
    </MapContainer>
  )
}

export default MapWrapper;