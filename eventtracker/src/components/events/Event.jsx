import React from 'react'
import { Link } from 'react-router-dom'

const Event = ({ event }) => {
  return (
    <Link className='event' to={`/events/${event._id}`}>
      <h2>{event.title}</h2>
      <p>{event.body.slice(0,50)}...</p>
      <p>{event.timeRemaining}</p>
    </Link>
  )
}

export default Event