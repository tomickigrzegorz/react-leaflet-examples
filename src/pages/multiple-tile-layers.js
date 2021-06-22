import React from 'react';
import { MapContainer, TileLayer, LayersControl } from 'react-leaflet';

const center = [52.22977, 21.01178];

const MapWrapper = () => {
  return (
    <MapContainer center={center} zoom={13} scrollWheelZoom={false}>
      <LayersControl position="topright">
        <LayersControl.BaseLayer checked name="OSM Mapnik">
          <TileLayer
            attribution='&copy; <a href="http://openstreetmap.org">OpenStreetMap</a>OpenStreetMap</a> contributors'
            url="http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
        </LayersControl.BaseLayer>
        <LayersControl.BaseLayer name="CartoDB">
          <TileLayer
            attribution='&copy; <a href="http://cartodb.com/attributions">CartoDB</a> contributors'
            url="https://{s}.basemaps.cartocdn.com/rastertiles/dark_all/{z}/{x}/{y}.png"
          />
        </LayersControl.BaseLayer>
      </LayersControl>
    </MapContainer>
  )
}

export default MapWrapper;