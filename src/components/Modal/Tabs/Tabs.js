import React, { useState } from "react";
import Application from "./applications/Application";
import General from "./general/General";
import ModalFooter from "./modalFooter/ModalFooter";
import Pipeline from "./pipeline/Pipeline";
import "./tabs.css";
const Tabs = () => {
  const [index, setIndex] = useState(0);
  const tabName = [{ name: "Applicaiton" }, { name: "Pipeline" }, { name: "General" }];
  return (
    <>
      <section className="tabs-main">
        <div className="row row-tabs-main">
          <div className="col-md-3 tabs-name">
            {tabName.map((item, i) => {
              return (
                <button className={`tab-name-btn ${i === index && "tabs-name-btn-active"}`} onClick={() => setIndex(i)}>
                  {item.name}
                </button>
              );
            })}
          </div>
          <from className="col-md-9 form-main">
            <Application index={index} tabIndex={0} />
            <Pipeline index={index} tabIndex={1} />
            <General index={index} tabIndex={2} />
            <ModalFooter />
          </from>
        </div>
      </section>
    </>
  );
};

export default Tabs;
