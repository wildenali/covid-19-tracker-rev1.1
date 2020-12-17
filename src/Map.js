import React from "react";
import "./Map.css";
import { Map as LeafletProvider, TileLayer } from "react-leaflet";
import { showDataOnMap } from "./utils";

function Map({ countries, casesType, center, zoom }) {
  return (
    <div className="map">
      <LeafletProvider center={center} zoom={zoom}>
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        />
        {/* Loop through countries and draw circles on the screen */}
        {showDataOnMap(countries, casesType)}
      </LeafletProvider>
    </div>
  );
}

export default Map;