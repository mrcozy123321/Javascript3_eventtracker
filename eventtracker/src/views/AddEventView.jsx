import { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { addEvent } from '../store/actions/eventsActions';

const AddEventView = () => {

  const dispatch = useDispatch();
  const { userId } = useSelector(state => state.auth)

  const [inputValues, setInputValues] = useState({
    title: '',
    body: '',
    timeRemaining: ''
  })

  function handleChange(event) {
    const { name, value } = event.target;
    setInputValues({ ...inputValues, [name]: value})
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(addEvent({
      title: inputValues.title,
      body: inputValues.body,
      timeRemaining: inputValues.timeRemaining,
      userId: userId
    }))
  };

  return (
    <div className='from-container'>
      <form className='form-control' method='POST' action='/addevent' onSubmit={handleSubmit}>
        <input type="text" className='text-control' name="title" placeholder='Title' id='title' onChange={(e) => handleChange(e)} value={inputValues.title} />
        <textarea className='textarea-control' name="body" placeholder='Write something...' id="body" onChange={(e) => handleChange(e)} value={inputValues.body}></textarea>
        <div className='form-wrap'>
          <input type="dateTime-local" className='date-control' name='timeRemaining' id='timeRemaining' onChange={(e) => handleChange(e)} value={inputValues.timeRemaining}/>
        </div>

        <button className='btn btn-primary'>Create Event</button>
      </form>
    </div>
  )
}

export default AddEventView