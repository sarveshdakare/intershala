import React from 'react'
import "../App"

import {Link } from 'react-router-dom';
function Nav() {
  return (
   <div>
    <ul className='nav-ul'>
    <li><Link to="/">login </Link></li>
        <li><Link to="/info">Information</Link></li>
        <li><Link to="/contact">Contact </Link></li>
    </ul>
   </div>
  )
}

export default Nav;