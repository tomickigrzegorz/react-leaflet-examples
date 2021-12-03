import { useState, useEffect, useRef } from "react";
import { Marker, MapContainer, TileLayer, Popup } from "react-leaflet";
import L from "leaflet";
import tileLayer from "../util/tileLayer";

const center = [52.22977, 21.01178];

const Legend = ({ map }) => {
  const [view, setView] = useState(true);
  const markerRef = useRef(null);

  useEffect(() => {
    if (!map) return;

    const legend = L.control({ position: "bottomleft" });

    legend.onAdd = () => {
      legend.div = L.DomUtil.create("div", "description");

      L.DomEvent.disableClickPropagation(legend.div);

      legend.div.innerHTML = `We check if the marker is in the page view. Move the marker so that it is outside the map. Marker in view: <b style="color: ${
        view ? "black" : "red"
      }">${view}</b>`;

      return legend.div;
    };

    legend.addTo(map);

    const checkIfMarkerIsInViewport = () => {
      const mapBounds = map.getBounds();
      const contains = mapBounds.contains(markerRef.current.getLatLng());
      setView(contains);
    };

    map.on("moveend", checkIfMarkerIsInViewport);

    // remove the legend
    return () => {
      legend.remove();
      map.off("moveend", checkIfMarkerIsInViewport);
    };
  }, [map, view]);

  return (
    <Marker ref={markerRef} position={center}>
      <Popup>Center Warsaw</Popup>
    </Marker>
  );
};

const MapWrapper = () => {
  const [map, setMap] = useState(null);
  return (
    <MapContainer
      whenCreated={setMap}
      center={center}
      zoom={18}
      scrollWheelZoom={false}
    >
      <TileLayer {...tileLayer} />

      <Legend map={map} />
    </MapContainer>
  );
};

export default MapWrapper;
