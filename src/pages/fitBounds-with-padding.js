import { useRef, useState, useEffect } from "react";
import {
  MapContainer,
  TileLayer,
  ZoomControl,
  Marker,
  Popup,
} from "react-leaflet";
import L from "leaflet";
import styles from "./fitBounds-with-padding.module.css";
import tileLayer from "../util/tileLayer";

const center = [52.22977, 21.01178];

const infoText =
  "Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati a deserunt distinctio vitae! Dolores officiis animi ab ut officia consequuntur fuga, possimus et eligendi, facilis libero nulla repellat modi magnam!";

const MapWrapper = () => {
  const infoRef = useRef(0);
  const [map, setMap] = useState(null);

  useEffect(() => {
    if (!map) return;

    const ref = infoRef.current.offsetWidth;

    const visibleMarkers = [];
    map.eachLayer((layer) => {
      if (layer instanceof L.Marker) {
        visibleMarkers.push(layer);
      }
    });

    const featureGroup = L.featureGroup(visibleMarkers).getBounds();

    function handleResize() {
      map.fitBounds(featureGroup, {
        paddingTopLeft: [ref + 10, 10],
      });
    }

    handleResize();

    window.addEventListener("resize", handleResize);

    return (_) => {
      window.removeEventListener("resize", handleResize);
    };
  }, [map]);

  return (
    <div className={styles.wrapper}>
      <div className={styles.info} ref={infoRef}>
        {infoText}
      </div>
      <MapContainer
        whenCreated={setMap}
        center={center}
        zoom={18}
        zoomControl={false}
        scrollWheelZoom={false}
      >
        <ZoomControl position={"topright"} />

        <TileLayer {...tileLayer} />

        <Marker position={center}>
          <Popup>Center Warsaw</Popup>
        </Marker>
      </MapContainer>
    </div>
  );
};

export default MapWrapper;
