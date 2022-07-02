import { FunctionComponent } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useLocation } from 'react-router-dom';

import { addGenre, selectSubGenre } from '../redux/actions/genreActions';
import { GenreInterface, SubGenreInterface } from '../utils/types';
import { GenreButtonListProps } from './GenreButtonList';

interface GenreButtonInterface {
  item: GenreInterface
}
 
const GenreButton: FunctionComponent<GenreButtonInterface> = ({ item }) => {
  const genre = useSelector<RootState, GenreButtonListProps>(state => state.genre!)
  const dispatch = useDispatch();
  const location = useLocation();

  const handleClick = () => {
    if(location.pathname === '/') {
      dispatch(addGenre(item))
    } else {
      dispatch(selectSubGenre(item))
    }
  }

  return ( 
    <div>
      <button 
        onClick={handleClick}
        className={genre.name===item.name ? 'active__btn' : ''}
      >
        {item.name}
      </button>
    </div>
   );
}
 
export default GenreButton;