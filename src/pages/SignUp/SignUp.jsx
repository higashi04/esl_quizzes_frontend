import React from "react";
import { useState } from "react";
import "./SignUp.css";

const SignUp = () => {
  const [username, setUsername] = useState(null);
  const [password, setPassword] = useState(null);
  const [email, setEmail] = useState(null);
  const [firstName, setFirstName] = useState(null);
  const [lastName, setLastName] = useState(null);
  const [dateOfBirth, setDateOfBirth] = useState(null);
  const [profileType, setProfileType] = useState("shit");

  const handleRadio = (event) => {
    
    setProfileType(event)
    console.log(profileType)
  };
  return (
    <>
      <div className="container my-5 signUp-bg">
        <div className="row mb-3">
          <h1 className="signUp-header">Crear Cuenta</h1>
        </div>
        <div className="row mb-3">
          <div className="col">
            <div className="form-floating">
              <input
                className="form-control"
                placeholder="Usuario"
                name="username"
                id="username"
                type="text"
                onInput={(event) => {
                  setUsername(event.target.value);
                }}
              />
              <label htmlFor="username" className="form-label">
                Usuario
              </label>
            </div>
          </div>
          <div className="col">
            <div className="form-floating">
              <input
                className="form-control"
                name="password"
                id="password"
                placeholder="Contraseña"
                type="password"
                onInput={(event) => {
                  setPassword(event.target.value);
                }}
              />
              <label htmlFor="password" className="form-label">
                Constraseña
              </label>
            </div>
          </div>
        </div>
        <div className="row mb-3">
          <div className="col">
            <div className="form-floating">
              <input
                className="form-control"
                placeholder="Nombre"
                name="firstName"
                id="firstName"
                type="text"
                onInput={(event) => {
                  setFirstName(event.target.value);
                }}
              />
              <label htmlFor="firstName" className="form-label">
                Nombre
              </label>
            </div>
          </div>
          <div className="col">
            <div className="form-floating">
              <input
                className="form-control"
                placeholder="Apellidos"
                name="lastName"
                id="lastName"
                type="text"
                onInput={(event) => {
                  setLastName(event.target.value);
                }}
              />
              <label htmlFor="username" className="form-label">
                Apellidos
              </label>
            </div>
          </div>
        </div>
        <div className="row mb-3">
          <div className="col">
            <div className="form-floating">
              <input
                className="form-control"
                placeholder="Correo Eléctronico"
                name="email"
                id="email"
                type="text"
                onInput={(event) => {
                  setEmail(event.target.value);
                }}
              />
              <label htmlFor="email" className="form-label">
                Correo Eléctronico
              </label>
            </div>
          </div>
        </div>
        <div className="row mb-3">
          <div className="col">
            <div className="form-floating">
              <input
                className="form-control"
                placeholder="Fecha de Nacimiento"
                name="dateOfBirth"
                id="dateOfBirth"
                type="date"
                onInput={(event) => {
                  setDateOfBirth(event.target.value);
                }}
              />
              <label htmlFor="dateOfBirth" className="form-label">
                Fecha de Nacimiento
              </label>
            </div>
          </div>
        </div>
        <div className="row mb-3">
          <h4>Seleccione el tipo de perfil</h4>
          <div className="signUp-radios">
            <div className="form-check mx-5">
              <input
                className="form-check-input"
                type="radio"
                name="profile"
                id="Maestro"
              />
              <label className="form-check-label" htmlFor="Maestro" value="Teacher" onClick={()=> handleRadio("Teacher")}>
                Maestro
              </label>
            </div>
            <div className="form-check mx-5">
              <input
                className="form-check-input"
                type="radio"
                name="profile"
                id="Alumno"
              />
              <label className="form-check-label" htmlFor="Alumno" value="Student" onClick={()=> handleRadio("Student")}>
                Alumno
              </label>
            </div>
          </div>
        </div>
      </div>
      
    </>
  );
};

export default SignUp;
