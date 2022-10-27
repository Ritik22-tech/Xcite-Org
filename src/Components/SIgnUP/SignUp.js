import { Link } from 'react-router-dom'

import React from 'react'

export default function SignUp(props) {
    return (
        <>
            <div className="container-fluid">
                <div className="row">
                    <div className="parent-class col-md-5 align-items-center" style={{ height: '100vh', backgroundColor: '#ff8000' }}>
                        <div className="container">
                            <div className="parent-div d-flex justify-content-center align-items-center flex-column" style={{ height: '90vh' }}>
                                <img src={props.logo} className="img-fluid py-3" alt="..." style={{ height: '70px' }} />
                                <img src={props.union} className="img-fluid py-3" alt="..." style={{ height: '60vh' }} />
                            </div>
                        </div>
                    </div>

                    <div className="right-class col-md-7">
                        <div className="container-fluid">
                            <div className="another-class p-3 d-flex flex-column justify-content-center" style={{ height: '100vh' }}>
                                {/* <div className="child-class d-flex flex-column align-items-center justify-content-center "> */}
                                <h2 className="container heading my-4">Let's Get Started</h2>
                                <div className="row">
                                    <div className="form-before d-flex align-items-center justify-content-center">
                                        <form className='form-class col-md-5'>
                                            <div className="mb-3">
                                                <label htmlFor="Info" className="form-label">First Name</label>
                                                <input type="text" className="form-control form-control-sm" id="info" aria-describedby="infoHelp" />
                                            </div>
                                            <div className="mb-3">
                                                <label htmlFor="info" className="form-label">Last Name</label>
                                                <input type="text" className="form-control form-control-sm" id="info" />
                                            </div>
                                            <div className="mb-3">
                                                <label htmlFor="info" className="form-label">Email</label>
                                                <input type="email" className="form-control form-control-sm" id="info" aria-describedby="infoEmail" />
                                            </div>
                                            <div className="mb-3">
                                                <label htmlFor="info" className="form-label">Password</label>
                                                <input type="password" className="form-control form-control-sm" id="info" />
                                            </div>
                                            <div className="d-flex flex-row-reverse">
                                                <Link to='/alldetails' className="btn btnSearch px-4 my-4">Sign Up</Link>
                                            </div>
                                        </form>

                                        <div className="items col-md-7 mx-2">
                                            <div className="signor mx-1">Or</div>
                                            {/* <div className="signup col-sm-4 mx-1">SignUp with Google</div> */}
                                            <div className="signup mx-2">Sign Up with Google  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 488 512" width="16" height="16"><path d="M488 261.8C488 403.3 391.1 504 248 504 110.8 504 0 393.2 0 256S110.8 8 248 8c66.8 0 123 24.5 166.3 64.9l-67.5 64.9C258.5 52.6 94.3 116.6 94.3 256c0 86.5 69.1 156.6 153.7 156.6 98.2 0 135-70.4 140.8-106.9H248v-85.3h236.1c2.3 12.7 3.9 24.9 3.9 41.4z" /></svg></div>
                                        </div>
                                    </div>
                                    {/* </div> */}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

