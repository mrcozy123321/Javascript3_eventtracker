import React from 'react'
import { Routes, Route } from 'react-router-dom';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getUserEvents } from '../store/actions/eventsActions';
import { checkAuth } from '../store/actions/authorizeActions';

import AddEventView from './AddEventView'
import EventsView from './EventsView'
import SingleEventView from './SingleEventView'
import LoginView from './LoginView'
import RegisterView from './RegisterView'

const Views = () => {

  const dispatch = useDispatch()
  const { userId } = useSelector(state => state.auth)

  useEffect(() => {
    dispatch(checkAuth())
  }, [dispatch])
  
  useEffect(() => {
    dispatch(getUserEvents(userId))
  }, [dispatch, userId])


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