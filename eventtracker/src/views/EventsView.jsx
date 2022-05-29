import React from 'react'
import { useSelector } from 'react-redux'
import Event from '../components/events/Event'

const EventsView = () => {
  

  const { error, data: events, loading } = useSelector(state => state.eventsReducer)
  
  return (
    <>
      { loading && <p>Loading...</p> }
      { error && <p>error</p> }
      <div>
        { events?.map(event => (<Event key={event._id} event={event} />)) }
      </div>
    </>
  )
}

export default EventsView