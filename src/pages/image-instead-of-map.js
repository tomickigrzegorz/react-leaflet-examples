import { CRS } from 'leaflet';
import { MapContainer, ImageOverlay, useMap } from 'react-leaflet';

let imageBounds = [
  [50, 50], // padding
  [847, 1280], // image dimensions
];

const OverlayImage = () => {
  const map = useMap();

  map.fitBounds(imageBounds);

  return (
    <ImageOverlay
      bounds={imageBounds}
      url={'https://tomickigrzegorz.github.io/leaflet-examples/static/factory_UML.png'}
      transparent={true}
    />
  );
}

const MapWrapper = () => {
  return (
    <MapContainer
      crs={CRS.Simple}
      maxZoom={1}
      minZoom={-4}
      scrollWheelZoom={false}>

      <OverlayImage />

    </MapContainer>
  )
}

export default MapWrapper;
