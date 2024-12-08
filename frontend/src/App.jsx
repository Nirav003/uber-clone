import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Start from './pages/Start';
import Home from './pages/Home';
import UserLogin from './pages/userLogin';
import UserSignup from './pages/userSignup';
import CaptainLogin from './pages/captainLogin';
import CaptainSignup from './pages/captainSignup';
import UserProtectedWrapper from './pages/UserProtectedWrapper';
import UserLogout from './pages/UserLogout';
import CaptainHome from './pages/CaptainHome';
import CaptainProtectedWrapper from './pages/CaptainProtectedWrapper';

const App = () => {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Start />} />
        <Route path='/login' element={<UserLogin />} />
        <Route path='/signup' element={<UserSignup />} />
        <Route path='/captain-login' element={<CaptainLogin />} />
        <Route path='/captain-signup' element={<CaptainSignup />} />
        <Route 
          path='/home'
          element={
            <UserProtectedWrapper>
              <Home />
            </UserProtectedWrapper>
        }/>
        <Route 
          path='/user/logout' 
          element={
            <UserProtectedWrapper>
              <UserLogout />
            </UserProtectedWrapper>
        } />
        <Route 
          path='/captain-home'
          element={
            <CaptainProtectedWrapper>
              <CaptainHome />
            </CaptainProtectedWrapper>
          }
        />
      </Routes>
    </div>
  )
}

export default App