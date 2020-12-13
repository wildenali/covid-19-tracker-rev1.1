import React, { useState, useEffect } from "react";
import { MenuItem, FormControl, Select, Menu } from '@material-ui/core'
import './App.css';



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


      {/* InfoBox Cases */}
      {/* InfoBox Recovered*/}
      {/* InfoBox Deaths*/}

      {/* Table */}
      {/* Graph */}

      {/* Map */}
    </div>
  );
}

export default App;
