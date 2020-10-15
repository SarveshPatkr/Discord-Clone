import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './App.css';
import Chat from './Chat';
import Sidebar from './Sidebar.js';
import { selectUser } from './features/userSlice'
import { login, logOut } from './features/userSlice'
import Login from './Login.js';
import { useEffect } from 'react';
import { auth } from './firebase';



function App() {
  const dispatch = useDispatch();


  const user = useSelector(selectUser);

  useEffect(() => {
    auth.onAuthStateChanged((AuthUser) => {
      console.log('user is ', AuthUser);
      if (AuthUser) {
        dispatch(login({
          uid: AuthUser.uid,
          photo: AuthUser.photoURL,
          email:AuthUser.email,
          displayName: AuthUser.displayName
        }));
      }
      else {
        dispatch(logOut());
      }
    });
  }, [dispatch])





  return (
    <div className="app">
      { user ? (
        < >
          < Sidebar />
          <Chat />
        </>
      ) : (
          <Login />
        )}

    </div>
  )
}

export default App;
