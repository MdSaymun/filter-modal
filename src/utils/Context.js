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
  return <Context.Provider value={{ anchorEl, closePopover, openPopover }}>{children}</Context.Provider>;
};

export const useGlobalcontext = () => {
  return useContext(Context);
};
export default ContextProvider;
