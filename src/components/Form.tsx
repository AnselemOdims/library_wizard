import { FunctionComponent, useState } from 'react';
import {
	formatOptions,
	languageOptions,
	publisherOptions,
	authorOptions,
} from '../utils/formData';

import LinkIcon from '../images/link.png'

interface FormProps {}

const Form: FunctionComponent<FormProps> = () => {
	const [focus, setFocus] = useState(false);
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

	const handleChange = (e: React.FormEvent<HTMLInputElement | HTMLTextAreaElement>) => {
		const { value, name } = e.currentTarget;
		setFormData({ 
      ...formData,
      [name]:  value
    });
	};

	const handleFocus = () => {
		setFocus(true);
	};

	const handleBlur = () => {
		setFocus(false);
	};

  const handleSubmit = () => {
    console.log(formData)
  }

	return (
		<form>
			<div>
				<label>Book title</label>
				<input
					type='text'
					placeholder='Book title'
					name='title'
					value={formData.title}
          onChange={handleChange}
				/>
			</div>
			<div>
				<label>Author</label>
				<select
					value={formData.author}
					onChange={(e) => setFormData({ ...formData, author: e.target.value })}
				>
					<option disabled={true} value=''>
						Author
					</option>
					{authorOptions.map((option) => (
						<option value={option.value}>{option.label}</option>
					))}
				</select>
			</div>
			<div>
				<label>ISBN</label>
				<input
					type='text'
					placeholder='ISBN'
					name='isbn'
					value={formData.isbn}
					onChange={handleChange}
				/>
			</div>
			<div>
				<label>Publisher</label>
				<select
					value={formData.publisher}
					onChange={(e) =>
						setFormData({ ...formData, publisher: e.target.value })
					}
				>
					<option disabled={true} value=''>
						Publisher
					</option>
					{publisherOptions.map((option) => (
						<option value={option.value}>{option.label}</option>
					))}
				</select>
			</div>
			<div>
				<label htmlFor='date'>Date published</label>
				<input
					type={focus ? 'date' : 'text'}
					placeholder='DD/MM/YYYY'
					name='datePublished'
					onFocus={handleFocus}
					onBlur={handleBlur}
					value={formData.datePublished}
					onChange={handleChange}
				/>
			</div>
			<div>
				<label>Number of pages</label>
				<input
					type='text'
					placeholder='Numbes of pages'
					name='pagesNumber'
					value={formData.pagesNumber}
					onChange={handleChange}
				/>
			</div>
			<div>
				<label>Format</label>
				<select
					value={formData.format}
					onChange={(e) => setFormData({ ...formData, format: e.target.value })}
				>
					<option disabled={true} value=''>
						Format
					</option>
					{formatOptions.map((option) => (
						<option value={option.value}>{option.label}</option>
					))}
				</select>
			</div>
			<div>
				<div>
					<label>Edition</label>
					<input
						type='text'
						placeholder='Edition'
						name='edition'
						value={formData.edition}
						onChange={handleChange}
					/>
				</div>
				<div>
					<label>Edition Language</label>
					<select
						value={formData.editionLanguage}
						onChange={(e) =>
							setFormData({ ...formData, editionLanguage: e.target.value })
						}
					>
						<option disabled={true} value=''>
							Edition Language
						</option>
						{languageOptions.map((option) => (
							<option value={option.value}>{option.label}</option>
						))}
					</select>
				</div>
			</div>
			<div>
				<label>Description</label>
        <div>
          <textarea
            name='description'
            placeholder='Type the description...'
            value={formData.description}
            onChange={handleChange}
            className="desc"
          ></textarea>
          <div>
            <span>A</span>
            <span><img src={LinkIcon} alt="link_icon" /></span>
            <span>@</span>
          </div>
        </div>
			</div>
		</form>
	);
};

export default Form;
