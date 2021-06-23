import { CRS } from 'leaflet';
import React from 'react';
import { MapContainer, useMap, ImageOverlay } from 'react-leaflet';

const center = [52.22977, 21.01178];

function OverlayImage() {
  const map = useMap();
  const getBounds = map.getBounds();

  return (
    <ImageOverlay bounds={getBounds} url={'https://tomik23.github.io/leaflet-examples/static/factory_UML.png'} transparent={true} />
  );
}

const MapWrapper = () => {
  return (
    <MapContainer crs={CRS.Simple} minZoom={-4} maxZoom={1} center={center} zoom={18} scrollWheelZoom={false}>
      <OverlayImage />
    </MapContainer>
  )
}

export default MapWrapper;