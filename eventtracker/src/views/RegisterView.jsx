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

  function handleChange(e) {
    const { name, value } = e.target;
    setInputValues({ ...inputValues, [name]: value})
  }

  const checkNameValidation = () => {
    let errors = validation;
    let regEx = /^[A-Za-z\'\s\.\,]+$/;

    if(!inputValues.name.trim()) {
      errors.name = "Name is required"
    }
    else if(inputValues.name.length < 2) {
      errors.name = "Name needs to be at least 2 letters"
    }
    else if(!regEx){
      errors.name = "Name can't have special characters"
    }
    else {
      errors.name = ""
    }

    setValidation(errors);
  }

  const checkEmailValidation = () => {
    let errors = validation;
    const regEx = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    if(!inputValues.email.trim()) {
      errors.email = "Email is required"
    } else if (!inputValues.email.match(regEx)) {
      errors.email = "Please ingress a valid email address";
    } else {
      errors.email = "";
    }

    setValidation(errors);
  }

  const checkPasswordValidation = () => {
    let errors = validation;

    const cond1 = "/^(?=.*[a-z]).{6,20}$/";
    const cond2 = "/^(?=.*[A-Z]).{6,20}$/";
    const cond3 = "/^(?=.*[0-9]).{6,20}$/";
    const password = inputValues.password;

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
    } else if (inputValues.confirmPassword !== password) {
      errors.confirmPassword = "Password does not match confirmation password";
    } else {
      errors.confirmPassword = "";
    }

    setValidation(errors);
  }

  useEffect(() => {
    inputValues.name.length > 0 &&  checkNameValidation();
  }, [inputValues.name]);

  useEffect(() => {
    inputValues.email.length > 0 &&  checkEmailValidation();
  }, [inputValues.email]);

  useEffect(() => {
    inputValues.password.length > 0 && inputValues.confirmPassword.length > 0 && checkPasswordValidation();
  }, [inputValues.password, inputValues.confirmPassword]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if(validation.name === '' && validation.email === '' && validation.password === '') {
      dispatch(registerUser({
        name: inputValues.name,
        email: inputValues.email,
        password: inputValues.password
      }))
    }
  }
  
  return (
    <div className='container'>
      <div>
        <form className='form-control' action='/register' onSubmit={handleSubmit} method="POST">
        {validation.name && <p>{validation.name}</p>}
        {validation.email && <p>{validation.email}</p>}
        {validation.password && <p>{validation.password}</p>}
        {validation.confirmPassword && <p>{validation.confirmPassword}</p>}
          <label htmlFor="name" className='text-control'>Name:</label>
          <input type="text" name="name" id="name" className='text-control' onChange={(e) => handleChange(e)} value={inputValues.name} required/>

          <label htmlFor="email" className='text-control'>Email:</label>
          <input type="email" name="email" id="email" className='text-control' onChange={(e) => handleChange(e)} value={inputValues.email} required/>

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