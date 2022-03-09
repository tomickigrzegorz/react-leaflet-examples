import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import tileLayer from "../util/tileLayer";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";

import "react-tabs/style/react-tabs.css";

const center = [52.22977, 21.01178];

const content = [
  {
    title: "Sukiennice",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/b/be/A-10_Sukiennice_w_Krakowie_Krak%C3%B3w%2C_Rynek_G%C5%82%C3%B3wny_MM.jpg/1920px-A-10_Sukiennice_w_Krakowie_Krak%C3%B3w%2C_Rynek_G%C5%82%C3%B3wny_MM.jpg",
    style: { width: "100%" },
    figcaption: "Source: wikipedia.org",
    text: "Kraków,[a] also written in English as Krakow and traditionally known as Cracow, is the second-largest and one of the oldest cities in Poland. Situated on the Vistula River in Lesser Poland Voivodeship...",
    link: "https://en.wikipedia.org/wiki/Krak%C3%B3w",
  },
  {
    title: "Town Hall Tower",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e4/Krak%C3%B3w_-_Town_Hall_Tower_01a.jpg/315px-Krak%C3%B3w_-_Town_Hall_Tower_01a.jpg",
    style: { display: "flex", height: "202px", width: "auto", margin: "auto" },
    figcaption: "Source: wikipedia.org",
    text: "Town Hall Tower in Kraków, Poland (Polish: Wieża ratuszowa w Krakowie) is one of the main focal points of the Main Market Square in the Old Town district of Kraków. The Tower is the only...",
    link: "https://en.wikipedia.org/wiki/Town_Hall_Tower,_Krak%C3%B3w",
  },
];

const MapWrapper = () => {
  return (
    <MapContainer center={center} zoom={18} scrollWheelZoom={false}>
      <TileLayer {...tileLayer} />

      <Marker position={center}>
        <Popup maxWidth={320}>
          <Tabs>
            <TabList>
              <Tab>Sukiennice</Tab>
              <Tab>Town Hall Tower</Tab>
            </TabList>

            {content.map((item, index) => (
              <TabPanel key={index}>
                <figure>
                  <img src={item.image} alt={item.title} style={item.style} />
                  <figcaption>{item.figcaption}</figcaption>
                </figure>
                <div>
                  {item.text}
                  <a href={item.link} target="_blank" rel="noreferrer">
                    → show more
                  </a>
                </div>
              </TabPanel>
            ))}
          </Tabs>
        </Popup>
      </Marker>
    </MapContainer>
  );
};

export default MapWrapper;
