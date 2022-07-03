import { FunctionComponent, useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import Checkbox from 'react-checkbox-component';

import GenreButtonList from '../components/GenreButtonList';
import { StateType, SubGenreInterface } from '../utils/types';
import Icon from '../images/down.svg';
interface ThirdStepProps {
  
}
 
const ThirdStep: FunctionComponent<ThirdStepProps> = () => {
  const step = useSelector<RootState, StateType>(state => state.step);
  // const { id, addNew } = useSelector<RootState, SubGenreInterface>(state => state.subGenre)
  const navigate = useNavigate();
  const [checked, setChecked] = useState(false);
  const [description, setDescription] = useState('')
  
  const handleCheck = () => {
    setChecked(!checked)
  }

  const handleDescription = (e:React.ChangeEvent<HTMLInputElement>) => {
    setDescription(e.target.value)
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
        <Link to="/second-step"><img src={Icon} />Back</Link>
        <Link 
          to='/fourth-step'
          className={!description ? 'inactive__link' : ''}
          // onClick={handleDescription}
        >
          Next
        </Link>
      </div>
    </div>
  );
}
 
export default ThirdStep;