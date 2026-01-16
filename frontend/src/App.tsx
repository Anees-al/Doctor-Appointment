import {Routes,Route} from 'react-router-dom'
import Home from './pages/Home'
import Login from './pages/Login'
import { ToastContainer } from 'react-toastify'
import DoctorList from './pages/DoctorList'

const App = () => {
  return (
    <div className='bg-gray-100'>
      <ToastContainer/>
      <Routes>
         <Route path='/'  element={<Home/>}/>
         <Route path='/login'  element={<Login/>}/>
         <Route path='/doctorList' element={<DoctorList/>}/>
      </Routes>
    </div>
  )
}

export default App
