import React, {useEffect} from 'react'
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

//components
import MorningAtHome from '../../../components/MorningAtHome/MorningAtHome'
const Lesson4A = () => {
  const navigate = useNavigate();
  const {user} = useSelector((state) => state.auth);

  useEffect(() => {
    if(user === null) {
      navigate("/");
    } 
  }, [user, navigate]);

  return (
    <div className='m-5'>
      <h1 className='mx-3'>Morning Routine</h1>
      <div className="row my-3">
        <MorningAtHome/>
      </div>
    </div>
  )
}

export default Lesson4A
