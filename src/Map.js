import React from "react";
import "./Map.css";
import { Map as LeafletProvider, TileLayer } from "react-leaflet";

function Map({ center, zoom }) {
  return (
    <div className="map">
      <LeafletProvider center={center} zoom={zoom}>
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        />
      </LeafletProvider>
    </div>
  );
}

export default Map;