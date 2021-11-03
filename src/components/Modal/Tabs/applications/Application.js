import { FormControl, InputLabel, MenuItem, Select, TextField } from "@mui/material";
import React from "react";
import "./application.css";
const Application = ({ index, tabIndex }) => {
  const [age, setAge] = React.useState("");

  const handleChange = (event) => {
    setAge(event.target.value);
  };

  return (
    index === tabIndex && (
      <div className="form-application">
        <div className="expected-salery-fileds row align-items-end">
          <div className="label-fileds col-md-4">Expected Salary</div>
          <div className="input-field col-md-4">
            <TextField sx={{ width: "100%" }} id="standard-basic" label="From" variant="standard" />
          </div>
          <div className="input-field col-md-4">
            <TextField sx={{ width: "100%" }} id="standard-basic" label="To" variant="standard" />
          </div>
        </div>
        <div className="application-date-fileds row align-items-end">
          <div className="label-fileds col-md-4">Applied Date</div>
          <div className="input-field col-md-4">
            <TextField sx={{ width: "100%" }} type="date" id="standard-basic" variant="standard" />
          </div>
          <div className="input-field col-md-4">
            <TextField sx={{ width: "100%" }} type="date" id="standard-basic" variant="standard" />
          </div>
        </div>
        <div className="notice-priod-fileds row align-items-end">
          <div className="label-fileds col-md-4">Notice Period</div>
          <div className="input-field col-md-8">
            <FormControl variant="standard" sx={{ width: "100%" }}>
              <InputLabel id="demo-simple-select-standard-label">Age</InputLabel>
              <Select labelId="demo-simple-select-standard-label" id="demo-simple-select-standard" value={age} onChange={handleChange} label="Age">
                <MenuItem value="">
                  <em>None</em>
                </MenuItem>
                <MenuItem value={10}>Ten</MenuItem>
                <MenuItem value={20}>Twenty</MenuItem>
                <MenuItem value={30}>Thirty</MenuItem>
              </Select>
            </FormControl>
          </div>
        </div>
      </div>
    )
  );
};

export default Application;
