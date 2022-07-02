import { FunctionComponent } from 'react';

import GenreButtonList from '../components/GenreButtonList';
interface FirstStepProps {
  
}
 
const FirstStep: FunctionComponent<FirstStepProps> = () => {
  return (  
    <div>
      <GenreButtonList />
    </div>
  );
}
 
export default FirstStep;