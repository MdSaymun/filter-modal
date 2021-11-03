import React from "react";
import ClearIcon from "@mui/icons-material/Clear";
import "./modalHeader.css";
import { useGlobalcontext } from "../../../utils/Context";
const ModalHeader = () => {
  const { closePopover } = useGlobalcontext();
  return (
    <>
      <div className="modal-main-header">
        <h3>Advance Filter</h3>
        <button onClick={closePopover} className="icon">
          <ClearIcon />
        </button>
      </div>
      <hr />
    </>
  );
};

export default ModalHeader;
