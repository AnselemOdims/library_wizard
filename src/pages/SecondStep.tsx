import { FunctionComponent, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';

import GenreButtonList, { GenreButtonListProps } from '../components/GenreButtonList';
import { selectSubGenre, trackStep } from '../redux/actions/genreActions';
import { StateType, SubGenreInterface } from '../utils/types';
import Icon from '../images/down.svg';
interface SecondStepProps {
  
}
 
const SecondStep: FunctionComponent<SecondStepProps> = () => {
  const step = useSelector<RootState, StateType>(state => state.step);
  const subGenre = useSelector<RootState, GenreButtonListProps[]>(state => state.genre.subgenres!)
  const { id, addNew } = useSelector<RootState, SubGenreInterface>(state => state.subGenre)
  const dispatch = useDispatch();
  const navigate = useNavigate();
  
  const handleClick = () => {
    if(id && id > 0) {
      dispatch(trackStep('2'))
    }
  }

  const handleAddNew = () => {
    dispatch(selectSubGenre({
      id: 1,
      name: '',
      isDescriptionRequired: false,
      addNew: true
    }))
  }

  useEffect(() => {
    if(!step.firstStep){
      navigate('/')
    }
  })

  return (  
    <div className="second__step">
      {subGenre.length === 0 && <p>No Genre selected</p>}
      <div className="btn__container">
        <GenreButtonList data={subGenre} />
        <div>
          <button 
            type="button" 
            onClick={handleAddNew}
            className={addNew ? 'active__btn' : ''}
          >
            Add New
          </button>
        </div>
      </div>
      <div className="dir_btn_container">
        <Link to="/"><img src={Icon} />Back</Link>
        <Link 
          to={addNew ? '/third-step' : '/fourth-step'}
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