import { MapContainer, TileLayer, LayersControl } from 'react-leaflet';

const center = [52.22977, 21.01178];

const layers = [
  {
    name: "Osm Mapnik",
    attribution: '&copy; <a href="http://openstreetmap.org">OpenStreetMap</a>OpenStreetMap</a> contributors',
    url: 'http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
  },
  {
    name: "CartoDB",
    attribution: '&copy; <a href="http://cartodb.com/attributions">CartoDB</a> contributors',
    url: 'https://{s}.basemaps.cartocdn.com/rastertiles/dark_all/{z}/{x}/{y}.png'
  }
]

const MapWrapper = () => {


  return (
    <MapContainer center={center} zoom={13} scrollWheelZoom={false}>

      <LayersControl position="topright">

        {layers.map((layer, index) => {
          return (
            <LayersControl.BaseLayer
              key={index}
              checked={index === 0 ? true : false}
              name={layer.name}
            >
              <TileLayer
                attribution={layer.attribution}
                url={layer.url}
              />
            </LayersControl.BaseLayer>
          )
        })}

      </LayersControl>
    </MapContainer>
  )
}

export default MapWrapper;