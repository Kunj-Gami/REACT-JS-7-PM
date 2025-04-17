import React from 'react'
import { Link } from 'react-router-dom'

const Nav = () => {
  return (
    <div>
        <Link to="/">Home</Link>
        <Link to="/Blog">Blog</Link>
        <Link to="/Services">Services</Link>
    </div>
  )
}

export default Nav
