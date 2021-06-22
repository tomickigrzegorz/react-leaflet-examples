import React, { useRef, useEffect, useState } from 'react';
import { MapContainer, useMap, TileLayer, Marker, Popup } from 'react-leaflet';
import styled from 'styled-components';

const MarkersList = styled.div`
  display: flex;
  justify-content: space-between;
  cursor: pointer;
  max-width: 350px;
  margin: auto;
  color: salmon;
`;

const MarkerItem = styled.div`
  &:hover {
    padding-bottom: 5px;
    border-bottom: 1px solid salmon;
  }
`;

const center = [52.2295, 21.01];

const points = [
  {
    id: '1',
    lat: 52.228785157729114,
    lng: 21.006867885589603,
    title: 'Marker 1'
  },
  {
    id: '2',
    lat: 52.22923201880194,
    lng: 21.00897073745728,
    title: 'Marker 2'
  },
  {
    id: '3',
    lat: 52.22963944703663,
    lng: 21.01091265678406,
    title: 'Marker 3'
  },
  {
    id: '4',
    lat: 52.229928587386496,
    lng: 21.01218938827515,
    title: 'Marker 4'
  },
]

function ListMarkers(props) {
  const { onItemClick } = props;
  return (
    <MarkersList>
      {points.map(({ title }, index) => (
        <MarkerItem key={index}
          onClick={e => {
            e.preventDefault();
            onItemClick(index);
          }}>
          {title}
        </MarkerItem>
      ))}
    </MarkersList>
  );
}

function MyMarkers(props) {
  const { data, selectedIndex } = props;
  return data.map((item, index) => (
    <PointMarker
      key={index}
      content={item.title}
      center={{ lat: item.lat, lng: item.lng }}
      openPopup={selectedIndex === index}
    />
  ));
}

function PointMarker(props) {
  const map = useMap();
  const markerRef = useRef(null);
  const { center, content, openPopup } = props;

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
}

const MapWrapper = () => {
  const [selected, setSelected] = useState();

  function handleItemClick(index) {
    setSelected(index);
  }

  return (
    <>
      <MapContainer center={center} zoom={16} scrollWheelZoom={false}>
        <TileLayer
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />

        <MyMarkers selectedIndex={selected} data={points} />
      </MapContainer>

      <ListMarkers data={points} onItemClick={handleItemClick} />
    </>
  )
}

export default MapWrapper;