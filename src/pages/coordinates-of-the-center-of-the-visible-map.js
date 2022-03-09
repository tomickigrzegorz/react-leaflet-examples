import { useEffect } from "react";
import { MapContainer, TileLayer, useMap } from "react-leaflet";
import "./coordinates-of-the-center-of-the-visible-map.css";
import L from "leaflet";
import tileLayer from "../util/tileLayer";

const center = [52.22977, 21.01178];

const GetCoordinates = () => {
  const map = useMap();

  useEffect(() => {
    if (!map) return;

    const legend = L.control({ position: "bottomleft" });

    const div = L.DomUtil.create("div", "legend");

    legend.onAdd = () => {
      const { lat, lng } = map.getCenter();
      const zoom = map.getZoom();

      L.DomEvent.disableClickPropagation(div);

      div.innerHTML = `center: ${lat.toFixed(5)}, ${lng.toFixed(
        5
      )} | zoom: ${zoom}`;

      return div;
    };

    legend.addTo(map);

    map.on("dragend zoomend", () => {
      const { lat, lng } = map.getCenter();
      const zoom = map.getZoom();
      div.innerHTML = `center: ${lat.toFixed(5)}, ${lng.toFixed(
        5
      )} | zoom: ${zoom}`;
    });
  }, [map]);

  return null;
};

const MapWrapper = () => {
  return (
    <MapContainer
      className={"center-of-map"}
      center={center}
      zoom={18}
      scrollWheelZoom={false}
    >
      <TileLayer {...tileLayer} />

      <GetCoordinates />
    </MapContainer>
  );
};

export default MapWrapper;
