import { useRef, useEffect, useState } from "react";
import { MapContainer, useMap, TileLayer, Marker, Popup } from "react-leaflet";
import styles from "./controlling-the-map-from-outside-the-map.module.css";
import tileLayer from "../util/tileLayer";

const center = [52.2295, 21.01];

const points = [
  {
    id: "1",
    lat: 52.228785157729114,
    lng: 21.006867885589603,
    title: "Marker 1",
  },
  {
    id: "2",
    lat: 52.22923201880194,
    lng: 21.00897073745728,
    title: "Marker 2",
  },
  {
    id: "3",
    lat: 52.22963944703663,
    lng: 21.01091265678406,
    title: "Marker 3",
  },
  {
    id: "4",
    lat: 52.229928587386496,
    lng: 21.01218938827515,
    title: "Marker 4",
  },
];

const ListMarkers = ({ onItemClick }) => {
  return (
    <div className={styles.markersList}>
      {points.map(({ title }, index) => (
        <div
          className={styles.markerItem}
          key={index}
          onClick={(e) => {
            e.preventDefault();
            onItemClick(index);
          }}
        >
          {title}
        </div>
      ))}
    </div>
  );
};

const MyMarkers = ({ data, selectedIndex }) => {
  return data.map((item, index) => (
    <PointMarker
      key={index}
      content={item.title}
      center={{ lat: item.lat, lng: item.lng }}
      openPopup={selectedIndex === index}
    />
  ));
};

const PointMarker = ({ center, content, openPopup }) => {
  const map = useMap();
  const markerRef = useRef(null);

  useEffect(() => {
    if (openPopup) {
      map.flyToBounds([center]);
      markerRef.current.openPopup();
    }
  }, [map, center, openPopup]);

  return (
    <Marker ref={markerRef} position={center}>
      <Popup>{content}</Popup>
    </Marker>
  );
};

const MapWrapper = () => {
  const [selected, setSelected] = useState();

  function handleItemClick(index) {
    setSelected(index);
  }

  return (
    <>
      <MapContainer center={center} zoom={16} scrollWheelZoom={false}>
        <TileLayer {...tileLayer} />

        <MyMarkers selectedIndex={selected} data={points} />
      </MapContainer>

      <ListMarkers data={points} onItemClick={handleItemClick} />
    </>
  );
};

export default MapWrapper;
