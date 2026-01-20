import profile from '../assets/noprofile.webp'
import { useServer } from '../context'

const TopSpeciality = () => {
    const {doctors}=useServer()
   
  return (
    <div className="flex flex-col items-center py-6 bg-gradient-to-r from-[#F0F9FF] to-[#B3F5FF] w-full h-auto">
        <p className="text-2xl text-white bg-gradient-to-r from-[#0096FF] to-[#00EDFF] px-4 py-2 rounded-lg font-semibold w-[150px] text-center">Our Team</p>
        <p className="mt-5 text-xl sm:text-4xl font-bold ">Top Specialists <span className="bg-gradient-to-r from-[#0096FF] to-[#00EDFF] bg-clip-text text-transparent">Dedicated to Your Care</span></p>


        <div className="flex flex-col sm:flex-row gap-8 mt-10">
            {doctors?.slice(0,4).map(doc=>(
                <div className="flex  flex-col bg-white rounded-lg w-[300px]  h-auto shadow-lg p-6 gap-4">
           <img src={profile} alt="" className='rounded-lg shadow w-[250px] h-[100xp]' />
           <h1 className='text-xl font-semibold'>Dr. {doc.doctorname}</h1>
           <p className='text-sm font-semibold text-gray-500'>{doc.department}</p>
           <button className='bg-gradient-to-r from-[#0096FF] to-[#B3F5FF] px-4 py-2 font-semibold text-lg rounded-lg text-white'>Book now</button>
                </div>
            ))}
        </div>
    </div>
  )
}

export default TopSpeciality
