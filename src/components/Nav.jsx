import React from 'react'
import { Link } from 'react-router-dom'

export const Nav = () => {
  return (
    <nav>
        <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/generate-image"><button>Generate Image</button></Link></li>
            <li><Link to="/">Contact</Link></li>
            <li><Link to="/">About</Link></li>
        </ul>

    </nav>
  )
}
