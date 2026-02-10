import { useState } from 'react'
import './App.css'
import Home from './Pages/Home'
import { Route, Routes } from 'react-router-dom'
import Auth from './Pages/Auth'
import CommunityFeed from './users/Pages/CommunityFeed'
import Friends from './users/Pages/Friends'
import Profile from './users/Pages/Profile'
import Trainers from './users/Pages/Trainers'
import TrainerDashboard from './trainers/Pages/TrainerDashboard'
import Messages from './trainers/Pages/Messages'
import Schedules from './trainers/Pages/Schedules'
import TrainerEarnings from './trainers/Pages/TrainerEarnings'
import MyClients from './trainers/Pages/MyClients'
import MyTrainers from './users/Pages/MyTrainers'
import UserMessages from './users/Pages/UserMessages'
import PaymentSuccess from './users/Pages/PaymentSuccess'
import PaymentError from './users/Pages/PaymentError'

function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/login' element={<Auth />} />
        <Route path='/register' element={<Auth register />} />
        <Route path='/community-feed' element={<CommunityFeed />} />
       <Route path='/friends' element={<Friends />} /> 
       <Route path='/profile' element={<Profile />} /> 
       <Route path='/trainers' element={<Trainers />} /> 
       <Route path='/my-trainers' element={<MyTrainers/>}/>
       <Route path='/messages' element={<UserMessages/>}/>
       <Route path='/payment-success' element={<PaymentSuccess/>}/>
       <Route path='/payment-error' element={<PaymentError/>}/>
       {/* Trainer */}
        <Route path='trainer-dashboard' element={<TrainerDashboard/>}/>
        <Route path='trainer-messages' element={<Messages/>}/>
        <Route path='trainer-schedules' element={<Schedules/>}/>
        <Route path='trainer-earnings' element={<TrainerEarnings/>}/>
        <Route path='myclients' element={<MyClients/>}/>
      </Routes>
    </>

  )
}

export default App
