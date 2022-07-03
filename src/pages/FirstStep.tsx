import { FunctionComponent } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

import GenreButtonList, { GenreButtonListProps } from '../components/GenreButtonList';
import { trackStep } from '../redux/actions/genreActions';
import { FirstStepProps } from '../utils/types';
import Icon from '../images/down.svg';
 
const FirstStep: FunctionComponent<FirstStepProps> = ({ genres }) => {
  const { id } = useSelector<RootState, GenreButtonListProps>(state => state.genre!)
  // const step = useSelector<RootState, StateType>(state => state.step)
  const dispatch = useDispatch();

  const handleClick = () => {
    if(id && id > 0) {
      dispatch(trackStep('1'))
    }
  }
  
  return (  
    <div>
      <div className="btn__container">
        <GenreButtonList data={genres} />
      </div>
      <div className="dir_btn_container">
        <Link to="/"><img src={Icon} />Back</Link>
        <Link 
          to="/second-step" 
          className={!id ? 'inactive__link' : ''}
          onClick={handleClick}
        >
          Next
        </Link>
      </div>
    </div>
  );
}
 
export default FirstStep;