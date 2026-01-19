import {Routes,Route} from 'react-router-dom'
import Home from './pages/Home'
import Login from './pages/Login'
import { ToastContainer } from 'react-toastify'
import DoctorList from './pages/DoctorList'
import DoctorDepartment from './pages/DoctorDepartment'
import Admin from './pages/Admin'
import Doctor from './pages/Doctor'

const App = () => {
  return (
    <div className='bg-gray-100'>
      <ToastContainer/>
      <Routes>
         <Route path='/'  element={<Home/>}/>
         <Route path='/login'  element={<Login/>}/>
         <Route path='/doctorList' element={<DoctorList/>}/>
         <Route path='/doctordepartment/:department'  element={<DoctorDepartment/>}/>
         <Route path='/admin' element={<Admin/>}/>
         <Route path='/doctor'  element={<Doctor/>}/>
      </Routes>
    </div>
  )
}

export default App
