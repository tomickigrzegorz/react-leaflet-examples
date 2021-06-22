import React, { useRef, useState, useEffect } from 'react';
import { MapContainer, TileLayer, ZoomControl, Marker, Popup } from 'react-leaflet';
import L from 'leaflet';
import styled from 'styled-components';

const Wrapper = styled.div`
  position: relative;
`;

const Info = styled.div`
  position: absolute;
  z-index: 999;
  border: 2px solid #0084ff;
  top: 15px;
  bottom: 15px;
  left: 15px;
  width: 30%;
  background: #fff;
  padding: 20px;
  border-radius: 5px;
  box-shadow: 0 0 10px 10px rgb(0 140 255 / 20%);
  overflow: hidden;
`;

const center = [52.22977, 21.01178];

const infoText = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati a deserunt distinctio vitae! Dolores officiis animi ab ut officia consequuntur fuga, possimus et eligendi, facilis libero nulla repellat modi magnam!";

const MapWrapper = () => {
  const infoRef = useRef(0);
  const [map, setMap] = useState(null)

  useEffect(() => {
    if (map) {
      const ref = infoRef.current.offsetWidth;

      const visibleMarkers = [];
      map.eachLayer((layer) => {
        if (layer instanceof L.Marker) {
          visibleMarkers.push(layer);
        }
      })

      const featureGroup = L.featureGroup(visibleMarkers).getBounds()

      function handleResize() {
        map.fitBounds(featureGroup, {
          paddingTopLeft: [ref + 10, 10]
        })
      }

      handleResize();

      window.addEventListener('resize', handleResize)

      return _ => {
        window.removeEventListener('resize', handleResize)
      }
    }

  }, [map])

  return (
    <Wrapper>
      <Info ref={infoRef}>
        {infoText}
      </Info>
      <MapContainer whenCreated={setMap} center={center} zoom={18} zoomControl={false} scrollWheelZoom={false}>
        <ZoomControl position={'topright'} />
        <TileLayer
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />

        <Marker position={center}>
          <Popup>Center Warsaw</Popup>
        </Marker>

      </MapContainer>
    </Wrapper>
  )
}

export default MapWrapper;