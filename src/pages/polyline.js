import { MapContainer, TileLayer, Popup, Polyline } from 'react-leaflet';
import tileLayer from '../util/tileLayer';

const center = [52.2302, 21.01258];

const points = [
  [52.2308124251888, 21.011003851890568],
  [52.2302604393307, 21.01121842861176],
  [52.2297445891999, 21.011282801628116],
  [52.22953759032849, 21.011492013931278],
  [52.22954416173605, 21.01194798946381],
  [52.22967558968336, 21.012285947799686],
  [52.2300008721797, 21.012935042381287],
  [52.230306438414374, 21.014378070831302],
];

const MapWrapper = () => {
  return (
    <MapContainer center={center} zoom={18} scrollWheelZoom={false}>

      <TileLayer {...tileLayer} />

      <Polyline
        color={'red'}
        opacity={0.7}
        weight={20}
        positions={points}
      >

        <Popup>Polygon</Popup>
      </Polyline>

    </MapContainer>
  )
}

export default MapWrapper;