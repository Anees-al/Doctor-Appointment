import Nav from "../components/Nav"
import whitepattern from '../assets/whitepattern.jpg'
import doctor1 from '../assets/doctor1.jpg'
import Footer from "../components/Footer"
import { useEffect, useState } from "react"
import axios from "axios"
import { useParams } from "react-router-dom"
import { useServer } from "../context"


interface Doctor {
  _id: string;
  doctorname: string;
  department: string;
  doctorimage: string;
  fees: number;
  languages: string[];
  qualification: string[];
  experience: number;
  location:string;
  hospital:string;
  available:boolean;
}

const DoctorDepartment = () => {
    const [doctors,setDoctors]=useState<Doctor[]>([]);
    const {department}=useParams()
    const {BASE_URL}=useServer()


    useEffect(()=>{
     const fetchDoctors=async()=>{
      try {
        const res=await axios.get(`${BASE_URL}api/doctor/getdoctorsbydepartment/${department}`);
        setDoctors(res.data.doctors);
        console.log(doctors)

      } catch (error) {
        console.log(error)
      }
     }

     fetchDoctors();
    },[])
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

               <div className="flex flex-col p-10  gap-3">
                  {doctors.map((doctor)=>(
                         <div className="flex flex-col sm:flex-row w-[300px] sm:w-[900px] bg-white h-auto sm:h-[270px] rounded-lg shadow-lg border border-gray-300">
                      
                      <img src={doctor1} alt="" className="h-full w-[300px] rounded-l-lg"/>
                      <div className="flex flex-col p-5 w-full">
                        <div className="flex flex-row justify-between">
                        <p className="text-sm font-semibold text-green-500">{doctor.department}</p>
                        <div className="hidden sm:flex flex-col text-xs text-white p-2 bg-red-500 rounded-lg font-semibold">
                              <p>{doctor.hospital}</p>
                              <p>{doctor.location}</p>
                            </div>
                       {doctor.available===true? <p className="p-1 px-3  rounded-lg text-xs font-semibold text-green-700">Available</p>: <p className="p-1 bg-red-300 rounded-lg text-xs font-semibold text-red-700">Not Available</p> }
                        </div>
                       
                       <hr className="border-t-2 border-gray-300 w-full mt-3"/>

                       <div className="sm:hidden flex flex-col mt-2 text-xs text-white p-2 bg-red-500 rounded-lg font-semibold">
                              <p>{doctor.hospital}</p>
                              <p>{doctor.location}</p>
                            </div>

                       <div className="flex flex-row justify-between mt-5">
                          <div className="flex flex-col">
                            <p className="font-semibold">{doctor.doctorname}</p>

                            
                            <p className=" flex flex-row gap-2 text-xs text-gray-400">{doctor.qualification.map(q=>(
                              <p >{q}</p>
                            ))}</p>
                          </div>

                          

                          <div>
                            <p className="text-sm text-gray-400 text-semibold">{doctor.languages.map(l=>(
                              <p>{l}</p>
                            ))}</p>
                          </div>
                       </div>


                       <div className="flex   flex-col sm:flex-row justify-between mt-7">
                        <div className="flex flex-col gap-1 ">
                            <p className="text-sm sm:text-lg font-semibold">Consultationfee</p>
                            <p className="text-lg sm:text-2xl font-semibold text-orange-600">₹{doctor.fees}</p>
                        </div>


                         <div className="flex flex-col gap-1 ">
                            <p className="text-sm sm:text-lg font-semibold">Available time</p>
                            <p className="text-sm font-semibold text-green-600">9:00 -10:00</p>
                        </div>

                        <button className="text-lg font-semibold text-white p-1   bg-gradient-to-r from-[#0096FF] to-[#00EDFF] rounded-lg shadow-lg cursor-pointer">Book Appointment</button>
                       </div>
                      </div>
                   </div>
                      ))}
               </div>
          </div>
        </div>

        <Footer/>
      
    </div>
  )
}

export default DoctorDepartment
