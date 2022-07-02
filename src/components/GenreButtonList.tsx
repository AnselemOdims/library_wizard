import  { FunctionComponent } from 'react';

import GenreButton from './GenreButton';
import { GenreInterface, SubGenreInterface } from '../utils/types';

export interface GenreButtonListProps {
  id: number;
  name: string;
  subgenres?: SubGenreInterface[];
  isDescriptionRequired?: boolean
}

interface DataInterface {
  data: GenreButtonListProps[]
}
 
const GenreButtonList = ({ data }: DataInterface) => {
  return ( 
    <div>
      {data && data.map((item) => (
         <GenreButton 
          key={item.id} 
          item={item}
        />
      ))}
    </div>
   );
}
 
export default GenreButtonList;