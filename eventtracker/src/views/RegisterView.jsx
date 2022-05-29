import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux'
import { registerUser } from '../store/actions/authorizeActions';

const RegisterView = () => {
  const [inputValues, setInputValues] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: ""
  });

  const [validation, setValidation] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: ""
  });

  const dispatch = useDispatch();

  function handleChange(event) {
    const { name, value } = event.target;
    setInputValues({ ...inputValues, [name]: value})
  }

  const checkValidation = () => {
    let errors = validation;
    const regEx = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    const cond1 = "/^(?=.*[a-z]).{6,20}$/";
    const cond2 = "/^(?=.*[A-Z]).{6,20}$/";
    const cond3 = "/^(?=.*[0-9]).{6,20}$/";
    const password = inputValues.password;

    if(!inputValues.name.trim()) {
      errors.name = "Name is required"
    }
    else if(inputValues.name.length < 2) {
      errors.name = "Name needs to be at least 2 letters"
    }
    else {
      errors.name = ""
    }

    if(!inputValues.email.trim()) {
      errors.email = "Email is required"
    } else if (!inputValues.email.match(regEx)) {
      errors.email = "Please ingress a valid email address";
    } else {
      errors.email = "";
    }

    if (!password) {
      errors.password = "password is required";
    } else if (password.length < 6) {
      errors.password = "Password must be longer than 6 characters";
    } else if (password.length >= 20) {
      errors.password = "Password must shorter than 20 characters";
    } else if (!password.match(cond1)) {
      errors.password = "Password must contain at least one lowercase";
    } else if (!password.match(cond2)) {
      errors.password = "Password must contain at least one capital letter";
    } else if (!password.match(cond3)) {
      errors.password = "Password must contain at least a number";
    } else {
      errors.password = "";
    }

    if (!inputValues.confirmPassword) {
      errors.confirmPassword = "Password confirmation is required";
    } else if (inputValues.confirmPassword !== inputValues.password) {
      errors.confirmPassword = "Password does not match confirmation password";
    } else {
      errors.password = "";
    }

    setValidation(errors);
  };

  useEffect(() => {
    checkValidation();
  }, [inputValues]);

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(registerUser({
      name: inputValues.name,
      email: inputValues.email,
      password: inputValues.password
    }))
  }
  
  return (
    <div className='container'>
      <div>
        <form className='form-control' action='/register' onSubmit={handleSubmit} method="POST">
          <label htmlFor="name" className='text-control'>Name:</label>
          <input type="text" name="name" id="name" className='text-control' onChange={(e) => handleChange(e)} value={inputValues.name} />

          <label htmlFor="email" className='text-control'>Email:</label>
          <input type="email" name="email" id="email" className='text-control' onChange={(e) => handleChange(e)} value={inputValues.email}/>

          <label htmlFor="password" className='text-control'>Password:</label>
          <input type="password" name="password" id="password" className='text-control' onChange={(e) => handleChange(e)} value={inputValues.password} required/>

          <label htmlFor="confirmPassword" className='text-control'>Confirm Password:</label>
          <input type="password" name="confirmPassword" id="confirmPassword" className='text-control' onChange={(e) => handleChange(e)} value={inputValues.confirmPassword} required/>

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