import { FunctionComponent } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

import GenreButtonList, { GenreButtonListProps } from '../components/GenreButtonList';
import { trackStep } from '../redux/actions/genreActions';
import { SubGenreInterface } from '../utils/types';
interface SecondStepProps {
  
}
 
const SecondStep: FunctionComponent<SecondStepProps> = () => {
  const subGenre = useSelector<RootState, GenreButtonListProps[]>(state => state.genre.subgenres!)
  const { id } = useSelector<RootState, SubGenreInterface>(state => state.subGenre)
  const dispatch = useDispatch();
  
  const handleClick = () => {
    if(id > 0) {
      dispatch(trackStep('2'))
    }
  }

  return (  
    <div className="second__step">
      {subGenre.length === 0 && <p>No Genre selected</p>}
      <div className="btn__container">
        <GenreButtonList data={subGenre} />
        <div>
          <button>Add New</button>
        </div>
      </div>
      <div className="dir_btn_container">
        <Link to="/">Back</Link>
        <Link 
          to="/third-step"
          className={!id ? 'inactive__link' : ''}
          onClick={handleClick}
        >
          Next
        </Link>
      </div>
    </div>
  );
}
 
export default SecondStep;