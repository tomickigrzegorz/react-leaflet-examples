import React from 'react';
import { MapContainer, useMap, ImageOverlay } from 'react-leaflet';

function OverlayImage() {
  const map = useMap();
  const getBounds = map.getBounds();
  return getBounds === null ? null : (
    <ImageOverlay bounds={getBounds} url={'https://tomik23.github.io/leaflet-examples/static/factory_UML.png'} transparent={true} />
  );
}

const MapWrapper = () => {
  const position = [52.22977, 21.01178];

  return (
    <MapContainer minZoom={-4} center={position} zoom={18} scrollWheelZoom={false}>
      <OverlayImage />
    </MapContainer>
  )
}

export default MapWrapper;