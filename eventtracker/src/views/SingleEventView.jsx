import { useParams}  from 'react-router-dom'
import { useSelector } from 'react-redux';
import { useState, useEffect } from 'react';
import moment from 'moment'

const SingleEventView = () => {

  const { id } = useParams();
  const { data: events, loading } = useSelector(state => state.events)

  const [event, setEvent] = useState({})
  

  useEffect(() => {
    setEvent(events.find(event => event.id === parseInt(id)))
  }, [events, id])

  return (
    <div className='container'>
      <h1 className='event-title'>{event?.title}</h1>
      <p className='event-body'>{event?.body}</p>
      {/* <p className='event-time'>{moment(event.timeRemaining).fromNow()}</p> */}
    </div>
  )
}

export default SingleEventView