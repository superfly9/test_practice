import React from 'react'
import { Outlet } from 'react-router-dom'

function Root() {
  return (
    <>
        <div id="sidebar">
            <nav>
            <ul>
                <li>
                <a href={`/fetch`}>Fetch</a>
                </li>
                <li>
                <a href={`/counter`}>Counter</a>
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