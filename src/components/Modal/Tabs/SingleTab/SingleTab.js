import { TextField } from "@mui/material";
import DesktopDatePicker from "@mui/lab/DesktopDatePicker";

import React from "react";
import "./singleTab.css";

const Tab = ({ index, tabIndex, application }) => {
  const [value, setValue] = React.useState(new Date("2014-08-18T21:11:54"));

  const handleChange = (newValue) => {
    setValue(newValue);
  };

  return (
    index === tabIndex && (
      <>
        {application && (
          <form className="form-application">
            <div className="expected-salery-fileds row align-items-end">
              <div className="label-fileds col-md-4">Expected Salary</div>
              <div className="from-field col-md-4">
                <TextField id="standard-basic" label="From" variant="standard" />
              </div>
              <div className="to-filed col-md-4">
                <TextField id="standard-basic" label="To" variant="standard" />
              </div>
            </div>
            <div className="application-date-fileds row align-items-end">
              <div className="label-fileds col-md-4">Applied Date</div>
              <div className="from-field col-md-4">
                <TextField type="date" id="standard-basic" variant="standard" />
              </div>
              <div className="to-filed col-md-4">
                <TextField type="date" id="standard-basic" variant="standard" />
              </div>
            </div>
            <div className="notice-priod-fileds row align-items-end">
              <div className="label-fileds col-md-4">Notice Period</div>
              <div className="from-field col-md-4">
                <TextField type="date" id="standard-basic" variant="standard" />
              </div>
            </div>
          </form>
        )}
      </>
    )
  );
};

export default Tab;
