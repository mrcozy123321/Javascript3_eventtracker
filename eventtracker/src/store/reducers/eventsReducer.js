import actiontypes from "../actiontypes";

const initState = {
  data: [],
  loading: false,
  error: null
}

const eventsReducer = (state = initState, action) => {
  switch(action.type) {
    case actiontypes().events.getEvents:
      return {
        ...state,
        loading: action.payload
      }

    case actiontypes().events.getEventsSuccess:
      return {
        ...state,
        data: action.payload,
        loading: false,
        error: null
      }

    case actiontypes().events.getEventsFailure:
      return {
        ...state,
        error: action.payload
      }

    case actiontypes().events.createNewEvent:
      return {
        ...state,
        data: [...state.data, action.payload],
        loading: false,
        error: null
      }

    default:
      return state
  }
}

export default eventsReducer;