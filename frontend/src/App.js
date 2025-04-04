import './App.css';
import { Routes,Route, Navigate } from 'react-router-dom';
import Login from './pages/login';
import Signup from './pages/signup';
import Home from './pages/home';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Navigate to='/login'></Navigate>} />
        <Route path='/login' element={<Login />} />
        <Route path='/signup' element={<Signup />} />
        <Route path='/home' element={<Home />} />
      </Routes>
    </div>
  );
}

export default App;
