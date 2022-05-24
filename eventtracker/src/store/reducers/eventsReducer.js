import actiontypes from "../actiontypes";

const initState = {
  data: [],
  loading: false,
  error: null
}

const eventsReducer = (state = initState, action) => {
  switch(action.type) {
    case actiontypes().events.setEventsLoading:
      return {
        ...state,
        loading: action.payload
      }

    case actiontypes().events.setEvents:
      return {
        data: action.payload,
        loading: false,
        error: null
      }

    case actiontypes().events.setEventsFailure:
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