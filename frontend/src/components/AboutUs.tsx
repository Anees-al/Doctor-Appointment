import aboutdoctor from '../assets/aboutdoctor.jpg'
import { FaEye } from "react-icons/fa6";
import { RxTarget } from "react-icons/rx";

const AboutUs = () => {
  return (
    <div className='flex flex-row gap-2 px-10 py-2 mt-10 gap-10 '>
     <div className='hidden sm:flex'>
        <img src={aboutdoctor} alt="" className='w-[700px] rounded-xl h-[650px]  shadow-lg ' />
     </div>
     <div className='flex flex-col gap-5'><p className='px-4 py-2 bg-gradient-to-r from-[#0096FF] to-[#00EDFF] text-white font-semibold text-lg w-[200px] rounded-lg shadow-lg'>AboutUs</p>
     <p className="text-xl sm:text-4xl font-semibold ">We Understand That Each One Is Unique  &  Their <span className="bg-gradient-to-r from-[#0096FF] to-[#00EDFF] bg-clip-text text-transparent">Health Journey</span> </p>
     <p className='text-gray-500'>We aim to provide faster diagnosis, clearer insights, and more accurate treatment decisions ensuring every patient receives safe, precise, and personalized care.</p>

     <div className='flex flex-col sm:flex-row gap-5'>
        <div className='flex flex-col  sm:w-[350px] h-[200px] bg-white rounded-lg shadow-lg p-4 gap-2'>
              <div className='flex flex-row text-2xl font-bold gap-2'> <p className='p-2 rounded-lg bg-blue-600'><RxTarget size={26} color='white'/></p>  <p>Our Missions</p></div>
            <p className='text-lg font-light text-gray-700'>To deliver compassionate, patient-first healthcare by combining expert clinical judgment with technology.</p>
        </div>
        <div className='flex flex-col sm:w-[350px] h-[200px] bg-white rounded-lg shadow-lg p-4 gap-2'>
          <div className='flex flex-row text-2xl font-bold gap-2'> <p className='p-2  bg-green-500 rounded-lg' ><FaEye size={26} color='white'/></p><p>Our Vision</p></div>
          <p className='text-lg font-light text-gray-700'>Empower doctors to detect conditions earlier, improve outcomes, and redefine the future of modern healthcare.</p>
        </div>
     </div>

     <button className='text-lg text-white px-5 py-2 bg-[#0096FF] rounded-lg font-semibold w-[200px] mt-10 cursor-pointer'>Know More</button>
     </div>
    </div>
  )
}

export default AboutUs
