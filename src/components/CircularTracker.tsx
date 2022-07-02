import { FunctionComponent } from "react";
import { useLocation } from "react-router-dom";

interface CircularTrackerProps {
  path: string;
  stepNum: string;
  title: string
}
 
const CircularTracker: FunctionComponent<CircularTrackerProps> = ({ path, stepNum, title }) => {
  const location = useLocation();

  return ( 
      <div>
        <div  className={location.pathname=== path ? 'active' : ''}>
          <span>{stepNum}</span>
        </div>
        <h4>{title}</h4>
      </div>
   );
}
 
export default CircularTracker;