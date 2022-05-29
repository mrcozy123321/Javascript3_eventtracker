import './App.css';
import Navbar from './components/Navbar';
import Views from './views/Views';
// import { useEffect } from 'react';
// import { useDispatch } from 'react-redux';
// import { getUserEvents } from './store/actions/eventsActions';
// import { checkAuth } from './store/actions/authorizeActions';



function App() {

  // const dispatch = useDispatch()

  // useEffect(() => {
  //   dispatch(getUserEvents())
  //   dispatch(checkAuth())
  // }, [dispatch])
  
  return (
    <div className="App">
      <Navbar />
      <div className='container'>
        <Views />
      </div>
    </div>
  );
}

export default App;
