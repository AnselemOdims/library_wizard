import { FunctionComponent } from 'react';

import GenreButtonList from '../components/GenreButtonList';
interface ThirdStepProps {
  
}
 
const ThirdStep: FunctionComponent<ThirdStepProps> = () => {
  return (  
    <div>
      <GenreButtonList />
    </div>
  );
}
 
export default ThirdStep;