import React from "react";
import "./modalFooter.css";

const ModalFooter = () => {
  return (
    <div className="modal-footer-main row">
      <div className="buttons-modal-footer offset-md-6 col-md-6 ">
        <button className="btn-cancle">Cancle</button>
        <button className="btn-apply">Apply</button>
      </div>
    </div>
  );
};

export default ModalFooter;
