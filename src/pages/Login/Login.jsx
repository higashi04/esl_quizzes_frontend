import React from 'react'
import { useState } from 'react';
import { Link } from 'react-router-dom';

const Login = () => {
    const [username, setUsername] = useState(null);
    const [password, setPassword] = useState(null);
    

  return (
    <>
      <div className="container">
        <div className="row my-5">
            <div className="col">
              <div className="form-floating">
                <input className='form-control' placeholder='Usuario' name='username' id='username' type="text" onInput={(event) => {setUsername(event.target.value)}} />
                <label htmlFor="username" className="form-label">Usuario</label>
              </div>
            </div>
            <div className="col">
              <div className="form-floating">
                <input className='form-control' name='password' id='password' placeholder='Contraseña' type="password" onInput={(event) => {setPassword(event.target.value)}} />
                <label htmlFor="password" className="form-label">Constraseña</label>
              </div>
            </div>
        </div>
        <div className="row my-5">
          <div className="col">
            <button className='btn btn-primary'>Iniciar Sesión</button>
          </div>
          <div className="col">
            <Link to={'/signup'} className='btn btn-outline-dark' > ¿No tienes cuenta? </Link>
          </div>
        </div>
      </div>
      

      
    </>
  )
}

export default Login
