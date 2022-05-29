import React from 'react'
import { Routes, Route } from 'react-router-dom';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { getUserEvents } from '../store/actions/eventsActions';
import { checkAuth } from '../store/actions/authorizeActions';

import AddEventView from './AddEventView'
import EventsView from './EventsView'
import SingleEventView from './SingleEventView'
import LoginView from './LoginView'
import RegisterView from './RegisterView'

const Views = () => {

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getUserEvents())
    dispatch(checkAuth())
  }, [dispatch])

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