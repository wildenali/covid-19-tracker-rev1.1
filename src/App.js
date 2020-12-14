import React, { useState, useEffect } from "react";
import { MenuItem, FormControl, Select, Menu } from '@material-ui/core'
import './App.css';
import InfoBox from "./InfoBox";
import Map from "./Map";
import "leaflet/dist/leaflet.css";


function App() {

  const [countries, setCountries] = useState([]);
  const [country, setCountry] = useState(["worldwide"]);

  const [areas, setAreas] = useState([
    'Area 1',
    'Area 2',
    'Area 3',
    'Area 4',
    'Area 5',
    'Area 6',
    'Area 7',
    'Area 8',
    'Area 9',
    'Area 10',
  ]);
  const [area, setArea] = useState(["piliharea"])

  const [mapCenter, setMapCenter] = useState({ lat: -6.087296041219529, lng: 106.74814415551275 }); // pik -6.087296041219529, 106.74814415551275
  const [mapZoom, setMapZoom] = useState(15);

  // useEffect run a piece of code based on a given condition
  // the code inside here will rin once when the component loads and not again
  useEffect(() => {
    // async -> send a request,wait for it, do something with input
    const getCountriesData = async() => {
      await fetch("https://disease.sh/v3/covid-19/countries")
        .then((response) => response.json())
        .then((data) => {
          const countries = data.map((negara) => ({
            name: negara.country,  // UnitedStated, United Kingdom, etc
            value: negara.countryInfo.iso2, // UK, USA, FR
          }));
          setCountries(countries);
        })
    };
    getCountriesData(countries);
  }, [])

  const onCountryChange = async (event) => {
    const countryCode = event.target.value;
    // console.log("Kodenya -->> ", countryCode);
    setCountry(countryCode);
  };
  
  const onAreaChange = async (event) => {
    const areaCode = event.target.value;
    // console.log("Area -->> ", areaCode);
    setArea(areaCode);
  };
  
  return (
    <div className="App">

      {/* Header */}
      <div className="app_header">
        <h1>Corona Virus Tracker</h1>
        
        {/* Map */}
        <Map center={mapCenter} zoom={mapZoom} />

        {/* Title + Selected Input dropdown field */}
        <FormControl className="app_dropdown">
          <Select variant="outlined" onChange={onCountryChange} value={country}>
            <MenuItem value="worldwide">Worldwide</MenuItem>
            {
              countries.map((country) =>
                <MenuItem value={country.value}>{country.name}</MenuItem>
              )
            }
          </Select>
        </FormControl>
        <FormControl className="app_dropdown_border_virtual">
          <Select variant="outlined" onChange={onAreaChange} value={area}>
            <MenuItem value="piliharea">Pilih Area</MenuItem>
            {
              areas.map((area) =>
                <MenuItem value={area}>{area}</MenuItem>
              )
            }
          </Select>
        </FormControl>
      </div>

      
      {/* InfoBox */}
      <div className="app__stats">
        {/* InfoBoxs  title="Coronavirus recoveries" */}
        <InfoBox title="Coronavirus Cases" cases={1110} total={2000} />
              
        {/* InfoBoxs  title="Coronavirus recoveries" */}
        <InfoBox title="Recovered" cases={1112} total={1500} />

        {/* InfoBoxs title="Death*/}
        <InfoBox title="Death" cases={532} total={500} />
      </div>


      {/* Table */}
      {/* Graph */}

    </div>
  );
}

export default App;
