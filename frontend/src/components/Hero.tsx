import doctormain from '../assets/doctormain.jpg'

const Hero = () => {
  return (
    <div style={{backgroundImage:`url(${doctormain})`, backgroundSize:'cover',backgroundPosition:'center'}}  className=' flex flex-col w-full min-h-screen '>
      <div className='mt-[250px] p-10'>
         <p className='text-lg font-semibold text-white'>SERVING TO THE PEOPLE SINCE 2010</p>  
         <p className=' text-xl sm:text-6xl font-black w-[600px] text-white'>On a Pursuit of Better <span className='text-[#0096FF]'> Medicine</span></p>
         <p className='text:sm sm:text-3xl font-bold w-[300px] sm:w-[800px] mt-5'>This is open to everyone every day and provides primary health care and cutting-edge medicine in a central location</p>

         <button className="flex px-7 py-3 text-white font-semibold bg-[#0096FF] rounded-lg shadow cursor-pointer mt-10 hover:shadow-lg hover:bg-[#1F51FF]">Appointment</button>
      </div>
    </div>
  )
}

export default Hero
