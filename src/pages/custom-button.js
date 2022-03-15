import { useState, useEffect } from "react";
import { MapContainer, TileLayer } from "react-leaflet";
import L from "leaflet";
import "./custom-button.css";
import tileLayer from "../util/tileLayer";

const center = [52.22977, 21.01178];

const CustomButton = ({ map }) => {
  useEffect(() => {
    if (!map) return;

    const customControler = L.Control.extend({
      options: {
        position: "topright",
      },

      onAdd: function () {
        const btn = L.DomUtil.create("button");
        btn.title = "pooooooooooooop rotation";
        btn.textContent = "💩";
        btn.className = "customButton";

        btn.onmouseover = function () {
          this.style.transform = "scale(1.3)";
        };

        btn.onmouseout = function () {
          this.style.transform = "scale(1)";
        };

        btn.onclick = function () {
          document.body.classList.add("rotate");

          setTimeout(() => {
            document.body.classList.remove("rotate");
          }, 4000);
        };

        return btn;
      },
    });

    map.addControl(new customControler());
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

      <CustomButton map={map} />
    </MapContainer>
  );
};

export default MapWrapper;
