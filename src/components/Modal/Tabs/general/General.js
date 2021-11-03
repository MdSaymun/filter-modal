import { FormControl, InputLabel, MenuItem, Select, TextField } from "@mui/material";
import React from "react";
import { useGlobalcontext } from "../../../../utils/Context";
import ModalFooter from "../modalFooter/ModalFooter";
import "./general.css";
const General = ({ index, tabIndex }) => {
  const { ageOption, setAgeOption, ageValue, setAgeValue, religion, setReligion, gender, setGender, institute, setInstitute } = useGlobalcontext();
  return (
    index === tabIndex && (
      <div className="form-general">
        <div className="expected-salery-fileds row-filds row align-items-end">
          <div className="label-filed col-md-2">Age</div>
          <div className="input-field col-md-5">
            <FormControl variant="standard" sx={{ width: "100%" }}>
              <Select labelId="demo-simple-select-standard-label" id="demo-simple-select-standard" value={ageOption} onChange={(e) => setAgeOption(e.target.value)}>
                <MenuItem value="">Greater than</MenuItem>
                <MenuItem value={10}>Ten</MenuItem>
                <MenuItem value={20}>Twenty</MenuItem>
                <MenuItem value={30}>Thirty</MenuItem>
              </Select>
            </FormControl>
          </div>
          <div className="input-field col-md-5">
            <TextField sx={{ width: "100%" }} id="standard-basic" label="To" variant="standard" value={ageValue} onChange={(e) => setAgeValue(e.target.value)} />
          </div>
        </div>
        <div className="gender-field row-filds row align-items-end">
          <div className="label-filed col-md-2">Gender</div>
          <div className="input-field col-md-10">
            <FormControl variant="standard" sx={{ width: "100%" }}>
              <Select labelId="demo-simple-select-standard-label" id="demo-simple-select-standard" value={gender} onChange={(e) => setGender(e.target.value)}>
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
              <Select labelId="demo-simple-select-standard-label" id="demo-simple-select-standard" value={religion} onChange={(e) => setReligion(e.target.value)}>
                <MenuItem value="islam">Islam</MenuItem>
                <MenuItem value="Hindu">Hindu</MenuItem>
              </Select>
            </FormControl>
          </div>
        </div>
        <div className="religion-field row-filds row align-items-end">
          <div className="label-filed col-md-2">Institute</div>
          <div className="input-field col-md-10">
            <TextField sx={{ width: "100%" }} id="standard-basic" variant="standard" value={institute} onChange={(e) => setInstitute(e.target.value)} />
          </div>
        </div>
        <ModalFooter />
      </div>
    )
  );
};

export default General;
