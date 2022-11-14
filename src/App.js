import './App.css';
import {Route, Routes, BrowserRouter} from 'react-router-dom'
//pages
import Login from './pages/Login/Login';
import SignUp from './pages/SignUp/SignUp';
import User from './pages/User/User';

function App() {
  return (
    <>
      <BrowserRouter>
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
