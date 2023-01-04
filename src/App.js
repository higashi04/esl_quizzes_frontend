import './App.css';
import {Route, Routes, BrowserRouter, Outlet} from 'react-router-dom';
//pages
import Login from './pages/Login/Login';
import SignUp from './pages/SignUp/SignUp';
import User from './pages/User/User';
//lessons
import Lesson4A from './pages/Lessons/Lesson4A/Lesson4A';
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
            <Route path='/4A' element={<Lesson4A/>} />
          </Routes>
        </div>
      </BrowserRouter>
      <Outlet/>
    </>
  );
}

export default App;
