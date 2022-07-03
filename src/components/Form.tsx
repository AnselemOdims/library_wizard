import { FunctionComponent } from "react";

interface FormProps {
  
}
 
const Form: FunctionComponent<FormProps> = () => {
  return ( 
    <form>
      <div>
        <label>Book title</label>
        <input type="text" placeholder="Book title"/>
      </div>
      <div>
        <label>Author</label>
        <input type="text" placeholder="Author"/>
      </div>
      <div>
        <label>ISBN</label>
        <input type="text" placeholder="ISBN"/>
      </div>
      <div>
        <label>Publisher</label>
        <input type="text" placeholder="Publisher"/>
      </div>
    </form>
   );
}
 
export default Form;