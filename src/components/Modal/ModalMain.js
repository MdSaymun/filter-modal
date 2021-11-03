import React, { useState } from "react";
import { Popover } from "@mui/material";
import { useGlobalcontext } from "../../utils/Context";
import { makeStyles } from "@mui/styles";
import ModalHeader from "./ModalHeader/ModalHeader";
import Tabs from "./Tabs/Tabs";
import "./modalMain.css";
const ModalMain = () => {
  const { anchorEl, closePopover } = useGlobalcontext();
  const styles = makeStyles({
    tableCell: {
      padding: "16px",
    },
  });
  const classes = styles();

  // popover
  const open = Boolean(anchorEl);
  const id = open ? "simple-popover" : undefined;
  return (
    <div className=" container-modal-main">
      {/* <Modal
        className={classes.tableCell}
        open={open}
        onClose={handleClose}
        sx={{
          width: "50% ",
          backgroundColor: "orange",
          position: "absolute",
          top: "0%",
          left: "auto",
          right: "0",
          "& .MuiBackdrop-root": {
            backgroundColor: "transparent",
          },
        }}
      >
        <h1>Hello Modal</h1>
      </Modal> */}

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
