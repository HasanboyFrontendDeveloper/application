import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div class="d-flex flex-column flex-md-row align-items-center mb-4 border-bottom py-3 container">
      
      <Link to={'/'}> 
        <img src="./Hasanboy logo.png" alt="logo" width={300} />
      </Link>

      <nav class="d-inline-flex mt-2 mt-md-0 ms-md-auto fs-4">
        <Link to={'/login'} className='me-3 py-2 link-body-emphasis text-decoration-none'>Login</Link>
        <Link to={'/register'} className='me-3 py-2 link-body-emphasis text-decoration-none'>Register</Link>
      </nav>
    </div>
  )
}

export default Navbar