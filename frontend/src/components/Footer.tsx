import footerbg from '../assets/gpt8.jpg'

const Footer = () => {
  return (
    <div className='flex flex-col'>
  <div style={{backgroundImage:`url(${footerbg})`,backgroundSize:'cover'}} className='flex flex-col sm:flex-row w-full h-auto p-10 justify-between'>
      <div className='flex flex-col gap-6'>
         <h1 className="text-3xl font-bold text-white">Medi<span className="text-[#0096FF]">Core </span></h1>
         <p className='text-white font-semibold w-[400px]'>We are a dedicated Eye Care and Vision Health Center committed to providing advanced, Diagnostic Treatments.</p>
      </div>

      <div className='flex flex-col gap-3 text-white'>
        <h1 className='text-xl font-semibold text-white mb-3'>Company</h1>
        <p>About</p>
        <p>Clinics</p>
        <p>Hospitals</p>
        <p>Specialities</p>
        <p>ContactUs</p>
      </div>


      <div className='hidden sm:flex flex-col gap-3 text-white'>
        <h1 className='text-xl font-semibold text-white mb-3'>Need help</h1>
        <p>Visit our clinic</p>
        <p className='w-[200px]'>General enquires 
            medicor@gmail.com
        </p>
       
        <p className='w-[100px]'>Call us
            983746829278
        </p>
        
      </div>



      <div className='hidden sm:flex flex-col'>
        <h1 className='text-xl font-semibold text-white mb-3'>Keep In touch with us</h1>
        <p className='text-white'>Subscribe our newsletter to get the latest news and updates From Doccure !</p>
      </div>
    </div>

    <div className='flex flex-row bg-black w-full h-[30px] items-center justify-center'>
             <p className='text-white text-sm'>Copyright © 2025 MediCore. All Rights Reserved</p>
    </div>

    </div>
    )
}

export default Footer
