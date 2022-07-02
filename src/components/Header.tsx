import { FunctionComponent } from 'react';

import ProgressTracker from './ProgressTracker';
interface HeaderProps {
  
}
 
const Header: FunctionComponent<HeaderProps> = () => {
  return ( 
    <div>
      <h1>Add Book - New Book</h1>
      <ProgressTracker />
    </div>
   );
}
 
export default Header;
