import React from 'react'
import { Routes, Route } from 'react-router-dom';
import AddEventView from './AddEventView'
import EventsView from './EventsView'
import SingleEventView from './SingleEventView'
import LoginView from './LoginView'
import RegisterView from './RegisterView'

const Views = () => {
  return (
    <Routes>
      <Route path='/' element={ <EventsView /> } />
      <Route path='/events/:id' element={ <SingleEventView />} />
      <Route path='/addevent' element={ <AddEventView /> } />
      <Route path='/login' element={ <LoginView /> } />
      <Route path='/register' element={ <RegisterView /> } />
    </Routes>
  )
}

export default Views