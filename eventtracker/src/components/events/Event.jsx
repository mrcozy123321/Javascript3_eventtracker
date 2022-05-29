import React from 'react'
import { Link } from 'react-router-dom'
import moment from 'moment'

const Event = ({ event }) => {
  return (
    <Link className='event' to={`/events/${event.id}`}>
      <h2>{event.title}</h2>
      <p>{event.body.slice(0,50)}...</p>
      <p>{moment(event.timeRemaining).fromNow()}</p>
    </Link>
  )
}

export default Event