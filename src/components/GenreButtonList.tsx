import GenreButton from './GenreButton';
import { SubGenreInterface } from '../utils/types';

export interface GenreButtonListProps {
  id?: number;
  name?: string;
  subgenres?: SubGenreInterface[];
  isDescriptionRequired?: boolean
}

interface DataInterface {
  data: GenreButtonListProps[]
}
 
const GenreButtonList = ({ data }: DataInterface) => {
  return ( 
    <>
      {data && data.map((item) => (
         <GenreButton 
          key={item.id} 
          item={item}
        />
      ))}
    </>
   );
}
 
export default GenreButtonList;