import React, {useState, useEffect} from 'react';
import { Offcanvas } from 'react-bootstrap';
import {SlBookOpen} from "react-icons/sl";
import { useSelector } from 'react-redux';
import { FaSignOutAlt } from 'react-icons/fa'
import "./OffCanvas.css"

const OffCanvas = () => {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleOpen = () => setShow(true);
    const [userData, setUserData] = useState();
    const {user} = useSelector((state) => state.auth);
    useEffect(() =>{
        if(user !== null) {
            setUserData(user)
        }
    }, [user])
  return (
    <>
     <button className='btn ms-3 mt-3 menuBtn' onClick={handleOpen} > <SlBookOpen/> </button> 
     <Offcanvas show={show} onHide={handleClose}>
        <Offcanvas.Header closeButton>
            <Offcanvas.Title>{userData ? userData.username : "Favor de Iniciar Sesión"}</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
            <div className="container">
            <div className="row">
            {userData && userData.profileType === "Teacher" ? "Teacher" : "Student"}
            </div>
            <div className="row">
            {userData && <button className='btn btn-outline-dark'>Cerrar Sesión <FaSignOutAlt/> </button>}
            </div>
            </div>
        </Offcanvas.Body>
     </Offcanvas>
    </>
  )
}

export default OffCanvas
