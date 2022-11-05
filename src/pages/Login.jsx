import React from 'react'
import { useState} from 'react'
const getOptions = {
    method: "GET",
    headers: {
        "Content-Type": "application/json"
    }
  }
const Login = () => {
    const [username, setUsername] = useState(null);
    const [password, setPassword] = useState(null);
    const [email, setEmail] = useState(null);
    const [firstName, setFirstName] = useState(null);
    const [lastName, setLastName] = useState(null);
    const [dateOfBirth, setDateOfBirth] = useState(null);
    const [profileType, setProfileType] = useState(null);

    
  return (
    <div>
      <input name='username' id='username' type="text" onInput={(event) => {setUsername(event.target.value)}} />
      <label htmlFor="username">{username}</label>
    </div>
  )
}

export default Login
