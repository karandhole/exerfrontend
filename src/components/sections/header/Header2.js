import React from 'react'
import BackButton from '../../component/BackButton';
import logo from "../../images/logo.png"

export default function Header2() { 
  return (
    <>
      <div className="header sticky-top" id="header" style={{backgroundColor:'aliceblue'}}>
        <header className="d-flex flex-wrap align-items-center justify-content-center justify-content-md-between py-3  border-bottom">
          <div className="col-md-3 mb-2 mb-md-0 text-center">
            <a
              href="/admin-page"
              className="d-inline-flex link-body-emphasis text-decoration-none navbar-brand urbanist ms-3 me-5"
            >
            <img src={logo}  style={{ height: '50px', width: '140px' ,backgroundColor:'aliceblue' }}  alt="Exer Energy" class="navbar-logo" />
            </a>
          </div>

          <BackButton />  
          
        </header>
      </div>
    </>
  );
}
