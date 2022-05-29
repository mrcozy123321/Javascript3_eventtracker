import actiontypes from "../actiontypes";

const initState = {
  data: [],
  loading: false,
  error: null,
  // pastEvents: []
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
// .sort((a, b) => a.timeRemaining - b.timeRemaining)
    case actiontypes().events.getEventsFailure:
      return {
        ...state,
        error: action.payload
      }

    // case actiontypes().events.getPastEventsSuccess:
    //   return {
    //     ...state,
    //     pastEvents: action.payload.sort((a, b) => a.timeRemaining - b.timeRemaining),
    //     loading: false,
    //     error: null
    //   }

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