const actiontypes = () => {
  return {
    events: {
      getEvents: 'GET_EVENTS',
      getEventsSuccess: 'GET_EVENTS_SUCCESS',
      getEventsFailure: 'GET_EVENTS_FAILURE',
      createNewEvent: 'CREATE_NEW_EVENT',
      getPastEventsSuccess: 'GET_PAST_EVENTS_SUCCESS'
    },
    event: {
      getSingleEvent: 'GET_SINGLE_EVENT',
      getSingleEventSuccess: 'GET_SINGLE_EVENT_SUCCESS',
      getSingleEventFailure: 'GET_SINGLE_EVENT_FAILURE',
      clearEvent: 'CLEAR_EVENT'
    },
    auth: {
      authorize: 'AUTHORIZE',
      authorizeSuccess: 'AUTHORIZE_SUCCESS',
      authorizeFailure: 'AUTHORIZE_FAILURE',
      logout: 'LOGOUT'
    }
  }
}

export default actiontypes