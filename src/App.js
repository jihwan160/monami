import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './Pages/Home/Home';
import Introduce from './Pages/Introduce/Introduce';

const App = () => {
  return (
    <div id='wrap'>
      <Routes>
        <Route exact path='/' element={<Home />} />
        <Route exact path='/ceo' element={<Introduce />} />
      </Routes>
    </div>
  );
}

export default App;
