import ReactDOM from "react-dom";

import CheckMark from '../images/check.svg';

 
const SuccessModal = () => {
  return ReactDOM.createPortal(
    <div className="success-modal">
      <div>
        <img src={CheckMark} alt="check icon"/>
      </div>
      <p>Book added successfully</p>
      <div>
        <button>Add another book</button>
      </div>
    </div>
  , document.body)
}
 
export default SuccessModal;