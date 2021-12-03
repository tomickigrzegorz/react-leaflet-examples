import { useEffect, useState } from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import L from "leaflet";
import tileLayer from "../util/tileLayer";

const center = [52.242, 21.017532];

const colors = ["fe4848", "fe6c58", "fe9068", "feb478", "fed686"];
const labels = ["2-12.5", "12.6-16.8", "16.9-20.9", "21-25.9", "26-plus"];

const points = [
  {
    lat: 52.228956,
    lng: 21.003799,
    title: "point 1",
  },
  {
    lat: 52.258071,
    lng: 20.986805,
    title: "point 2",
  },
  {
    lat: 52.242728,
    lng: 21.041565,
    title: "point 3",
  },
  {
    lat: 52.234213,
    lng: 21.029034,
    title: "point 4",
  },
  {
    lat: 52.251661,
    lng: 21.003456,
    title: "point 5",
  },
];

const Legend = ({ map }) => {
  useEffect(() => {
    if (!map) return;

    const legend = L.control({ position: "bottomright" });

    const rows = [];
    legend.onAdd = () => {
      const div = L.DomUtil.create("div", "legend");
      colors.map((color, index) => {
        return rows.push(`
            <div class="row">
              <i style="background: #${color}"></i>${labels[index]}
            </div>
          `);
      });
      div.innerHTML = rows.join("");
      return div;
    };

    legend.addTo(map);
  }, [map]);

  return null;
};

function customMarkerIcon(color) {
  const svgTemplate = `
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" class="marker">
      <path fill-opacity=".25" d="M16 32s1.427-9.585 3.761-12.025c4.595-4.805 8.685-.99 8.685-.99s4.044 3.964-.526 8.743C25.514 30.245 16 32 16 32z"/>
      <path fill="#${color}" stroke="#fff" d="M15.938 32S6 17.938 6 11.938C6 .125 15.938 0 15.938 0S26 .125 26 11.875C26 18.062 15.938 32 15.938 32zM16 6a4 4 0 100 8 4 4 0 000-8z"/>
    </svg>`;

  return new L.DivIcon({
    className: "test",
    html: svgTemplate,
    iconSize: [40, 40],
    iconAnchor: [12, 24],
    popupAnchor: [7, -16],
  });
}

const MyMarkers = ({ data }) => {
  return data.map((item, index) => (
    <Marker
      key={index}
      icon={customMarkerIcon(colors[index])}
      position={{ lat: item.lat, lng: item.lng }}
    >
      <Popup>{item.title}</Popup>
    </Marker>
  ));
};

const MapWrapper = () => {
  const [map, setMap] = useState(null);
  return (
    <MapContainer
      whenCreated={setMap}
      center={center}
      zoom={13}
      scrollWheelZoom={false}
    >
      <TileLayer {...tileLayer} />

      <MyMarkers data={points} />

      <Legend map={map} />
    </MapContainer>
  );
};

export default MapWrapper;
