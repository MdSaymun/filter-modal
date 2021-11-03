import { FormControl, MenuItem, Select, TextField } from "@mui/material";
import React from "react";
import { useGlobalcontext } from "../../../../utils/Context";
import "./application.css";
const Application = ({ index, tabIndex }) => {
  const { from, setFrom, to, setTo, fromDate, setFromDate, toDate, setToDate, notice, setNotice } = useGlobalcontext();

  return (
    index === tabIndex && (
      <div className="form-application">
        <div className="expected-salery-fileds row align-items-end">
          <div className="label-fileds col-md-4">Expected Salary</div>
          <div className="input-field col-md-4">
            <TextField sx={{ width: "100%" }} id="standard-basic" placeholder="from" variant="standard" value={from} onChange={(e) => setFrom(e.target.value)} />
          </div>
          <div className="input-field col-md-4">
            <TextField sx={{ width: "100%" }} id="standard-basic" placeholder="to" variant="standard" value={to} onChange={(e) => setTo(e.target.value)} />
          </div>
        </div>
        <div className="application-date-fileds row align-items-end">
          <div className="label-fileds col-md-4">Applied Date</div>
          <div className="input-field col-md-4">
            <TextField sx={{ width: "100%" }} type="date" id="standard-basic" variant="standard" value={fromDate} onChange={(e) => setFromDate(e.target.value)}></TextField>
          </div>
          <div className="input-field col-md-4">
            <TextField sx={{ width: "100%" }} type="date" id="standard-basic" variant="standard" value={toDate} onChange={(e) => setToDate(e.target.value)} placeholder="To" />
          </div>
        </div>
        <div className="notice-priod-fileds row align-items-end">
          <div className="label-fileds col-md-4">Notice Period</div>
          <div className="input-field col-md-8">
            <FormControl variant="standard" sx={{ width: "100%" }}>
              <Select labelId="demo-simple-select-standard-label" id="demo-simple-select-standard" value={notice} onChange={(e) => setNotice(e.target.value)}>
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
