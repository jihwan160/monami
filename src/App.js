import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './Pages/Home/Home';
import Introduce from './Pages/Introduce/Introduce';
import Company from './Pages/Introduce/Company';
import History from './Pages/Introduce/History';

const App = () => {
  return (
    <div id='wrap'>
      <Routes>
        <Route exact path='/' element={<Home />} />
        <Route exact path='/introduce' element={<Introduce />} />
        <Route exact path='/company' element={<Company />} />
        <Route exact path='/history' element={<History />} />
      </Routes>
    </div>
  );
}

export default App;
