import { FunctionComponent } from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

import GenreButtonList, { GenreButtonListProps } from '../components/GenreButtonList';
import { SubGenreInterface } from '../utils/types';
interface SecondStepProps {
  
}
 
const SecondStep: FunctionComponent<SecondStepProps> = () => {
  const subGenre = useSelector<RootState, GenreButtonListProps[]>(state => state.genre.subgenres!)

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
        <Link to="/third-step">Next</Link>
      </div>
    </div>
  );
}
 
export default SecondStep;