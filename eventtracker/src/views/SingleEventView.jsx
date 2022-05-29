import { useParams}  from 'react-router-dom'
import { useSelector } from 'react-redux';
import { useState, useEffect } from 'react';

const SingleEventView = () => {

  const { id } = useParams();
  const { data: events, loading } = useSelector(state => state.events)

  const [event, setEvent] = useState({})
  

  useEffect(() => {
    setEvent(events.find(event => event.id === parseInt(id)))
  }, [events, id])

  return (
    <div>
      <p>{event?.body}</p>
    </div>
  )
}

export default SingleEventView