import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export class PersonalDetail extends Component {
  render() {
    return (
      <div className="container-fluid">
        <div className="details justify-content-center align-items-center d-flex flex-column">
          < div className="middle-container" style={{ width: '60%' }} >
            <h3 className='heading' style={{margin:'2.6rem 0'}}>Add your PersonalDetails</h3>
            <form action="">
              <div className="row">
                <div className="col-md-4">
                  <label for="name" className="form-label">First Name</label>
                  <input type="text" className="form-control form-control-sm" aria-label="First name" />
                </div>
                <div className="col-md-4">
                  <label for="name" className="form-label">Last Name</label>
                  <input type="text" className="form-control form-control-sm" aria-label="Last name" />
                </div>
                <div className="col-md-4">
                  <label for="name" className="form-label">Upload File</label>
                  <input type="file" className="form-control form-control-sm" aria-label="File" />
                </div>

                {/* Contact Source */}
                <div className="col-md-6">
                  <label for="contact" className="form-label">Email</label>
                  <input type="email" className="form-control form-control-sm" aria-label="email" />
                </div>
                <div className="col-md-4">
                  <label for="contact" className="form-label">Contact</label>
                  <input type="number" className="form-control form-control-sm" aria-label="contact" />
                </div>

                {/* Information */}
                <div className="col-md-4">
                  <label for="info" className="form-label">Date of Birth</label>
                  <input type="month" className="form-control form-control-sm" aria-label="dob" />
                </div>
                <div className="form-check col-md-6 row d-flex align-items-center">
                  <label for="info" className="form-label">Gender</label>
                  <div className="col-md-3">
                    <input className="mx-1 form-check-input gen" type="radio" name="gen" id="flexRadioDefault1" /><p>Male</p>
                  </div>
                  <div className="col-md-4">
                    <input className="mx-1 form-check-input gen" type="radio" name="gen" id="flexRadioDefault1" /><p>Female</p>
                  </div>
                  <div className="col-md-5">
                    <input className="mx-1 form-check-input gen" type="radio" name="gen" id="flexRadioDefault1" /><p>Transgender</p>
                  </div>
                </div>
                {/* Location */}
                <div className="col-md-4">
                  <label for="location" className="form-label">City</label>
                  <input type="text" className="form-control form-control-sm" aria-label="city" />
                </div>
                <div className="col-md-4">
                  <label for="location" className="form-label">Pin Code</label>
                  <input type="number" className="form-control form-control-sm" aria-label="Pin Code" />
                </div>
                <div className="col-md-4">
                  <label for="location" className="form-label">State</label>
                  <input type="text" className="form-control form-control-sm" aria-label="State" />
                </div>
                <div className="col-md-4">
                  <label for="location" className="form-label">Country</label>
                  <input type="text" className="form-control form-control-sm" aria-label="Country" />
                </div>
              </div>
              <div className="d-flex flex-row-reverse">
                <Link to='/alldetails/education' className="btn btnSearch px-4 my-4">Next</Link>
              </div>
            </form>
          </div>
        </div >
      </div >
    )
  }
}

export default PersonalDetail