import React, { useState } from "react";
import { MenuItem, FormControl, Select, Menu } from '@material-ui/core'
import './App.css';



function App() {

  const [countries, setCountries] = useState([
    "USA",
    "UK",
    "India",
    "Indonesia",
  ]);

  const [areas, setAreas] = useState([
    "Area 1",
    "Area 2",
    "Area 3",
    "Area 4",
  ]);

  return (
    <div className="App">

      {/* Header */}
      <div className="app_header">
        <h1>Corona Virus Tracker</h1>

        {/* Title + Selected Input dropdown field */}
        <FormControl className="app_dropdown">
          <Select variant="outlined" value="abc">
            {
              countries.map((country) =>
                <MenuItem value={country}>{country}</MenuItem>
              )
            }
          </Select>
        </FormControl>
        <FormControl className="app_dropdown_border_virtual">
          <Select variant="outlined" value="abc">
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
