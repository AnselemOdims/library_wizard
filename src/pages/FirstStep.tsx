import { FunctionComponent } from 'react';

import GenreButtonList from '../components/GenreButtonList';
import { FirstStepProps } from '../utils/types';
 
const FirstStep: FunctionComponent<FirstStepProps> = ({ genres }) => {
  return (  
    <div>
      <GenreButtonList data={genres} />
    </div>
  );
}
 
export default FirstStep;