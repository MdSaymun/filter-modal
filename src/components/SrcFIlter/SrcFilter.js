import React from "react";
import TuneIcon from "@mui/icons-material/Tune";
import SearchIcon from "@mui/icons-material/Search";
import "./srcFilter.css";
import InputTextField from "../InputTextField/InputTextField";
import { useGlobalcontext } from "../../utils/Context";
const SrcFilter = () => {
  const { openPopover, anchorEl } = useGlobalcontext();
  const open = Boolean(anchorEl);
  const id = open ? "simple-popover" : undefined;

  return (
    <section className="src-filter-main">
      <div className="container container-src-filter">
        <div className=" row">
          <div className=" offset-md-7 col-md-5">
            <div className="row-src-input-filter ">
              <div className="col-src-icon ">
                <SearchIcon sx={{ color: "#323232" }} />
              </div>
              <div className="col-src-input-main">
                <InputTextField />
              </div>
              <div className="col-filter-button">
                <button className="btn-filter" onClick={openPopover} aria-describedby={id}>
                  <TuneIcon sx={{ color: "#323232" }} />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SrcFilter;
