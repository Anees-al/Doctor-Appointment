import { FaUserDoctor } from "react-icons/fa6";

const Banner = () => {
  return (
    <div className="flex flex-col sm:flex-row justify-center items-center sm:bg-white p-3 min-w-screen h-[600px] sm:h-[350px] mt-10 gap-7">
      <div className="flex flex-row justify-between gap-3 sm:border-none border p-4 border-blue-600 rounded-lg bg-white">
         <div className="hidden sm:flex justify-center items-center w-[70px]  bg-[#0096FF] h-[70px] mt-5  rounded-full shadow">
            <FaUserDoctor size={30} color="white" />
         </div>
         <div className="flex flex-col gap-3">
            <h1 className="text-2xl font-bold">Our Doctors</h1>
            <p className="  w-[300px] text-gray-600">Once the family has reached a decision, the team informs the relevant parties.</p>
            <p className=" sm:text-lg underline decoration-[#0096FF] underline-offset-8">+ FIND A DOCTOR</p>
         </div>
      </div>
      <div className="flex flex-row justify-between gap-3 sm:border-none border p-4 border-blue-600 rounded-lg">
         <div className="hidden sm:flex justify-center items-center w-[70px]  bg-[#0096FF] h-[70px] mt-5  rounded-full shadow">
            <FaUserDoctor size={30} color="white" />
         </div>
         <div className="flex flex-col gap-3">
            <h1 className="text-2xl font-bold">Our Doctors</h1>
            <p className="  w-[300px] text-gray-600">Once the family has reached a decision, the team informs the relevant parties.</p>
            <p className="sm:text-lg underline decoration-[#0096FF] underline-offset-8">+ FIND A DOCTOR</p>
         </div>
      </div>
      <div className="flex flex-row justify-between gap-3 sm:border-none border p-4 border-blue-600 rounded-lg">
         <div className=" hidden sm:flex justify-center items-center w-[70px]  bg-[#0096FF] h-[70px] mt-5  rounded-full shadow">
            <FaUserDoctor size={30} color="white" />
         </div>
         <div className="flex flex-col gap-3">
            <h1 className="text-2xl font-bold">Our Doctors</h1>
            <p className="  w-[300px] text-gray-600">Once the family has reached a decision, the team informs the relevant parties.</p>
            <p className="sm:text-lg underline decoration-[#0096FF] underline-offset-8">+ FIND A DOCTOR</p>
         </div>
      </div>
    </div>
  )
}

export default Banner
