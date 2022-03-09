import { useRef, useEffect, useCallback, useState } from "react";

import { MapContainer, TileLayer } from "react-leaflet";
import styled from "styled-components";
import tileLayer from "../util/tileLayer";

const center = [52.22977, 21.01178];

const MenuUl = styled.div`
  position: absolute;
  font-size: 14px;
  background-color: #fff;
  border-radius: 2px;
  padding: 5px 0 5px 0;
  width: 150px;
  height: auto;
  margin: 0;
  list-style: none;
  box-shadow: 0 0 20px 0 #ccc;
  opacity: 1;
  transition: opacity 0.5s linear;
`;

const useContextMenu = (outerRef) => {
  const [xPos, setXPos] = useState("0px");
  const [yPos, setYPos] = useState("0px");
  const [menu, showMenu] = useState(false);

  const handleContextMenu = useCallback(
    (event) => {
      event.preventDefault();
      if (outerRef && outerRef.current.contains(event.target)) {
        setXPos(`${event.pageX}px`);
        setYPos(`${event.pageY}px`);
        showMenu(true);
      } else {
        showMenu(false);
      }
    },
    [showMenu, outerRef, setXPos, setYPos]
  );

  const handleClick = useCallback(() => {
    showMenu(false);
  }, [showMenu]);

  useEffect(() => {
    document.addEventListener("click", handleClick);
    document.addEventListener("contextmenu", handleContextMenu);
    return () => {
      document.removeEventListener("click", handleClick);
      document.removeEventListener("contextmenu", handleContextMenu);
    };
  }, [handleClick, handleContextMenu]);

  return { xPos, yPos, menu };
};

const Menu = ({ outerRef }) => {
  const { xPos, yPos, menu } = useContextMenu(outerRef);

  if (menu) {
    return (
      <ul className="menu" style={{ top: yPos, left: xPos }}>
        <li>Item1</li>
        <li>Item2</li>
        <li>Item3</li>
      </ul>
    );
  }
  return <></>;
};

const MapWrapper = () => {
  const outerRef = useRef(null);

  return (
    <MapContainer
      ref={outerRef}
      center={center}
      zoom={18}
      scrollWheelZoom={false}
    >
      <TileLayer {...tileLayer} />

      <Menu outerRef={outerRef} />
    </MapContainer>
  );
};

export default MapWrapper;
