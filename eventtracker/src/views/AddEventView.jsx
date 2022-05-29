import { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux';

const AddEventView = () => {

  const [eventData, setEventData] = useState({
    title: '',
    body: '',
    timeRemaining: ''
  })

  const onChange = e => {
    setEventData(state => ({
      ...state,
      [e.target.name]: e.target.value
    }))
  }

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div className='from-container'>
      <form className='form-control' onSubmit={handleSubmit}>
        <input type="text" className='text-control' name="title" placeholder='Title' id='title' onChange={onChange} value={eventData.title} />
        <textarea className='textarea-control' name="body" placeholder='Write something...' id="body" onChange={onChange} value={eventData.body}></textarea>
        <div className='form-wrap'>
          <input type="dateTime-local" className='date-control' name='timeRemaining' id='timeRemaining' onChange={onChange} value={eventData.timeRemaining}/>
        </div>

        <button className='btn btn-primary'>Create Event</button>
      </form>
    </div>
  )
}

export default AddEventView