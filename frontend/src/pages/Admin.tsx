import { useServer } from "../context"

const Admin = () => {
  const {users,doctors}=useServer()
  return (
    <div className='flex flex-col '>
      <div className="flex flex-row p-5 justify-between bg-gradient-to-b from-gray-700 to-gray-900">
         <div>
        <p className="text-2xl font-semibold text-white ">Medi<span className="text-[#0096FF]">core</span>  <span className="text-sm font-normal">Admin</span> </p>
         </div>


         <div className="flex flex-row gap-6 text-sm font-semibold text-white">
           <p className="cursor-pointer ">DashBoard</p>
           <p className="cursor-pointer">Doctors</p>
           <p className="cursor-pointer">Users</p>
           <p className="cursor-pointer">Appointments</p>
         </div>
      </div>


      <div className="flex flex-row">
         <div className="w-[300px] min-h-screen bg-gradient-to-r from-slate-800 to-slate-700 text-white font-semibold">
             
         </div>
         <div className="grid grid-cols-3 gap-4 p-10 ">
            <div className="flex flex-col bg-white rounded-lg shadow-lg shadow-gray-400 p-10 w-[350px] h-[200px] items-center gap-2">
               <p className="text-lg font-semibold">Total Users</p>
               <p className="text-4xl font-semibold text-green-600">{users?.length}</p>
            </div>


            <div className="flex flex-col bg-white rounded-lg shadow-lg shadow-gray-400 p-10 w-[350px] h-[200px] items-center">
               <p className="text-lg font-semibold">Total Doctors</p>
               <p className="text-4xl font-semibold text-green-600">{doctors?.length}</p>
            </div>


            <div className="flex flex-col bg-white rounded-lg shadow-lg shadow-gray-400 p-10 w-[350px] h-[200px] items-center">
               <p className="text-lg font-semibold">Total Bookings</p>
            </div>

         </div>
      </div>
    </div>
  )
}

export default Admin
