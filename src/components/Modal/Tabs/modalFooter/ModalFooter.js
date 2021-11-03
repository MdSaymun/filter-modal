import React from "react";
import { useGlobalcontext } from "../../../../utils/Context";
import "./modalFooter.css";

const ModalFooter = () => {
  const { closePopover, from, to, fromDate, toDate, notice, status, rating, ageOption, ageValue, religion, gender, institute } = useGlobalcontext();
  const handleForm = (e) => {
    e.preventDefault();
    console.log(from, to, fromDate, toDate, notice, status, rating, ageOption, ageValue, religion, gender, institute);
  };
  return (
    <div className="modal-footer-main row">
      <div className="buttons-modal-footer offset-md-6 col-md-6 ">
        <button className="btn-cancle" type="button" onClick={closePopover}>
          Cancle
        </button>
        <button className="btn-apply" type="submit" onClick={handleForm}>
          Apply
        </button>
      </div>
    </div>
  );
};

export default ModalFooter;
