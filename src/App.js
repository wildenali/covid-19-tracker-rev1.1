import React, { useState, useEffect } from "react";
import { MenuItem, FormControl, Select, Card, CardContent } from '@material-ui/core'
import './App.css';
import InfoBox from "./InfoBox";
import Map from "./Map";
import Table from "./Table";
import { sortData } from "./utils";
import LineGraph from "./LineGraph";
import "leaflet/dist/leaflet.css";


function App() {

  const [countries, setCountries] = useState([]);
  const [country, setCountry] = useState(["worldwide"]);
  const [countryInfo, setCountryInfo] = useState([]);
  const [tableData, setTableData] = useState([]);

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
  const [mapCountries, setMapCountries] = useState([]);

  useEffect(() => {
    fetch("https://disease.sh/v3/covid-19/all")
      .then((response) => response.json())
      .then((data) => {
        setCountryInfo(data);
      });
  }, []);

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

          const sortedData = sortData(data);
          setTableData(sortedData);
          setMapCountries(data);
          setCountries(countries);
        })
    };
    getCountriesData(countries);
  }, [])

  const onCountryChange = async (event) => {
    const countryCode = event.target.value;
    // console.log("Kodenya -->> ", countryCode);
    setCountry(countryCode);

    // https://disease.sh/v3/covid-19/all
    // https://disease.sh/v3/covid-19/countries/[COUNTRY_CODE]
    const url =
      countryCode === "worldwide"
        ? "https://disease.sh/v3/covid-19/all"
        : `https://disease.sh/v3/covid-19/countries/${countryCode}`;

    await fetch(url)
      .then((response) => response.json())
      .then((data) => {
        setCountry(countryCode);
        setCountryInfo(data); // All of data from the country response
        console.log(data.countryInfo);                                // cara ngezoom di bagian negara yg dipilih
        setMapCenter([data.countryInfo.lat, data.countryInfo.long]);  // cara ngezoom di bagian negara yg dipilih
        setMapZoom(6);                                                // cara ngezoom di bagian negara yg dipilih
      });
  };
  console.log("Country Info >>>", countryInfo);
  // console.log("Data Info >>>", tableData);

  const onAreaChange = async (event) => {
    const areaCode = event.target.value;
    // console.log("Area -->> ", areaCode);
    setArea(areaCode);
  };
  
  return (
    <div className="App">

      <div className="app__title">
        <h1>Border Virtual</h1>
      </div>
      {/* Left Side */}
      <div className="app__left">
        {/* Header */}
        <div className="app__header">
          
          {/* Map */}
          <Map countries={mapCountries} center={mapCenter} zoom={mapZoom} />

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
          <InfoBox title="Coronavirus Cases" cases={countryInfo.todayCases} total={countryInfo.cases} />
                
          {/* InfoBoxs  title="Coronavirus recoveries" */}
          <InfoBox title="Recovered" cases={countryInfo.todayRecovered} total={countryInfo.recovered} />

          {/* InfoBoxs title="Death*/}
          <InfoBox title="Death" cases={countryInfo.todayDeaths} total={countryInfo.deaths} />
        </div>
      </div>

      <Card className="app__right">
        {/* Table */}
        <Table countries={tableData} />
        
        {/* Graph */}
        <h3>Live Cases by Worldwide</h3>
        <LineGraph />
      </Card>

    </div>
  );
}

export default App;
