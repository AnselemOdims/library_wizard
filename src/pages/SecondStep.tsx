import { FunctionComponent } from 'react';

import GenreButtonList from '../components/GenreButtonList';
interface SecondStepProps {
  
}
 
const SecondStep: FunctionComponent<SecondStepProps> = () => {
  return (  
    <div>
      <GenreButtonList />
    </div>
  );
}
 
export default SecondStep;