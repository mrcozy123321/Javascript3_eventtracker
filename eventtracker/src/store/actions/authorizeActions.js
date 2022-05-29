import axios from 'axios';
import actiontypes from '../actiontypes';
import jwt_decode from 'jwt-decode'

const apiCall = (url, user, dispatch) => {
  axios.post(url, user)
  .then(res => {
    dispatch(authSuccess(res.data))
  })
  .catch(err => dispatch(authFailure(err.message)))
}

export const registerUser = (user) => {
  return dispatch => {
    apiCall('http://localhost:8080/users', user, dispatch)
  }
}

export const loginUser = (user) => {
  return dispatch => {
    apiCall('http://localhost:8080/login', user, dispatch)
  }
}

export const checkAuth = () => {
  return async dispatch => {
    const token = localStorage.getItem('token')

    if(token){

      const decode = jwt_decode(token);

      if(decode.exp * 1000 < new Date().getTime()) {
        console.log('Token Expired')
        localStorage.removeItem('token')
      }
      else {
        const res = await dispatch(getUserInfo(decode.sub, token))
        const userInfo = {
          accessToken: token,
          user: {
            id: res.id,
            email: res.email,
            name: res.name,      
          }
        }
        dispatch(authSuccess(userInfo)) 
      }
    }
  }
}

export const logout = () => {
  return {
    type: actiontypes().auth.logout
  }
}

const getUserInfo = (id) => {
  return async () => {
    const res = await axios.get(`http://localhost:8080/users?id=${id}`)
    return res.data[0]
  }
}

const authSuccess = (user) => {
  return {
    type: actiontypes().auth.authorizeSuccess,
    payload: user
  }
}

const authFailure = (err) => {
  return {
    type: actiontypes().auth.authorizeFailure,
    payload: err
  }
}