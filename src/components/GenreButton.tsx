import { FunctionComponent } from 'react';

import { DetailType } from '../utils/types';
 
const GenreButton: FunctionComponent<DetailType> = ({ id, name}) => {
  const handleClick = () => {
    console.log({id, name})
  }

  return ( 
    <div>
      <button onClick={handleClick}>{name}</button>
    </div>
   );
}
 
export default GenreButton;