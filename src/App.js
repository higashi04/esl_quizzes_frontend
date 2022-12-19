import './App.css';
import {Route, Routes, BrowserRouter} from 'react-router-dom';
//pages
import Login from './pages/Login/Login';
import SignUp from './pages/SignUp/SignUp';
import User from './pages/User/User';
//components
import OffCanvas from './components/OffCanvas/OffCanvas';

function App() {
  return (
    <>
      <BrowserRouter>
      <OffCanvas/>
        <div>
          <Routes>
            <Route path='/' element={<Login/>} />
            <Route path='/signup' element={<SignUp/>} />
            <Route path='/user' element={<User/>} />
          </Routes>
        </div>
      </BrowserRouter>
    </>
  );
}

export default App;
