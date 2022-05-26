import React from 'react'
import { useSelector } from 'react-redux'
import Event from '../components/events/Event'

const EventsView = () => {

  const { error, data, loading } = useSelector(state => state.event)
  
  return (
    <>
      { loading && <p>Loading...</p> }
      { error && <p>error</p> }
      <div>

        { data?.map(event => <Event key={event.id} event={event} />) }
      </div>
    </>
  )
}

export default EventsView