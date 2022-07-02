import  { FunctionComponent } from 'react';

import GenreButton from './GenreButton';

interface GenreButtonListProps {
  
}
 
const GenreButtonList: FunctionComponent<GenreButtonListProps> = () => {
  return ( 
    <div>
      <GenreButton />
      <GenreButton />
      <GenreButton />
      <GenreButton />
      <GenreButton />
      <GenreButton />
      <GenreButton />
    </div>
   );
}
 
export default GenreButtonList;