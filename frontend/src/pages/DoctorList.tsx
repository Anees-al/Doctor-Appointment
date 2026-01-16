import Nav from "../components/Nav"
import whitepattern from '../assets/whitepattern.jpg'
import doctor1 from '../assets/doctor1.jpg'

const DoctorList = () => {
    
  return (
    <div >
        <Nav/>
        <div className="flex flex-col ">
          <div className="flex flex-col items-center justify-center p-20" style={{backgroundImage:`url(${whitepattern})`,backgroundSize:'cover'}} >
            <h1 className="text-4xl font-semibold ">Doctors List</h1>
          </div>

          <div className="flex flex-row  gap-[100px] sm:p-5">
               <div className="hidden sm:flex flex-col bg-white w-[300px] h-[700px] rounded-lg shadow-lg p-5">
                <p className="text-lg font-semiboold">Filters</p>
                <hr className="border-t-2 border-gray-300 my-2"/>

                <div className="flex flex-col gap-3">
                    <select name="" id="" className="p-2   outline-none font-semibold text-gray-700">
                    <option value="">All Departments</option>
                   <option value="Cardiology">Cardiology</option>
                   <option value="Pediatrics">Pediatrics</option>
                   <option value="Neurology">Neurology</option>
                </select>
                <hr className="border-t-2 border-gray-300 "/>
                <select name="" id="" className="p-2   outline-none font-semibold text-gray-700">
                    <option value="">All Gender</option>
                   <option value="Male">Male</option>
                   <option value="Female">Female</option>
                   
                </select>
                </div>
               </div>

               <div className="flex flex-col p-10 sm:flex-row gap-3">
                   <div className="flex flex-col sm:flex-row w-[300px] sm:w-[900px] bg-white h-auto sm:h-[250px] rounded-lg shadow-lg border border-gray-300">
                      <img src={doctor1} alt="" className="h-full w-[300px] rounded-l-lg"/>
                      <div className="flex flex-col p-5 w-full">
                       <p className="text-sm font-semibold text-green-500">Nuerologist</p>
                       <hr className="border-t-2 border-gray-300 w-full mt-3"/>

                       <div className="flex flex-row justify-between mt-5">
                          <div className="flex flex-col">
                            <p className="font-semibold">Dr Aliya sameer</p>
                            <p className="text-xs text-gray-400">MBBS MD general medicine</p>
                          </div>

                          <div>
                            <p className="text-sm text-gray-400 text-semibold">English ,Malayalam</p>
                          </div>
                       </div>


                       <div className="flex   flex-col sm:flex-row justify-between mt-7">
                        <div className="flex flex-col gap-1 ">
                            <p className="text-sm sm:text-lg font-semibold">Consultationfee</p>
                            <p className="text-lg sm:text-2xl font-semibold text-orange-600">₹500</p>
                        </div>


                         <div className="flex flex-col gap-1 ">
                            <p className="text-sm sm:text-lg font-semibold">Available time</p>
                            <p className="text-sm font-semibold text-green-600">9:00 -10:00</p>
                        </div>

                        <button className="text-lg font-semibold text-white p-2  bg-gradient-to-r from-[#0096FF] to-[#00EDFF] rounded-lg shadow-lg cursor-pointer">Book Appointment</button>
                       </div>
                      </div>
                   </div>
               </div>
          </div>
        </div>
      
    </div>
  )
}

export default DoctorList
