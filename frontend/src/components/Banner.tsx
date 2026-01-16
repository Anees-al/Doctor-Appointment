import { FaUserDoctor } from "react-icons/fa6";
import  {motion} from 'framer-motion';
import { useNavigate } from "react-router-dom";

const Banner = () => {
const navigate=useNavigate()
  return (
    <div className="flex flex-col sm:flex-row justify-center items-center sm:bg-white p-3 min-w-screen h-[600px] sm:h-[350px] mt-10 gap-7" >
      <motion.div className="flex flex-row justify-between gap-3 shadow-lg shadow-gray-400 sm:shadow-none p-4  rounded-lg bg-white" initial={{y:-200,opacity:0}} whileInView={{y:0,opacity:1}} transition={{duration:0.7}}>
         <div className="hidden sm:flex justify-center items-center w-[70px]  bg-[#0096FF] h-[70px] mt-5  rounded-full shadow">
            <FaUserDoctor size={30} color="white" />
         </div>
         <div className="flex flex-col gap-3">
            <h1 className="text-2xl font-bold">Our Doctors</h1>
            <p className="  w-[300px] text-gray-600">Once the family has reached a decision, the team informs the relevant parties.</p>
            <p className=" sm:text-lg underline decoration-[#0096FF] underline-offset-8">+ FIND A DOCTOR</p>
         </div>
      </motion.div>
      <motion.div className="flex flex-row justify-between gap-3  p-4 shadow-lg shadow-gray-400 sm:shadow-none bg-white  rounded-lg" initial={{y:-200,opacity:0}} whileInView={{y:0,opacity:1}} transition={{duration:0.7}}>
         <div className="hidden sm:flex justify-center items-center w-[70px]  bg-[#0096FF] h-[70px] mt-5  rounded-full shadow">
            <FaUserDoctor size={30} color="white" />
         </div>
         <div className="flex flex-col gap-3">
            <h1 className="text-2xl font-bold">Our Doctors</h1>
            <p className="  w-[300px] text-gray-600">Once the family has reached a decision, the team informs the relevant parties.</p>
            <p className="sm:text-lg underline decoration-[#0096FF] underline-offset-8 cursor-pointer" onClick={()=>navigate('/doctorlist')}>+ FIND A DOCTOR</p>
         </div>
      </motion.div>
      <motion.div className="flex flex-row justify-between gap-3   p-4 shadow-lg shadow-gray-400 sm:shadow-none  bg-white  rounded-lg" initial={{y:-200,opacity:0}} whileInView={{y:0,opacity:1}} transition={{duration:0.7}}>
         <div className=" hidden sm:flex justify-center items-center w-[70px]  bg-[#0096FF] h-[70px] mt-5  rounded-full shadow">
            <FaUserDoctor size={30} color="white" />
         </div>
         <div className="flex flex-col gap-3">
            <h1 className="text-2xl font-bold">Our Doctors</h1>
            <p className="  w-[300px] text-gray-600">Once the family has reached a decision, the team informs the relevant parties.</p>
            <p className="sm:text-lg underline decoration-[#0096FF] underline-offset-8">+ FIND A DOCTOR</p>
         </div>
      </motion.div>
    </div>
  )
}

export default Banner
