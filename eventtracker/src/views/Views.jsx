import React from 'react'
import { Routes, Route } from 'react-router-dom';
import AddEventView from './AddEventView'
import EventsView from './EventsView'
import SingleEventView from './SingleEventView'

const Views = () => {
  return (
    <Routes>
      <Route path='/' element={ <EventsView /> } />
      <Route path='/events/:id' element={ <SingleEventView />} />
      <Route path='/addevent' element={ <AddEventView /> } />
    </Routes>
  )
}

export default Views