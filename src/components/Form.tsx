import { FunctionComponent, useState } from 'react';
import {
	formatOptions,
	languageOptions,
	publisherOptions,
	authorOptions,
} from '../utils/formData';

import LinkIcon from '../images/link.png'

interface FormProps {
  handleChange: (e:React.FormEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => void;
  formData: {
    [P: string]: string
  };
}

const Form: FunctionComponent<FormProps> = ({ handleChange, formData }) => {
	const [focus, setFocus] = useState(false);

	const handleFocus = () => {
		setFocus(true);
	};

	const handleBlur = () => {
		setFocus(false);
	};

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
					onChange={handleChange}
          name="author"
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
					onChange={handleChange}
          name="publisher"
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
					onChange={handleChange}
          name="format"
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
						onChange={handleChange}
            name="editionLanguage"
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
