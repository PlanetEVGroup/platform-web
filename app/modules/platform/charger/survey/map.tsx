"use client";
import React, { useEffect } from "react";
import dynamic from "next/dynamic";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";

const Maps = ({ surveyLocations }: any) => {



  useEffect(() => {

    if (typeof window !== "undefined") {
      L.Icon.Default.mergeOptions({
        iconRetinaUrl:
          "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.3.1/images/marker-icon-2x.png",
        iconUrl:
          "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.3.1/images/marker-icon.png",
        shadowUrl:
          "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.3.1/images/marker-shadow.png",
      });
    }
  }, []);

  return (
    <>
      <MapContainer
        center={[13.7563, 100.5018]}
        zoom={12}
        style={{ height: "100%", width: "100%" }}
      >
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        />
        {surveyLocations?.map((location: any, index: any) => (
          <Marker key={index} position={[location?.lat, location?.lng]}>
            <Popup>{location?.name}</Popup>
          </Marker>
        ))}
      </MapContainer>
    </>
  );
};

export default Maps;
