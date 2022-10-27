// import { NavData } from './NavData'

import React from 'react'
import { Link } from 'react-router-dom'

export default function NavBar(props) {
    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-dark" style={{ backgroundColor: '#ff8000'}}>
                <div className="container-fluid">
                    <img src={props.logo} className="img-fluid py-3 my-2" alt="..." style={{ height: '70px' }} />   
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav ">
                            <li className="nav-item d-flex align-items-center">
                                <Link className="btnPD nav-link active px-3 my-3" aria-current="page" to="/alldetails">PERSONAL DETAILS</Link>
                            </li>
                            <li className="nav-item d-flex align-items-center">
                                <Link className="btnPD nav-link active px-3 my-3" aria-current="page" to="/alldetails/education">EDUCATION</Link>
                            </li>
                            <li className="nav-item d-flex align-items-center">
                                <Link className="btnPD nav-link active px-3 my-3" aria-current="page" to="/alldetails/workExp">WORK EXPERIENCE</Link>
                            </li>
                            <li className="nav-item d-flex align-items-center">
                                <Link className="btnPD nav-link active px-3 my-3" aria-current="page" to="/alldetails/certificate">CERTIFICATIONS</Link>
                            </li>
                            <li className="nav-item d-flex align-items-center">
                                <Link className="btnPD nav-link active px-3 my-3" aria-current="page" to="/alldetails/skills">SKILLS</Link>
                            </li>
                            <li className="nav-item d-flex align-items-center">
                                <Link className="btnPD nav-link active px-3 my-3" aria-current="page" to="/alldetails/profLinks">PROFILE LINKS</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </>
    )
}
