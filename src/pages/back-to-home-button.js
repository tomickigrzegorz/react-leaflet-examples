import { useState, useEffect } from "react";
import { MapContainer, TileLayer, useMapEvent } from "react-leaflet";
import "./back-to-home-button.css";
import L from "leaflet";
import tileLayer from "../util/tileLayer";

const center = [52.22977, 21.01178];

const HomeButton = ({ map }) => {
  useMapEvent({
    dragend() {
      const { lat: latD, lng: lngD } = map.getCenter();
      const { lat, lng } = map.getCenter();

      const checkEqualArrays =
        [lat, lng] !== [latD.toFixed(5) * 1, lngD.toFixed(5) * 1];

      document.body.classList[checkEqualArrays ? "add" : "remove"](
        "show-button-home"
      );
    },
  });

  useEffect(() => {
    if (!map) return;

    const customControler = L.Control.extend({
      options: {
        position: "topleft",
      },

      onAdd: function () {
        const btn = L.DomUtil.create("button", "back-to-home");
        btn.title = "pooooooooooooop rotation";
        btn.innerHTML =
          '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32"><path d="M32 18.451L16 6.031 0 18.451v-5.064L16 .967l16 12.42zM28 18v12h-8v-8h-8v8H4V18l12-9z"></path></svg>';

        btn.onclick = function () {
          map.flyToBounds([center]);
          document.body.classList.remove("show-button-home");
        };

        return btn;
      },
    });

    map.addControl(new customControler());

    const info = L.Control.extend({
      options: {
        position: "bottomleft",
      },

      onAdd: function () {
        const info = L.DomUtil.create("div", "legend");
        info.textContent = "move the map";
        return info;
      },
    });

    map.addControl(new info());
  }, [map]);

  return null;
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

      <HomeButton map={map} />
    </MapContainer>
  );
};

export default MapWrapper;
