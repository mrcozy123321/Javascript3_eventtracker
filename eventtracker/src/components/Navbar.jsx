import { useState } from 'react';
import { NavLink, Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';

const Navbar = () => {

  const [isAuth, setIsAuth] = useState(true)

  return (
    <div className='navbar'>
      <div className='navbar-container'>
        <div className='navbar__links'>
          <NavLink to="/" className="nav-link">Events</NavLink>
        </div>
        <div>
          <Link to="/" className="navbar-brand">LOGO</Link>
        </div>
        <div className='navbar__links'>
          { isAuth
          ? <NavLink to="/addevent" className="nav-link" >Add Event</NavLink> 
          : <NavLink to="/login" className="nav-link" >Login</NavLink>
          }
        </div>
      </div>
    </div>
  )
}

export default Navbar