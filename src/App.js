import React from "react";
import { MenuItem, FormControl, Select, Menu } from '@material-ui/core'
import './App.css';



function App() {
  return (
    <div className="App">

      {/* Header */}
      <div className="app_header">
        <h1>Corona Virus Tracker</h1>

        {/* Title + Selected Input dropdown field */}
        <FormControl className="app_dropdown">
          <Select variant="outlined" value="abc">
            <MenuItem value="z">Worldwide</MenuItem>
            <MenuItem value="a">Option 2</MenuItem>
            <MenuItem value="b">Option 3</MenuItem>
            <MenuItem value="c">Option 4</MenuItem>
          </Select>
        </FormControl>
        <FormControl className="app_dropdown_border_virtual">
          <Select variant="outlined" value="abc">
            <MenuItem value="area_1">Area 1</MenuItem>
            <MenuItem value="area_2">Area 2</MenuItem>
            <MenuItem value="area_3">Area 3</MenuItem>
            <MenuItem value="area_4">Area 4</MenuItem>
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
