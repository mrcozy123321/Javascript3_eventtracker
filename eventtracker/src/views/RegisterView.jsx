import { useState, useEffect } from 'react'
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux'
import { registerUser } from '../store/actions/authorizeActions';

const RegisterView = () => {
  const { userId } = useSelector(state => state.auth)
  const dispatch = useDispatch();
  const navigate = useNavigate()
  const { state } = useLocation()

  useEffect(() => {
    if(userId){
      navigate(state?.from || "/")
    }
  }, [userId, navigate])

  const [input, setInput] = useState({
    name: '',
    email: "",
    password: '',
    confirmPassword: ''
  });

  const [error, setError] = useState({
    name: '',
    email: "",
    password: '',
    confirmPassword: ''
  });

  const onInputChange = e => {
    const { name, value } = e.target;
    setInput(prev => ({
      ...prev,
      [name]: value
    }));
    validateInput(e);
  }

  const validateInput = e => {
    const { name, value } = e.target;
    let regEx = /^[A-Za-z\'\s\.\,]+$/;
    let emailRegEx = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    setError(prev => {
      const stateObj = { ...prev, [name]: "" };

      switch (name) {
        case "name":
          if(!value || value.length < 2) {
            stateObj[name] = "Name is required.";
          }
          else if(!regEx) {
            stateObj[name] = "Name can't have special characters.";
          }
          break;
    
        case "email": 
          if(!value) {
            stateObj[name] = "Email is required.";
          }
          else if(!emailRegEx) {
            stateObj[name] = "Please enter a valid email.";
          }
          break;

        case "password":
          if(!value) {
            stateObj[name] = "Password is required.";
          }
          else if(input.confirmPassword && value !== input.confirmPassword) {
            stateObj["confirmPassword"] = "Password and confirm password does not match.";
          }
          else {
            stateObj["confirmPassword"] = input.confirmPassword ? "" : error.confirmPassword;
          }
          break;

        case "confirmPassword":
          if(!value) {
            stateObj[name] = "Password confirmation is required.";
          }
          else if(input.password && value !== input.password) {
            stateObj[name] = "Password and confirm password does not match.";
          }
          break;

        default:
          break;
      }

      return stateObj;
    });
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    if(error.name === '' && error.email === '' && error.password === '' && error.confirmPassword === '') {
      dispatch(registerUser({
        name: input.name,
        email: input.email.toLowerCase(),
        password: input.password
      }))
    }
  }
  
  return (
    <div className='container'>
      <div>
        <form className='form-control' action='/register' onSubmit={handleSubmit} method="POST">
        {error.name && <p>{error.name}</p>}
        {error.email && <p>{error.email}</p>}
        {error.password && <p>{error.password}</p>}
        {error.confirmPassword && <p>{error.confirmPassword}</p>}
          <label htmlFor="name" className='text-control'>Name:</label>
          <input type="text" name="name" id="name" className='text-control' onBlur={validateInput} onChange={onInputChange} value={input.name}/>

          <label htmlFor="email" className='text-control'>Email:</label>
          <input type="email" name="email" id="email" className='text-control' onBlur={validateInput} onChange={onInputChange} value={input.email}/>

          <label htmlFor="password" className='text-control'>Password:</label>
          <input type="password" name="password" id="password" className='text-control' onBlur={validateInput} onChange={onInputChange} value={input.password}/>

          <label htmlFor="confirmPassword" className='text-control'>Confirm Password:</label>
          <input type="password" name="confirmPassword" id="confirmPassword" className='text-control' onBlur={validateInput} onChange={onInputChange} value={input.confirmPassword}/>

          <button className='btn btn-primary' type='submit'>Register</button>
        </form>
        <div className='account-redirect'>
          <p>Already have an account? <Link to="/login">Click here</Link> to login instead.</p>
        </div>
      </div>
    </div>
  )
}

export default RegisterView