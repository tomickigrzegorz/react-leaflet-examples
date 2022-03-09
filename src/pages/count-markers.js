import { useState, useEffect, useRef } from "react";
import {
  Marker,
  MapContainer,
  TileLayer,
  Popup,
  useMapEvent,
  FeatureGroup,
} from "react-leaflet";
import "./custom-button.css";
import L from "leaflet";
import tileLayer from "../util/tileLayer";

const center = [52.22977, 21.01178];

// custom marker
const customMarker = new L.divIcon({
  className: "leaflet-marker-icon",
  html: `<span></span>`,
  popupAnchor: [10, -7],
});

// group of markers
const markers = [
  [52.22881144379907, 21.012790203094486],
  [52.22972487506327, 21.01490378379822],
  [52.2312362668144, 21.015590429306034],
  [52.23117055519954, 21.01240396499634],
  [52.23036886566593, 21.01441025733948],
  [52.23031629535464, 21.00946426391602],
  [52.23185395123992, 21.009035110473636],
  [52.231926232898196, 21.010665893554688],
  [52.22940287625878, 21.008058786392215],
  [52.230999704545596, 21.007372140884403],
  [52.23494881505829, 21.007146835327152],
  [52.234528294213646, 20.998048782348636],
  [52.229718303682425, 20.99847793579102],
  [52.22364593211137, 21.00967884063721],
  [52.226485066348154, 21.023368835449222],
  [52.23158453674943, 21.024527549743656],
  [52.23773466502915, 21.023111343383793],
  [52.23639432507655, 21.01714611053467],
  [52.23268846867547, 21.018304824829105],
  [52.23011258481046, 21.02045059204102],
  [52.22861429789497, 21.007318496704105],
  [52.23245191414524, 21.004357337951664],
  [52.2348962501706, 21.00594520568848],
  [52.23710392185826, 21.010279655456547],
  [52.23245191414524, 21.013627052307132],
  [52.23163710555889, 21.00847721099854],
  [52.23418661809385, 21.006503105163578],
  [52.23673598420239, 20.998263359069828],
  [52.23279360361761, 20.992255210876465],
  [52.226853088976455, 20.990538597106937],
  [52.22354077550519, 20.994787216186523],
  [52.23736673260212, 21.029806137084964],
  [52.23032943793832, 21.012237668037415],
  [52.229136732626934, 21.010800004005436],
  [52.22988587358971, 21.011127233505253],
  [52.229708446609365, 21.012618541717533],
];

const AddIndexToAllMarkers = () => {
  let allMarkersCount = 0;
  const map = useMapEvent({
    layeradd() {
      map.eachLayer((layer) => {
        // if layer is a marker
        if (layer instanceof L.Marker) {
          // increase counter
          allMarkersCount++;
        }
      });
    },
  });

  return null;
};

const Legend = ({ map }) => {
  const [view, setView] = useState(true);
  const markerRef = useRef(null);

  useEffect(() => {
    if (!map) return;

    const legend = L.control({ position: "bottomleft" });

    legend.onAdd = () => {
      const div = L.DomUtil.create("div", "description");
      L.DomEvent.disableClickPropagation(div);

      const markersInView = L.DomUtil.create("div", "markers-in-view");
      markersInView.insertAdjacentHTML(
        "beforeend",
        "Markers in view: <strong>0</strong>"
      );

      const allMarkers = L.DomUtil.create("div", "all-markers");
      allMarkers.insertAdjacentHTML(
        "beforeend",
        "All markers on map: <strong>0</strong>"
      );

      div.appendChild(markersInView);
      div.appendChild(allMarkers);

      return div;
    };

    legend.addTo(map);

    // --------------------------------------------------

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

  return null;
};

const MapWrapper = () => {
  const [map, setMap] = useState(null);
  const markerRef = useRef(null);
  return (
    <MapContainer
      whenCreated={setMap}
      center={center}
      zoom={18}
      scrollWheelZoom={false}
    >
      <TileLayer {...tileLayer} />

      <Legend map={map} ref={markerRef} />

      <FeatureGroup>
        {markers.map(([lat, lng], index) => (
          <Marker
            icon={customMarker}
            ref={markerRef}
            key={index}
            position={[lat, lng]}
          >
            <Popup>index: {index}</Popup>
          </Marker>
        ))}
      </FeatureGroup>
    </MapContainer>
  );
};

export default MapWrapper;
