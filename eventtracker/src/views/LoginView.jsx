import {useState, useEffect} from 'react'
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux'
import { loginUser } from '../store/actions/authorizeActions'

const LoginView = () => {

  const { loading, error, userId } = useSelector(state => state.authReducer)
  const [user, setUser] = useState('')
  const [password, setPassword] = useState('')

  const dispatch = useDispatch()
  const navigate = useNavigate()
  const { state } = useLocation()

  useEffect(() => {
    if(userId){
      navigate(state?.from || "/")
    }
  }, [userId, navigate])

  const handleLogin = (e) => {
    e.preventDefault()

    dispatch(loginUser({
      email: user,
      password
    }))
  }

  return (
    <div className='container'>
      <div>
        <form className='form-control' onSubmit={handleLogin}>
          <label htmlFor="email" className='text-control'>Email:</label>
          <input type="text" name="email" id="email" className='text-control' onChange={e => setUser(e.target.value)} />
          <label htmlFor="password" className='text-control'>Password:</label>
          <input type="text" name="password" id="password" className='text-control' onChange={e => setPassword(e.target.value)} />
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