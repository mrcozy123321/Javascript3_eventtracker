import React from 'react'
import { NavLink, Link } from 'react-router-dom';

const LoginView = () => {
  return (
    <div className='container'>
      <div>
        <form className='form-control'>
          <label htmlFor="email" className='text-control'>Email:</label>
          <input type="text" name="email" id="email" className='text-control' />
          <label htmlFor="password" className='text-control'>Password:</label>
          <input type="text" name="password" id="password" className='text-control' />
          <button className='btn btn-primary'>Login</button>
        </form>
      </div>
      <div className='account-redirect'>
          <p>Don't have an account? <Link to="/register">Click here</Link> to register.</p>
        </div>
    </div>
  )
}

export default LoginView