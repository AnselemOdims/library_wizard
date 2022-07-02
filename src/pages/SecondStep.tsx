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
    <div>
      <GenreButtonList data={subGenre} />
      <div>
        <button>Back</button>
        <Link to="/second-step">Next</Link>
      </div>
    </div>
  );
}
 
export default SecondStep;