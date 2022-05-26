const actiontypes = () => {
  return {
    auth: {},
    events: {
      getEvents: 'GET_EVENTS',
      getEventsSuccess: 'GET_EVENTS_SUCCESS',
      getEventsFailure: 'GET_EVENTS_FAILURE',
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