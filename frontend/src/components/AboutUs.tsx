import aboutdoctor from '../assets/aboutdoctor.jpg'
import { FaEye } from "react-icons/fa6";
import { RxTarget } from "react-icons/rx";
import { TbClover } from "react-icons/tb";
import {motion} from 'framer-motion'

const AboutUs = () => {
  return (
    <div className='flex flex-row gap-2 px-10 py-2 mt-10 gap-10 '>
     <div className='hidden sm:flex'>
        <img src={aboutdoctor} alt="" className='w-[700px] rounded-xl h-[650px]  shadow-lg ' />
     </div>
     <div className='flex flex-col gap-5'><p className='flex flex-row px-4 py-2 bg-gradient-to-r from-[#0096FF] to-[#00EDFF] text-white font-semibold text-lg w-[200px] rounded-lg shadow-lg'>  <motion.span className='inline-flex items-center justify-center w-6 h-6 mr-1' animate={{rotate:360}}  transition={{ repeat: Infinity, duration: 4, ease: "linear" }}><TbClover  /></motion.span>  AboutUs</p>
     <p className="text-xl sm:text-4xl font-semibold ">We Understand That Each One Is Unique  &  Their <span className="bg-gradient-to-r from-[#0096FF] to-[#00EDFF] bg-clip-text text-transparent">Health Journey</span> </p>
     <p className='text-gray-500'>We aim to provide faster diagnosis, clearer insights, and more accurate treatment decisions ensuring every patient receives safe, precise, and personalized care.</p>

     <div className='flex flex-col sm:flex-row gap-5'>
        <motion.div className="relative flex h-[200px] sm:w-[350px] overflow-hidden rounded-lg p-[2px] shadow-lg" initial={{x:-200,opacity:0}} whileInView={{x:0,opacity:1}} transition={{duration:0.7}}>
      
    
      <motion.div
        className="absolute inset-[-1000%] bg-[conic-gradient(from_90deg_at_50%_50%,#3b82f6_0%,#eff6ff_50%,#3b82f6_100%)]"
        animate={{
          rotate: [0, 360],
        }}
        transition={{
          duration: 1,
          repeat: Infinity,
          ease: "linear",
        }}
      />

      
      <div className="relative flex h-full w-full flex-col gap-2 rounded-lg bg-white p-4">
        <div className="flex flex-row items-center gap-2 text-2xl font-bold">
          <p className="rounded-lg bg-blue-600 p-2">
            <RxTarget size={26} color="white" />
          </p>
          <p>Our Vissions</p>
        </div>
        <p className="text-lg font-light text-gray-700">
          Empower doctors to detect conditions earlier, improve outcomes, and redefine the future of modern healthcare.
        </p>
      </div>
    </motion.div>
  
        <motion.div className="relative flex h-[200px] sm:w-[350px] overflow-hidden rounded-lg p-[2px] shadow-lg" initial={{x:200,opacity:0}} whileInView={{x:0,opacity:1}} transition={{duration:0.7}}>
      
      {/* 2. The Animated Gradient Layer */}
      <motion.div
        className="absolute inset-[-1000%] bg-[conic-gradient(from_90deg_at_50%_50%,#10b981_0%,#ecfdf5_50%,#10b981_100%)]"
        animate={{
          rotate: [0, 360],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "linear",
        }}
      />

      {/* 3. Your Original Card Content (The Mask) */}
      <div className="relative flex h-full w-full flex-col gap-2 rounded-lg bg-white p-4">
        <div className="flex flex-row items-center gap-2 text-2xl font-bold">
          <p className="rounded-lg bg-green-600 p-2">
            <FaEye size={26} color="white" />
          </p>
          <p>Our Missions</p>
        </div>
        <p className="text-lg font-light text-gray-700">
          To deliver compassionate, patient-first healthcare by combining expert
          clinical judgment with technology.
        </p>
      </div>
    </motion.div>
  
     </div>

     <button className='text-lg text-white px-5 py-2 bg-[#0096FF] rounded-lg font-semibold w-[200px] mt-10 cursor-pointer'>Know More</button>
     </div>
    </div>
  )
}

export default AboutUs
