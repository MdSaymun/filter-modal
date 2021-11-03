import React from "react";
import { FormControl, InputLabel, MenuItem, Rating, Select } from "@mui/material";
import "./Pipeline.css";
import { useGlobalcontext } from "../../../../utils/Context";
const Pipeline = ({ index, tabIndex }) => {
  const { status, setStatus, rating, setRating } = useGlobalcontext();

  return (
    index === tabIndex && (
      <div className="form-pipeline-main">
        <div className="fild-status row align-items-end">
          <div className="label-fileds col-md-2">Status</div>
          <div className="input-field col-md-8">
            <FormControl variant="standard" sx={{ width: "100%" }}>
              <InputLabel id="demo-simple-select-standard-label">Age</InputLabel>
              <Select labelId="demo-simple-select-standard-label" id="demo-simple-select-standard" value={status} onChange={(e) => setStatus(e.target.value)} label="Age">
                <MenuItem value="">None</MenuItem>
                <MenuItem value={10}>Ten</MenuItem>
                <MenuItem value={20}>Twenty</MenuItem>
                <MenuItem value={30}>Thirty</MenuItem>
              </Select>
            </FormControl>
          </div>
        </div>
        <div className="fild-rating row align-items-end">
          <div className="label-fileds col-md-2">Rating</div>
          <div className="fileds col-md-5">
            <FormControl variant="standard" sx={{ width: "100%" }}>
              <Select labelId="demo-simple-select-standard-label" id="demo-simple-select-standard" value={rating} onChange={(e) => setRating(e.target.value)} label="Greater than">
                <MenuItem value="">
                  <em>Greater than</em>
                </MenuItem>
                <MenuItem value={1}>1</MenuItem>
                <MenuItem value={2}>2</MenuItem>
                <MenuItem value={3}>3</MenuItem>
                <MenuItem value={4}>4</MenuItem>
                <MenuItem value={5}>5</MenuItem>
              </Select>
            </FormControl>
          </div>
          <div className="rating col-md-3">
            <Rating
              name="simple-controlled"
              value={rating}
              onChange={(event, newValue) => {
                setRating(newValue);
              }}
            />
          </div>
        </div>
      </div>
    )
  );
};

export default Pipeline;
