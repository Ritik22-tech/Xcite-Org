import './App.css'
import React from 'react'
import logo from './Images/logo.png';
import vector from "./Images/Vector.png";
import union from './Images/Union.png';
import Home from "./Components/Home/Home";
import SignUp from './Components/SIgnUP/SignUp';
import { BrowserRouter as Router, Routes as Switch, Route } from 'react-router-dom';
import PersonalDetail from './Components/AllDetails/PersonalDetail';
import AllDetails from './Components/AllDetails/AllDetails';
import Education from './Components/AllDetails/Education';
import Certifications from './Components/AllDetails/Certifications';
import ProfileLinks from './Components/AllDetails/ProfileLinks';
import Skills from './Components/AllDetails/Skills';
import WorkExp from './Components/AllDetails/WorkExp';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path='/' element={<Home logo={logo} vector={vector} />} ></Route>
        <Route exact path='signup' element={<SignUp logo={logo} union={union} />} ></Route>
        <Route exact path='alldetails' element={<AllDetails logo={logo} />}>
          <Route index element={<PersonalDetail />}></Route>
          <Route path='education' element={<Education />}></Route>
          <Route path='workExp' element={<WorkExp/> }></Route>
          <Route path='certificate' element={<Certifications />}></Route>
          <Route path='skills' element={<Skills />}></Route>
          <Route path='profLinks' element={<ProfileLinks />}></Route>
        </Route>
      </Switch>
    </Router>
  )
}


export default App