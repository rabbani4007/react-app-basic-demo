import React, { useState, useEffect, useRef, useContext } from "react";
import { useSelector, useDispatch } from "react-redux";
import { increment, decrement } from "../../actions";
import Notes from "./notes";
import CounterDemo from "./counter-demo";
import DemoAll from "./demo-all";
export const LanguageContext = React.createContext({ lang: "en" });

const Example = () => {
  //const { lang } = useContext(LanguageContext);

  return (
    <div className="row">
      <div className="row-cols-1 ">
        <Notes />
        {/* <DemoAll /> */}
        <i className="bi-alarm"></i>
        {/* <CounterDemo /> */}
      </div>
    </div>
  );
};

export default Example;
