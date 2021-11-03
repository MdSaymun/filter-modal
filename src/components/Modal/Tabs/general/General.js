import { FormControl, InputLabel, MenuItem, Select, TextField } from "@mui/material";
import React from "react";
import "./general.css";
const General = ({ index, tabIndex }) => {
  const [age, setAge] = React.useState("");

  const handleChange = (event) => {
    setAge(event.target.value);
  };

  return (
    index === tabIndex && (
      <div className="form-general">
        <div className="expected-salery-fileds row-filds row align-items-end">
          <div className="label-filed col-md-2">Age</div>
          <div className="input-field col-md-5">
            <FormControl variant="standard" sx={{ width: "100%" }}>
              <Select labelId="demo-simple-select-standard-label" id="demo-simple-select-standard" value={age} onChange={handleChange}>
                <MenuItem value="">Greater than</MenuItem>
                <MenuItem value={10}>Ten</MenuItem>
                <MenuItem value={20}>Twenty</MenuItem>
                <MenuItem value={30}>Thirty</MenuItem>
              </Select>
            </FormControl>
          </div>
          <div className="input-field col-md-5">
            <TextField sx={{ width: "100%" }} id="standard-basic" label="To" variant="standard" />
          </div>
        </div>
        <div className="gender-field row-filds row align-items-end">
          <div className="label-filed col-md-2">Gender</div>
          <div className="input-field col-md-10">
            <FormControl variant="standard" sx={{ width: "100%" }}>
              <Select labelId="demo-simple-select-standard-label" id="demo-simple-select-standard" value={age} onChange={handleChange}>
                <MenuItem value={10}>Male</MenuItem>
                <MenuItem value={20}>Female</MenuItem>
              </Select>
            </FormControl>
          </div>
        </div>
        <div className="religion-field row-filds row align-items-end">
          <div className="label-filed col-md-2">Religion</div>
          <div className="input-field col-md-10">
            <FormControl variant="standard" sx={{ width: "100%" }}>
              <Select labelId="demo-simple-select-standard-label" id="demo-simple-select-standard" value={age} onChange={handleChange}>
                <MenuItem value={10}>Islam</MenuItem>
                <MenuItem value={20}>Hindu</MenuItem>
              </Select>
            </FormControl>
          </div>
        </div>
        <div className="religion-field row-filds row align-items-end">
          <div className="label-filed col-md-2">Institute</div>
          <div className="input-field col-md-10">
            <TextField sx={{ width: "100%" }} id="standard-basic" variant="standard" />
          </div>
        </div>
      </div>
    )
  );
};

export default General;
