import ReactDOM from "react-dom";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { CSSTransition } from "react-transition-group";

import CheckMark from '../images/check.svg';
import { handleReset } from "../redux/actions/genreActions";

interface SuccessModalInterface {
  showModal: boolean;
}
 
const SuccessModal = ({ showModal }: SuccessModalInterface) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch(handleReset())
    navigate('/')
  }

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
          <button onClick={handleClick}>Add another book</button>
        </div>
      </div>
      </CSSTransition>
    </div>
  , document.body)
}
 
export default SuccessModal;