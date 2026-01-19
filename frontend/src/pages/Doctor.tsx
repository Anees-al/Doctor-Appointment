import Nav from "../components/Nav"
import pic from '../assets/doctor1.jpg'
import Footer from "../components/Footer"
import DatePicker from 'react-datepicker';
import { useState } from "react";
import "react-datepicker/dist/react-datepicker.css";
import "../styles/datepicker.css"


const Doctor = () => {
    const [startDate, setStartDate] = useState(new Date());
  return (
    <div className="bg-gray-200  h-auto">
        <Nav/>


        <div className="flex flex-row gap-6 p-5">
               <div className="flex flex-co bg-white w-[400px] "></div>
               <div className="flex  flex-col  items-center min-h-screen">
               <div className="flex flex-col items-center sm:flex-row p-8 bg-white h-auto w-auto sm:w-[700px] rounded-lg shadow-lg mt-10">
                    <div>
                        <img src={pic} alt=""  className="w-[200px] h-[200px] rounded-full"/>
                    </div>
                    <div className="flex flex-col ml-4 gap-1  justify-center">
                        <p className="text-lg font-bold">Dr Arya jhon</p>
                        <p className="text-sm font-semibold text-green-600">Cardiologist</p>
                        <p className="text-gray-500 font-semibold">thiruvanathapuram kims hospital</p>
                    </div>
               </div>
                  

                  <h1 className="mt-10 text-lg font-semibold p-3 bg-black text-white rounded-lg w-[700px]">Select Date</h1>

              <div className="flex flex-col gap-2 sm:flex-row p-18 bg-white w-auto justify-center  sm:w-[700px] rounded-lg shadow-lg mt-3 overflow-hidden mb-3">
                
    <DatePicker 
      selected={startDate} 
      onChange={(date:any) => setStartDate(date)} 
      inline // This makes the calendar "always open"
      className="border rounded-md p-7 w-[400px]"
    />
  </div>
        </div>
      <div className="flex flex-co bg-white w-[400px] rounded-lg shadow-lg "></div>
        </div>
          <Footer/>
      
    </div>
  )
}

export default Doctor
