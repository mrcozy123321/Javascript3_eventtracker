import actiontypes from '../actiontypes';
import axios from 'axios';

// export const getData = async (path, params) => {
//   return async (dispatch) => {
//     dispatch({
//       type: actiontypes().events.getEvents
//     })
//     try {
//       const urlParams = new URLSearchParams(params).toString()
//       const res = await axios.get(`http://localhost:8080/${path}?${urlParams}`)
//       return res
//     }
//     catch (err) {
//       console.log(err)
//     }
//   }
// }

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
    dispatch({
      type: actiontypes().events.getEvents
    })
    try {
      const res = await axios.get(`http://localhost:8080/events?userId=${userId}`)
        const futureEvents = res.data.filter(event => event.timeRemaining > Date.now())
        const pastEvents = res.data.filter(event => event.timeRemaining < Date.now())
        dispatch(getEventsSuccess(futureEvents))
        dispatch(getPastEventsSuccess(pastEvents))
    }
    catch (err) {
      dispatch(getEventsFailure(err.message))
    }
  }
}


export const addEvent = event => {
  return async dispatch => {
    // dispatch(getEvents(true))
    try {
      const res = await axios.get('http://localhost:8080/events', event)
      dispatch(addToList(res.data))
    }
    catch (err) {
      dispatch(getEventsFailure(err.message))
    }
  }
}

const addToList = event => {
  return {
    type: actiontypes().events.createNewEvent,
    payload: event
  }
}

// const getEvents = payload => {
//   return {
//     type: actiontypes().events.getEvents,
//     payload
//   }
// }

const getEventsSuccess = events => {
  return {
    type: actiontypes().events.getEventsSuccess,
    payload: events
  }
}

const getEventsFailure = payload => {
  return {
    type: actiontypes().events.getEventsFailure,
    payload
  }
}

const getPastEventsSuccess = events => {
  return {
    type: actiontypes().events.getPastEventsSuccess,
    payload: events
  }
}