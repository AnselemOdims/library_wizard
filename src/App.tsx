import { Routes, Route, useLocation } from 'react-router-dom';

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
    <section className="App">
      <Header />
      <Routes>
        <Route element={<Header />}/>
        <Route path='/' element={<FirstStep genres={genres}/>}/>
        <Route path='/second-step' element={<SecondStep />}/>
        <Route path='/third-step' element={<ThirdStep />}/>
        <Route path='/fourth-step' element={<FourthStep />}/>
      </Routes>
    </section>
  );
}

export default App;
