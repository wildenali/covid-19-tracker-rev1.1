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
