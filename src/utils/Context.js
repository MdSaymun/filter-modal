import React, { createContext, useContext, useState } from "react";

const Context = createContext();

const ContextProvider = ({ children }) => {
  // popover
  const [anchorEl, setAnchorEl] = React.useState(null);
  const openPopover = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const closePopover = () => {
    setAnchorEl(null);
  };
  // input field values
  // application values
  const [from, setFrom] = useState("");
  const [to, setTo] = useState("");
  const [fromDate, setFromDate] = useState("");
  const [toDate, setToDate] = useState("");
  const [notice, setNotice] = useState("");

  // pipeline
  const [status, setStatus] = useState("");
  const [rating, setRating] = useState(4);

  // general values
  const [ageOption, setAgeOption] = useState("");
  const [ageValue, setAgeValue] = useState("");
  const [religion, setReligion] = useState("");
  const [gender, setGender] = useState("");
  const [institute, setInstitute] = useState("");

  return (
    <Context.Provider
      value={{
        anchorEl,
        closePopover,
        openPopover,
        from,
        setFrom,
        to,
        setTo,
        fromDate,
        setFromDate,
        toDate,
        setToDate,
        notice,
        status,
        setStatus,
        rating,
        setRating,
        setNotice,
        ageOption,
        setAgeOption,
        ageValue,
        setAgeValue,
        religion,
        setReligion,
        gender,
        setGender,
        institute,
        setInstitute,
      }}
    >
      {children}
    </Context.Provider>
  );
};

export const useGlobalcontext = () => {
  return useContext(Context);
};
export default ContextProvider;
