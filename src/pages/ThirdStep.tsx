import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import Checkbox from 'react-checkbox-component';

import { GenreButtonListProps } from '../components/GenreButtonList';
import { StateType } from '../utils/types';
import Icon from '../images/down.svg';
import { createSubGenre, selectSubGenre, trackStep } from '../redux/actions/genreActions';
 
const ThirdStep = () => {
  const step = useSelector<RootState, StateType>(state => state.step);
  const subGenre = useSelector<RootState, GenreButtonListProps[]>(state => state.genre.subgenres!)
  const navigate = useNavigate();
  const [checked, setChecked] = useState(false);
  const [description, setDescription] = useState('')
  const dispatch = useDispatch();
  
  const handleCheck = () => {
    setChecked(!checked)
  }

  const handleDescription = (e:React.ChangeEvent<HTMLInputElement>) => {
    setDescription(e.target.value)
  }

  const handleClick = () => {
      const id = subGenre?.at(-1)?.id! + 1
      const data = { id, name: description, isDescriptionRequired: checked }
    if(description){
      dispatch(createSubGenre(data))
      dispatch(trackStep('3'));
      dispatch(selectSubGenre({...data }))
    }
  }

  useEffect(() => {
    if(!step.firstStep){
      navigate('/')
    }
  })  
  return (  
    <div>
      <div className="add__new">
        <input 
          type='text' 
          placeholder="Subgenre name"
          onChange={handleDescription}
        />
        <div className="checkbox__container">
          <Checkbox
            size="big"
            isChecked={checked}
            shape="round"
            onChange={handleCheck}
            color="#9e9fa0"
          />
            Description is required for this subgenre
        </div>
      </div>
      <div className="dir_btn_container">
        <Link to="/second-step"><img src={Icon} alt="back arrow"/>Back</Link>
        <Link 
          to='/fourth-step'
          className={!description ? 'inactive__link' : ''}
          onClick={handleClick}
        >
          Next
        </Link>
      </div>
    </div>
  );
}
 
export default ThirdStep;
