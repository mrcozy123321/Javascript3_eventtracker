import React from 'react'
import { NavLink, Link } from 'react-router-dom';

const RegisterView = () => {
  return (
    <div className='container'>
      <div>
        <form className='form-control'>
          <label htmlFor="name" className='text-control'>Name:</label>
          <input type="text" name="name" id="name" className='text-control' />
          <label htmlFor="email" className='text-control'>Email:</label>
          <input type="text" name="email" id="email" className='text-control' />
          <label htmlFor="password" className='text-control'>Password:</label>
          <input type="text" name="password" id="password" className='text-control' />
          <label htmlFor="password-confirm" className='text-control'>Confirm Password:</label>
          <input type="text" name="password-confirm" id="password-confirm" className='text-control' />
          <button className='btn btn-primary'>Register</button>
        </form>
        <div className='account-redirect'>
          <p>Already have an account? <Link to="/login">Click here</Link> to login instead.</p>
        </div>
      </div>
    </div>
  )
}

export default RegisterView