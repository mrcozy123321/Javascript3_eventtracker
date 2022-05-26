import actiontypes from "../actiontypes";

const initState = {
  error: null,
  loading: false,
  userId: null,
  email: null,
  name: null
}

const authReducer = (state = initState, action) => {
  switch (action.type) {
    case actiontypes().auth.authorize:
      return {
        ...state,
        loading: true
      }

    case actiontypes().auth.authorizeSuccess:
      return {
        ...state,
        loading: false,
        userId: action.payload.id,
        email: action.payload.email,
        name: action.payload.name
      }

    case actiontypes().auth.authorizeFailure:
      return {
        ...state,
        loading: false,
        error: action.payload
      }

    case actiontypes().auth.logout:
      return {
        ...initState
      }

    default:
      return state
  }
}

export default authReducer;