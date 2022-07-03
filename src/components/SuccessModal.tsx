import ReactDOM from "react-dom";

 
const SuccessModal = () => {
  return ReactDOM.createPortal(
    <div>
      <p>I am a modal</p>
    </div>
  , document.body)
}
 
export default SuccessModal;