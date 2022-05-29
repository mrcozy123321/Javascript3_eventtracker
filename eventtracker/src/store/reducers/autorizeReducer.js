import actiontypes from "../actiontypes";

const initState = {
  error: null,
  loading: false,
  userId: null,
  email: null,
  name: null,
  token: null
}

const authReducer = (state = initState, action) => {
  switch (action.type) {
    case actiontypes().auth.authorize:
      return {
        ...state,
        loading: true
      }

    case actiontypes().auth.authorizeSuccess:
      localStorage.setItem('token', action.payload.accessToken)
      console.log(action.payload)
      return {
        ...state,
        loading: false,
        userId: action.payload.user.id,
        email: action.payload.user.email,
        name: action.payload.user.name,
        token: action.payload.accessToken
      }

    case actiontypes().auth.authorizeFailure:
      return {
        ...state,
        loading: false,
        error: action.payload
      }

    case actiontypes().auth.logout:
      localStorage.removeItem('token')
      return {
        ...initState
      }

    default:
      return state
  }
}

export default authReducer;