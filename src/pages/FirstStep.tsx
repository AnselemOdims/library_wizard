import { FunctionComponent } from 'react';
import { Link } from 'react-router-dom';

import GenreButtonList from '../components/GenreButtonList';
import { FirstStepProps } from '../utils/types';
 
const FirstStep: FunctionComponent<FirstStepProps> = ({ genres }) => {
  return (  
    <div>
      <GenreButtonList data={genres} />
      <div>
        <button>Back</button>
        <Link to="/second-step">Next</Link>
      </div>
    </div>
  );
}
 
export default FirstStep;