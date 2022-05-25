const actiontypes = () => {
  return {
    auth: {},
    events: {
      setEvents: 'SET_EVENTS',
      setEventsLoading: 'SET_EVENTS_LOADING',
      setEventsFailure: 'SET_EVENTS_FAILURE',
      createNewEvent: 'CREATE_NEW_EVENT'
    },
    event: {
      loadEventStart: 'LOAD_EVENT_START',
      loadEventSuccess: 'LOAD_EVENT_SUCCESS',
      loadEventFailure: 'LOAD_EVENT_FAILURE',
      clearEvent: 'CLEAR_EVENT'
    }
  }
}

export default actiontypes