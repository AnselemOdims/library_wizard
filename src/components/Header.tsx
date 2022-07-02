import { FunctionComponent } from 'react';

import ProgressTracker from './ProgressTracker';
interface HeaderProps {

}
 
const Header: FunctionComponent<HeaderProps> = () => {

  console.log(location);

  return ( 
    <div>
      <h1>Add Book - New Book</h1>
      <ProgressTracker />
    </div>
   );
}
 
export default Header;
