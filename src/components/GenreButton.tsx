import { FunctionComponent } from 'react';
import { useDispatch } from 'react-redux';

import { addGenre } from '../redux/actions/genreActions';
import { GenreInterface } from '../utils/types';

interface GenreButtonInterface {
  item: GenreInterface
}
 
const GenreButton: FunctionComponent<GenreButtonInterface> = ({ item }) => {
  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch(addGenre(item))
  }

  return ( 
    <div>
      <button onClick={handleClick}>{item.name}</button>
    </div>
   );
}
 
export default GenreButton;