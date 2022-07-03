import { FunctionComponent } from 'react';
import { Link } from 'react-router-dom';
import Form from '../components/Form';

import GenreButtonList from '../components/GenreButtonList';
import Icon from '../images/down.svg';
interface FourthStepProps {}

const FourthStep: FunctionComponent<FourthStepProps> = () => {
	return (
		<div>
			<Form />
			<div className='dir_btn_container'>
				<Link to='/second-step'>
					<img src={Icon} />
					Back
				</Link>
				<button
				// className={!description ? 'inactive__link' : ''}
				// onClick={handleClick}
				>
					Add
				</button>
			</div>
		</div>
	);
};

export default FourthStep;
