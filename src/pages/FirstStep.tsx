import { FunctionComponent } from 'react';
import { Link } from 'react-router-dom';

import GenreButtonList from '../components/GenreButtonList';
import { FirstStepProps } from '../utils/types';
 
const FirstStep: FunctionComponent<FirstStepProps> = ({ genres }) => {
  return (  
    <div>
      <div className="btn__container">
        <GenreButtonList data={genres} />
      </div>
      <div className="dir_btn_container">
        <Link to="/">Back</Link>
        <Link to="/second-step" style={{pointerEvents: 'none'}}>Next</Link>
      </div>
    </div>
  );
}
 
export default FirstStep;