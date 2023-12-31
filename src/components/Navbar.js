import React from 'react'
import { Link } from 'react-router-dom'

function Navbar() {
  return (
    <div className='navbar'>
      <h1><Link to="/">Portfolio</Link></h1>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/Project">Project</Link></li>
        <li><Link to="/About">About</Link></li>
        <li><Link to="/Contact">Contact</Link></li>
      </ul>
    </div>
  )
}

export default Navbar