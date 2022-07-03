import { FunctionComponent, useState } from 'react';
import { Link } from 'react-router-dom';
import Form from '../components/Form';

import GenreButtonList from '../components/GenreButtonList';
import Icon from '../images/down.svg';
import { postData } from '../utils/fakeFetch';
interface FourthStepProps {}

const FourthStep: FunctionComponent<FourthStepProps> = () => {
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
		try {
			const res = await postData(formData);
			console.log(res);
		} catch (err) {
			console.error(err);
		}
	}

	const handleChange = (e: React.FormEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
		const { value, name } = e.currentTarget;
		setFormData({ 
      ...formData,
      [name]:  value
    });
	};

	return (
		<div>
			<Form handleChange={(e) => handleChange(e)} formData={formData} />
			<div className='dir_btn_container'>
				<Link to='/third-step'>
					<img src={Icon} alt="back arrow" />
					Back
				</Link>
				<button
					onClick={handleClick}
				>
					Add
				</button>
			</div>
		</div>
	);
};

export default FourthStep;
