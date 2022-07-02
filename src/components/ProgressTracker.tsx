import { useSelector } from "react-redux";
import { useLocation } from 'react-router-dom';

import { StateType } from "../utils/types";
import CircularTracker from "./CircularTracker";

const Progress = () => {
  const step = useSelector<RootState, StateType>(state => state.step);
  const location = useLocation();

  return (
      <div className="step__container">
        <CircularTracker path="/" stepNum="1" title="Genre"/>
        <div className="step__line"></div>
        <CircularTracker path="/second-step" stepNum="2" title="Subgenre"/>
        <div className="step__line"></div>
        <CircularTracker path="/third-step" stepNum="3" title="Add new subgenre"/>
        <div className="step__line"></div>
        <CircularTracker path="/fourth-step" stepNum="4" title="Information"/>
      </div>
  );
};

export default Progress;