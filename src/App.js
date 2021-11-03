import React from "react";
import "./App.css";
import ModalMain from "./components/Modal/ModalMain";
import SrcFilter from "./components/SrcFIlter/SrcFilter";
const App = () => {
  return (
    <main>
      <SrcFilter />
      <ModalMain />
    </main>
  );
};

export default App;
