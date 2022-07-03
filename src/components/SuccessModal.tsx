import ReactDOM from "react-dom";
import { CSSTransition } from "react-transition-group";

import CheckMark from '../images/check.svg';

interface SuccessModalInterface {
  showModal: boolean;
}
 
const SuccessModal = ({ showModal }: SuccessModalInterface) => {
  return ReactDOM.createPortal(
    <div className="success-modal">
      <CSSTransition 
				in={showModal} 
				classNames="fade-in"
				timeout={1000} 
				unmountOnExit
			>
        <div className="overlay"></div>
      </CSSTransition>
      <CSSTransition 
				in={showModal} 
				classNames="slide-in"
				timeout={1000} 
				unmountOnExit
			>
      <div className="success-modal-content">
        <div>
          <img src={CheckMark} alt="check icon"/>
        </div>
        <p>Book added successfully</p>
        <div>
          <button>Add another book</button>
        </div>
      </div>
      </CSSTransition>
    </div>
  , document.body)
}
 
export default SuccessModal;