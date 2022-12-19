import React from 'react';
import { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate, Link } from 'react-router-dom';
import "./User.css";

const User = () => {
  const [userData, setUserData] = useState();
  const {user} = useSelector((state) => state.auth);
  const navigate = useNavigate();

  useEffect(() => {
    if(user === null) {
      navigate("/");
    } else {
      setUserData(user);
    }
  }, [user, navigate]);

  return (
    <div className='User-container'>
      {userData && userData.lastName}
    </div>
  )
}

export default User
