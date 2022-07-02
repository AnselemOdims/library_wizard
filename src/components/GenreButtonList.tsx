import  { FunctionComponent } from 'react';

import GenreButton from './GenreButton';
import { GenreInterface } from '../utils/types';

interface GenreButtonListProps {
  data?: GenreInterface[]
}
 
const GenreButtonList: FunctionComponent<GenreButtonListProps> = ({ data }) => {
  return ( 
    <div>
      {data && data.map((item) => (
         <GenreButton 
          key={item.id} 
          id={item.id}
          name={item.name}
        />
      ))}
    </div>
   );
}
 
export default GenreButtonList;