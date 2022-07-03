import { Routes, Route, useLocation } from 'react-router-dom';
import { TransitionGroup, CSSTransition } from 'react-transition-group';

import Header from './components/Header';
import FirstStep from './pages/FirstStep';
import SecondStep from './pages/SecondStep';
import ThirdStep from './pages/ThirdStep';
import FourthStep from './pages/FourthStep';
import data from './utils/data';

const App = () => {
  const { genres } = data;

  const location = useLocation();

  return (
    <div className="App">
      <Header />
      <TransitionGroup component={null}>
          <CSSTransition
            key={location.key}
            classNames="slide-in"
            timeout={1000}
          >
      <Routes>
        <Route element={<Header />}/>
        <Route path='/' element={<FirstStep genres={genres}/>}/>
        <Route path='/second-step' element={<SecondStep />}/>
        <Route path='/third-step' element={<ThirdStep />}/>
        <Route path='/fourth-step' element={<FourthStep />}/>
      </Routes>
      </CSSTransition>
      </TransitionGroup>
    </div>
  );
}

export default App;
