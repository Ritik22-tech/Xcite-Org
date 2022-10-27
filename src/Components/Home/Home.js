import { Link } from 'react-router-dom'


import React from 'react'

export default function Home(props) {
    return (
        <><div className="container-fluid">
            <div className="row">
                <div className="parent-class col-md-5 align-items-center" style={{ height: '100vh', backgroundColor: '#ff8000' }}>
                    <div className="container">
                        <div className="parent-div d-flex justify-content-center align-items-center flex-column" style={{ height: '90vh' }}>
                            <img src={props.logo} className="img-fluid py-3" alt="..." style={{ height: '70px' }} />
                            <img src={props.vector} className="img-fluid py-3" alt="..." style={{ height: '60vh' }} />
                        </div>
                    </div>
                </div>
                <div className="parent-class col-md-7 align-items-center">

                    <div className="d-flex flex-row-reverse">
                        <Link to='ForEmployee' className="btn btn1 px-3 my-5 mx-4" >For Employers</Link>
                        <div className="my-5 main" >&#124;</div>
                        <Link to='login' className="btn btn1 px-3 my-5 mx-4" style={{ color: '#ff8000' }} >Login</Link>
                        <Link to='/signup' className="btn btn1 px-3 my-5 mx-4" >Register</Link>
                    </div>

                    <div className="container">
                        <div className="parentClass d-flex justify-content-center align-items-center">
                            <div className="childClass d-flex flex-column">
                                <h2 className='heading'>Looking for internships?</h2>
                                <div className="InnerContainer my-2">
                                    <p>We are here to help you find the best internship.</p>
                                    <form className="d-flex" role="search">
                                        <div className="input-group mb-3">
                                            <input type="search" className="form-control form-control-home" placeholder="Search Jobs by Title and Skills" aria-label="Search" aria-describedby="basic-addon2" />
                                            <span className="input-group-text" id="basic-addon2"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-search" viewBox="0 0 16 16">
                                                <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
                                            </svg></span>
                                        </div>
                                    </form>
                                    <form className="d-flex" role="search">
                                        <div className="input-group mb-3">
                                            <input type="search" className="form-control form-control-home" placeholder="City, state or pinCode" aria-label="Search" aria-describedby="basic-addon2" />
                                            <span className="input-group-text" id="basic-addon2"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-geo-alt" viewBox="0 0 16 16">
                                                <path d="M12.166 8.94c-.524 1.062-1.234 2.12-1.96 3.07A31.493 31.493 0 0 1 8 14.58a31.481 31.481 0 0 1-2.206-2.57c-.726-.95-1.436-2.008-1.96-3.07C3.304 7.867 3 6.862 3 6a5 5 0 0 1 10 0c0 .862-.305 1.867-.834 2.94zM8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10z" />
                                                <path d="M8 8a2 2 0 1 1 0-4 2 2 0 0 1 0 4zm0 1a3 3 0 1 0 0-6 3 3 0 0 0 0 6z" />
                                            </svg></span>
                                        </div>
                                    </form>
                                    <div className="d-flex flex-row-reverse">
                                        <div className="btn btnSearch px-4 my-4">Search</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}
