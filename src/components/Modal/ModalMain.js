import React from "react";
import { Popover } from "@mui/material";
import { useGlobalcontext } from "../../utils/Context";
import ModalHeader from "./ModalHeader/ModalHeader";
import Tabs from "./Tabs/Tabs";
import "./modalMain.css";
const ModalMain = () => {
  const { anchorEl, closePopover } = useGlobalcontext();
  // popover
  const open = Boolean(anchorEl);
  const id = open ? "simple-popover" : undefined;
  return (
    <div className=" container-modal-main">
      <Popover
        id={id}
        open={open}
        anchorEl={anchorEl}
        onClose={closePopover}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "left",
        }}
      >
        <div className="modal-container">
          <ModalHeader />
          <Tabs />
        </div>
      </Popover>
    </div>
  );
};

export default ModalMain;
