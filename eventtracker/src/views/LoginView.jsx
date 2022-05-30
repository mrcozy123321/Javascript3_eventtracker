import {useState, useEffect} from 'react'
import { Link, useNavigate, useLocation, innerHTML } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux'
import { loginUser } from '../store/actions/authorizeActions'

const LoginView = () => {

  const { userId, statusCode } = useSelector(state => state.auth)
  // const [user, setUser] = useState('')
  // const [password, setPassword] = useState('')

  const dispatch = useDispatch()
  const navigate = useNavigate()
  const { state } = useLocation()

  const [input, setInput] = useState({
    email: "",
    password: ''
  });

  const [error, setError] = useState({
    email: "",
    password: ''
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

    setError(prev => {
      const stateObj = { ...prev, [name]: "" };

      switch (name) {
        case "email":
          if(!value) {
            stateObj[name] = "Please enter an email.";
          }
          // else if(!userId) {
          //   stateObj[name] = "Wrong email or password.";
          // }
          break;
    
        case "password": 
          if(!value) {
            stateObj[name] = "Please enter a pasword";
          }
          // else if(!userId) {
          //   stateObj[name] = "Wrong email or password.";
          // }
          break;

        default:
          break;
      }

      return stateObj;
    });
  }

  useEffect(() => {
    if(userId){
      navigate(state?.from || "/")
    }
  }, [userId, navigate])

  const handleLogin = (e) => {
    e.preventDefault()

    if(error.email === '' && error.password === '') {
      dispatch(loginUser({
        email: input.email.toLowerCase(),
        password: input.password
      }))
    }
  }

  return (
    <div className='container'>
      <div>
        <form className='form-control' onSubmit={handleLogin}>
        {error.email && <p>{error.email}</p>}
        {error.password && <p>{error.password}</p>}
          <label htmlFor="email" className='text-control'>Email:</label>
          <input type="text" name="email" id="email" className='text-control' onBlur={validateInput} onChange={onInputChange} value={input.email}/>
          <label htmlFor="password" className='text-control'>Password:</label>
          <input type="password" name="password" id="password" className='text-control' onBlur={validateInput} onChange={onInputChange} value={input.password}/>
          <button className='btn btn-primary' type="submit">Login</button>
        </form>
      </div>
      <div className='account-redirect'>
          <p>Don't have an account? <Link to="/register">Click here</Link> to register.</p>
        </div>
    </div>
  )
}

export default LoginView