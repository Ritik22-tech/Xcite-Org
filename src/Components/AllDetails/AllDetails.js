import { Outlet } from 'react-router-dom'
import NavBar from '../NavBar/NavBar'

import React from 'react'

export default function AllDetails(props) {
    return (
        <>
            <div className="AllDetails">
                <NavBar logo={props.logo} />
                <Outlet />
            </div>
        </>
    )
}

