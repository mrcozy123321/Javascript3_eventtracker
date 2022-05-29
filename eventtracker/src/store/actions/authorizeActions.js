import axios from 'axios';
import actiontypes from '../actiontypes';

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
    apiCall('http://localhost:8080/users/login', user, dispatch)
  }
}

export const checkAuth = () => {
  return async dispatch => {
    // if(email && password !== user.email && user.password){
    //   throw new Error('Email and password does not match any user')
    // }
    // else {
      const res = await dispatch(getUserInfo(id))
      const userInfo = {
        id: res.user.id,
        email: res.user.email,
        name: res.user.name,
      }
      dispatch(authSuccess(userInfo))
    // }
  }
}

export const logout = () => {
  return {
    type: actiontypes().auth.logout
  }
}

const getUserInfo = (id) => {
  return async () => {
    const res = await axios.get(`http://localhost:8080/users/${id}`)
    return res.data
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