import { FunctionComponent } from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

import GenreButtonList, { GenreButtonListProps } from '../components/GenreButtonList';
import { FirstStepProps } from '../utils/types';
 
const FirstStep: FunctionComponent<FirstStepProps> = ({ genres }) => {
  const { id } = useSelector<RootState, GenreButtonListProps>(state => state.genre!)

  console.log(id)
  return (  
    <div>
      <div className="btn__container">
        <GenreButtonList data={genres} />
      </div>
      <div className="dir_btn_container">
        <Link to="/">Back</Link>
        <Link 
          to="/second-step" 
          className={!id ? 'inactive__link' : ''}
        >
          Next
        </Link>
      </div>
    </div>
  );
}
 
export default FirstStep;