import actiontypes from '../actiontypes';
import axios from 'axios';

export const getData = async (path, params) => {
  return async () => {
    try {
      const urlParams = new URLSearchParams(params).toString()
      const res = await axios.get(`http://localhost:8080/${path}?${urlParams}`)
      return res
    }
    catch (err) {
      console.log(err)
    }
  }
}

// export const getEvents = () => {
//   return async dispatch => {
//     dispatch(setEventsLoading(true))
//     try {
//       const res = await axios.get(`http://localhost:8080/events?userId=${userId}`)
//       // const res = await getData('events')
//       dispatch(setEvents(res.data))
//     }
//     catch (err) {
//       dispatch(setEventsFailure(err.message))
//     }
//   }
// }

export const getUserEvents = (userId) => {
  return async dispatch => {
    dispatch(setEventsLoading(true))
    try {
      // const res = await axios.get(`http://localhost:8080/events?userId=${userId}`)
      const res = await getData('events', {
        'userId': userId,
      })
      dispatch(setEvents(res.data))
    }
    catch (err) {
      dispatch(setEventsFailure(err.message))
    }
  }
}


export const addEvent = event => {
  return async dispatch => {
    dispatch(setEventsLoading(true))
    try {
      const res = await axios.get('http://localhost:8080/events', event)
      dispatch(addToList(res.data))
    }
    catch (err) {
      dispatch(setEventsFailure(err.message))
    }
  }
}

const addToList = event => {
  return {
    type: actiontypes().events.createNewEvent,
    payload: event
  }
}

const setEventsLoading = payload => {
  return {
    type: actiontypes().events.setEventsLoading,
    payload
  }
}

const setEvents = events => {
  return {
    type: actiontypes().events.setEvents,
    payload: events
  }
}

const setEventsFailure = payload => {
  return {
    type: actiontypes().events.setEventsFailure,
    payload
  }
}