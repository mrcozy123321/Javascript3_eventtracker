import React from 'react'

const AddEventView = () => {

  return (
    <div className='from-container'>
      <form className='form-control'>
        <input type="text" className='text-control' name="title" placeholder='Title' id='title' />
        <textarea className='textarea-control' name="body" placeholder='Write something...' id="body"></textarea>
        <div className='form-wrap'>
          <input type="date" className='date-control' name="date" id="date" />
          <input type="time" className='time-control' name="time" id='time' />  
        </div>

        <button className='btn btn-primary'>Submit</button>
      </form>
    </div>
  )
}

export default AddEventView