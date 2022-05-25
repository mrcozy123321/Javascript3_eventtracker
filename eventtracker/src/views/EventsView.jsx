import React from 'react'
import { useSelector } from 'react-redux'
import Event from '../components/events/Event'

const EventsView = () => {

  const { data, loading } = useSelector(state => state.events)
  return (
    <div>
      { loading && <p>Loading...</p> }
      { data.map(event => <Event key={event.id} event={event} />) }
    </div>
  )
}

export default EventsView