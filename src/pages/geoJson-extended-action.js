import React, { useEffect, useMemo, useState } from 'react';
import { MapContainer, TileLayer, Marker, Popup, GeoJSON } from 'react-leaflet';
import L from 'leaflet';
import geojson from '../data/wojewodztwa-medium.geojson.json'

const center = [52, 19.2];

function getVoivodeshipName(feature, layer) {
  if (feature.properties && feature.properties.nazwa) {
    layer.bindPopup(feature.properties.nazwa);
  }
}

function onEachFeature(feature, layer) {
  layer.on('mouseover', function (e) {
    // bindPopup
    getVoivodeshipName(feature, layer);
    // show voivodeship
    // addTextToDiv(feature.properties.nazwa);

    this.openPopup();
    // style
    this.setStyle({
      fillColor: '#eb4034',
      weight: 2,
      color: '#eb4034',
      fillOpacity: 0.7,
    });
  });
  layer.on('mouseout', function () {
    this.closePopup();
    // style
    this.setStyle({
      fillColor: '#3388ff',
      weight: 2,
      color: '#3388ff',
      fillOpacity: 0.2,
    });
  });
}

const MapWrapper = () => {
  const [map, setMap] = useState(null);
  const [element, setElement] = useState(null);

  useEffect(() => {
    if (map) {
      const legend = L.control({ position: "bottomleft" });

      legend.onAdd = () => {
        const div = L.DomUtil.create("div", "legend");
        div.innerHTML = `click/hover on polygon`;
        setElement(div);
        return div;
      };

      legend.addTo(map);
    }
  }, [map]);

  return (
    <MapContainer whenCreated={setMap} center={center} zoom={6} scrollWheelZoom={false}>
      <TileLayer
        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />

      <GeoJSON data={geojson} onEachFeature={onEachFeature} />

    </MapContainer>
  )
}

export default MapWrapper;