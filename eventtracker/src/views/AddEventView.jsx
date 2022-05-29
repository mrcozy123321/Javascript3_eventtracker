import { useState, useEffect } from 'react'
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

  const [validation, setValidation] = useState({
    title: null,
    body: null,
    timeRemaining: null
  });

  function handleChange(event) {
    const { name, value } = event.target;
    setInputValues({ ...inputValues, [name]: value})
  }

  const checkTitleValidation = () => {
    let errors = validation;

    if(!inputValues.title.trim()) {
      errors.title = "Title is required"
    }
    else {
      errors.title = ""
    }
    setValidation(errors);
  }

  const checkBodyValidation = () => {
    let errors = validation;

    if(!inputValues.body.trim()) {
      errors.body = "Please add an description to the event"
    }
    else {
      errors.body = ""
    }

    setValidation(errors);
  }

  const checkTimeRemainingValidation = () => {
    let errors = validation;

    if(!inputValues.timeRemaining) {
      errors.timeRemaining = "Set a time for the event"
    }
    else {
      errors.timeRemaining = ""
    }

    setValidation(errors);
  }

  useEffect(() => {
    inputValues.title.length > 0 && checkTitleValidation();
  }, [inputValues.title]);

  useEffect(() => {
    inputValues.body.length > 0 && checkBodyValidation();
  }, [inputValues.body]);

  useEffect(() => {
    inputValues.timeRemaining.length > 0 && checkTimeRemainingValidation();
  }, [inputValues.timeRemaining]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if(validation.title === '' && validation.body === '' && validation.timeRemaining === '') {
      dispatch(addEvent({
        title: inputValues.title,
        body: inputValues.body,
        timeRemaining: inputValues.timeRemaining,
        userId: userId
      }))
    }
  };

  return (
    <div className='from-container'>
      <form className='form-control' method='POST' action='/addevent' onSubmit={handleSubmit}>
        {validation.title && <p>{validation.title}</p>}
        {validation.body && <p>{validation.body}</p>}
        {validation.timeRemaining && <p>{validation.timeRemaining}</p>}
        <input type="text" className='text-control' name="title" placeholder='Title' id='title' onChange={(e) => handleChange(e)} value={inputValues.title} required/>
        <textarea className='textarea-control' name="body" placeholder='Write something...' id="body" onChange={(e) => handleChange(e)} value={inputValues.body} required></textarea>
        <div className='form-wrap'>
          <input type="dateTime-local" className='date-control' name='timeRemaining' id='timeRemaining' onChange={(e) => handleChange(e)} value={inputValues.timeRemaining} required/>
        </div>

        <button className='btn btn-primary'>Create Event</button>
      </form>
    </div>
  )
}

export default AddEventView