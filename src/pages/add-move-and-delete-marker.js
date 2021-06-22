import React, { useState, useEffect } from 'react';
import { Marker, useMap, MapContainer, LayerGroup, TileLayer, Popup } from 'react-leaflet';
import L from 'leaflet';

const center = [52.22977, 21.01178];

function removeMarker(index, map, legend) {
  map.eachLayer((layer) => {
    if (layer instanceof L.Marker) {
      if (layer.options.uniceid !== index) return;
      map.removeLayer(layer);
      legend.textContent = 'goodbye marker 💩'
    }
  });

  return null;
}

function showMarkers(legend, markers, map) {
  return markers.map((marker, index) => {
    return <Marker
      key={index}
      uniceid={index}
      position={marker}
      draggable={true}
      eventHandlers={{
        moveend(e) {
          const { lat, lng } = e.target.getLatLng();
          legend.textContent = `change position: ${lat} ${lng}`;
        }
      }}
    >
      <Popup>
        <button onClick={() => removeMarker(index, map, legend)}>delete marker 💔</button>
      </Popup>
    </Marker>
  })
}


function MyMarkers() {
  const map = useMap();
  const [marker, setMarker] = useState([])
  const [legend, setLegend] = useState(null)

  useEffect(() => {
    if (map) {
      const legend = L.control({ position: "bottomleft" });

      const div = L.DomUtil.create("div", "legend");
      legend.onAdd = () => {
        div.textContent = `click on the map, move the marker, click on the marker`;
        return div;
      };

      legend.addTo(map);

      map.on('click', (e) => {
        const { lat, lng } = e.latlng;
        div.textContent = `new marker: ${e.latlng}`;
        setMarker(mar => [...mar, [lat, lng]]);
        setLegend(div);
      })
    }

  }, [map]);

  return marker?.length <= 0 ? null : showMarkers(legend, marker, map);

}

const MapWrapper = () => {
  return (
    <MapContainer center={center} zoom={18} scrollWheelZoom={false}>
      <TileLayer
        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />

      <MyMarkers />

    </MapContainer>
  )
}

export default MapWrapper;

