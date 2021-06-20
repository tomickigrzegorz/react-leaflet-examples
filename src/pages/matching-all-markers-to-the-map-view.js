import React from 'react';
import L from 'leaflet';
import { MapContainer, useMapEvent, FeatureGroup, TileLayer, Marker, Popup } from 'react-leaflet';

const points = [
  {
    lat: 52.230020586193795,
    lng: 21.01083755493164,
    title: 'point 1'
  },
  {
    lat: 52.22924516170657,
    lng: 21.011320352554325,
    title: 'point 2'
  },
  {
    lat: 52.229511304688444,
    lng: 21.01270973682404,
    title: 'point 3'
  },
  {
    lat: 52.23040500771883,
    lng: 21.012146472930908,
    title: 'point 4'
  },
];

function ControllingGroup() {
  const map = useMapEvent({
    layeradd(e) {
      let bounds = new L.LatLngBounds();
      map.eachLayer(function (layer) {
        if (layer instanceof L.FeatureGroup) {
          bounds.extend(layer.getBounds());
        }
      });

      if (bounds.isValid()) {
        map.fitBounds(bounds);
      }
    }
  })

  return null
}

const MapWrapper = () => {
  const position = [52.22977, 21.01178];
  return (
    <MapContainer className="markercluster-map" center={position} zoom={25} scrollWheelZoom={false}>
      <TileLayer
        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />

      <FeatureGroup>
        {points.map(({ lat, lng, title }, index) => (
          <Marker key={index} position={[lat, lng]}>
            <Popup>{title}</Popup>
          </Marker>
        ))}
      </FeatureGroup>

      <ControllingGroup />
    </MapContainer>
  )
}

export default MapWrapper;