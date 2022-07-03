import { useSelector } from "react-redux";
import { useLocation } from 'react-router-dom';

import { StateType, SubGenreInterface } from "../utils/types";
import CircularTracker from "./CircularTracker";

const Progress = () => {
  const step = useSelector<RootState, StateType>(state => state.step);
  const subGenre = useSelector<RootState, SubGenreInterface>(state => state.subGenre)
  const location = useLocation();

  return (
      <div className="step__container">
        <CircularTracker path="/" stepNum="1" title="Genre"/>
        <div 
          className={location.pathname=== '/second-step' ? 'step__line active' : 'step__line'}
        ></div>
        <CircularTracker path="/second-step" stepNum="2" title="Subgenre"/>
        <div 
          className={location.pathname=== '/third-step' ? 'step__line active' : 'step__line'}
        ></div>
        {step.secondStep ? (
        <>
          {subGenre.addNew && (
            <>
              <CircularTracker path="/third-step" stepNum="3" title="Add new subgenre"/>
              <div 
                className={location.pathname=== '/fourth-step' ? 'step__line active' : 'step__line'}
              ></div>
            </>
          )
          }
          <CircularTracker 
            path="/fourth-step" 
            stepNum={subGenre.addNew ? '4' : '3'} 
            title="Information"
          />
        </>
        ) : (
        <div className="three__dots">
          <CircularTracker path="" stepNum="..." title=""/>
        </div>
        )
        }
      </div>
  );
};

export default Progress;