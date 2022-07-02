import { Routes, Route } from 'react-router-dom';

import Header from './components/Header';
import FirstStep from './pages/FirstStep';
import SecondStep from './pages/SecondStep';
import ThirdStep from './pages/ThirdStep';
import FourthStep from './pages/FourthStep';

const App = () => {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path='/' element={<FirstStep />}/>
        <Route path='/second-step' element={<SecondStep />}/>
        <Route path='/third-step' element={<ThirdStep />}/>
        <Route path='/fourth-step' element={<FourthStep />}/>
      </Routes>
    </div>
  );
}

export default App;
