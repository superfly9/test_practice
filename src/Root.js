import React from 'react'
import { Link, Outlet } from 'react-router-dom'

function Root() {
  return (
    <>
        <div id="sidebar">
            <nav>
            <ul>
                <li>
                <Link to="fetch">Fetch</Link>
                </li>
                <li>
                <Link to="counter">Counter</Link>
                </li>
            </ul>
            </nav>
        </div>
        <div id="detail">
            <Outlet />
        </div>
    </>
  )
}

export default Root