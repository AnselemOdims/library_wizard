import { FunctionComponent, useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';

import Form from '../components/Form';
import SuccessModal from '../components/SuccessModal';
import Icon from '../images/down.svg';
import { postData } from '../utils/fakeFetch';
import { StateType, SubGenreInterface } from '../utils/types';
interface FourthStepProps {}

const FourthStep: FunctionComponent<FourthStepProps> = () => {
	const step = useSelector<RootState, StateType>((state) => state.step);
	const { isDescriptionRequired } = useSelector<RootState, SubGenreInterface>(state => state.subGenre)
	const navigate = useNavigate();
	const [formError, setFormError] = useState('');
	const [loading, setLoading] = useState(false);
	const [showModal, setShowModal] = useState(false);
	const [formData, setFormData] = useState({
		title: '',
		author: '',
		isbn: '',
		publisher: '',
		datePublished: '',
		pagesNumber: '',
		format: '',
		edition: '',
		editionLanguage: '',
		description: '',
	});

	const handleClick = async () => {
		const { description, title } = formData;
		if (!title || (isDescriptionRequired && !description)) {
			setFormError(
				'Kindly include all information necessary to add a new book'
			);
			return;
		}
		try {
			setLoading(true);
			const res = await postData(formData);
			console.log(res);
			setShowModal(true);
		} catch (err) {
			console.error(err);
		} finally {
			setLoading(false);
		}
	};

	const handleChange = (
		e: React.FormEvent<
			HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
		>
	) => {
		setFormError('');
		const { value, name } = e.currentTarget;
		setFormData({
			...formData,
			[name]: value,
		});
	};

	useEffect(() => {
	  if(!step.firstStep){
	    navigate('/')
	  }
	})

	return (
		<div>
			<Form handleChange={(e) => handleChange(e)} formData={formData} />
			<p className='error'>{formError}</p>
			<div className='dir_btn_container'>
				<Link to={step.thirdStep ? '/third-step' : '/second-step'}>
					<img src={Icon} alt='back arrow' />
					Back
				</Link>
				<button onClick={handleClick}>
					{loading ? <span className='loading-spinner'></span> : 'Add'}
				</button>
			</div>
				<SuccessModal showModal={showModal} />
		</div>
	);
};

export default FourthStep;
