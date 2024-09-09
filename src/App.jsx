import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Main from './pages/common/Main'
import Login from './pages/common/Login'
import JoinUser from './pages/common/JoinUser'
import JoinManager from './pages/common/JoinManager'
import CampList from './pages/common/CampList'
import CampDetail from './pages/common/CampDetail'
import Chat from './pages/common/Chat'
import Reservation from './pages/common/Reservation'
import ReservationDetail from './pages/common/ReservationDetail'
import ManagerRoutes from './routes/ManagerRoutes'
import UserRoutes from './routes/UserRoutes'

function App() {

  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Main/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/joinuser' element={<JoinUser/>}/>
        <Route path='/joinmanager' element={<JoinManager/>}/>
        <Route path='/camplist' element={<CampList/>}/>
        <Route path='/campDetail/:id' element={<CampDetail/>}/>
        <Route path='/chat/:id' element={<Chat/>}/>
        <Route path='/reservation' element={<Reservation/>}/>
        <Route path='/reservationdetail/:id' element={<ReservationDetail/>}/>

        
        <Route path='/manager/*' element={<ManagerRoutes/>} />
                <Route path='/user/*' element={<UserRoutes />} />
      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
