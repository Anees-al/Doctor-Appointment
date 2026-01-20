import aboutdoctor from '../assets/aboutdoctor.webp'
import Footer from '../components/Footer'
import Nav from '../components/Nav'

const AboutPage = () => {
  return (
    <div className='flex flex-col'>
        <Nav/>


        <div className='flex flex-col'>
           <div className='flex flex-col sm:flex-row p-10 gap-20'>
                <img src={aboutdoctor} alt=""  className='w-[500px]'/>


                <div className='flex flex-col gap-6 '>
                  <h1 className='text-4xl font-semibold '>Our Mission:Health and Convenience</h1>
                  <p className='text-lg font-semibold  text-gray-500'>MediCore was founded with a simple goal: to make quality healthcare accessible to everyone. 
          We understand the anxiety of medical needs, which is why we've built a platform that 
          prioritizes speed, security, and verified expertise.</p>

          <div className='flex flex-col'>
               <h1 className='text-2xl font-semibold'>Why you choose us ?</h1>

               <div className='flex flex-row gap-10 mt-3'>
                 <ul className='flex flex-col gap-2 list-disc pl-5 marker:text-green-500 text-gray-800 font-semibold'>
                   <li>Verified specialists</li>
                   <li>Instant bookings</li>
                   <li>Secure and Private</li>
                   <li>24*7  Support</li>
                 </ul>
                 <ul className='flex flex-col gap-2 list-disc pl-5 marker:text-green-500 text-gray-800 font-semibold'>
                   <li>Affordable price</li>
                   <li>Trusted Medicines</li>
                   <li>Top Doctors</li>
                   <li>Easy bookings</li>
                 </ul>
               </div>


               <button className='text-lg font-semibold text-white bg-gradient-to-r from-[#0096FF] to-[#00D4FF] p-3 rounded-lg shadow-lg mt-3 cursor-pointer hover:scale-105'>Book Appointments</button>
          </div>
                </div>
           </div>
        </div>
        <Footer/>
    </div>
  )
}

export default AboutPage
