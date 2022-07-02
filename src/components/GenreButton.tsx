import { FunctionComponent } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { addGenre } from '../redux/actions/genreActions';
import { GenreInterface } from '../utils/types';
import { GenreButtonListProps } from './GenreButtonList';

interface GenreButtonInterface {
  item: GenreInterface
}
 
const GenreButton: FunctionComponent<GenreButtonInterface> = ({ item }) => {
  const subGenre = useSelector<RootState, GenreButtonListProps>(state => state.genre!)
  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch(addGenre(item))
    console.log(subGenre.name)
  }

  return ( 
    <div>
      <button 
        onClick={handleClick}
        className={subGenre.name===item.name ? 'active__btn' : ''}
      >
        {item.name}
      </button>
    </div>
   );
}
 
export default GenreButton;