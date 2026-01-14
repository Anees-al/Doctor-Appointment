import  {motion} from  'framer-motion'
import { useNavigate } from 'react-router-dom'

const Nav = () => {

const navigate=useNavigate();


    const navItems:string[]=['Home','About','Service','Contact']
  return (
    <motion.div className="flex flex-row justify-between p-4 bg-white" initial={{y:-100,opacity:0}} animate={{y:0,opacity:1}} transition={{duration:0.7}}>
      <div>
          <h1 className="text-3xl font-bold" onClick={()=>navigate('/')}>Medi<span className="text-[#0096FF]">Core </span></h1>
      </div>

      <div className="hidden sm:flex flex-row gap-8">
     {navItems.map((items)=>(
        <p className=' relative inline-block hover:text-[#0096FF] cursor-pointer leading-tight
    after:absolute after:left-0 after:bottom-[7px] 
    after:h-[2px] after:w-0 after:bg-[#0096FF]
    after:transition-all after:duration-300 hover:after:w-full'>{items}</p>
     ))}
      </div>


      <div className='flex ffleex-row gap-3'>
          <button className="hidden sm:flex px-4 py-2 text-white font-semibold bg-green-500 rounded-lg shadow cursor-pointer hover:shadow-lg hover:bg-green-700">Appointment</button>
          <button className=" sm:flex px-4 py-2 text-white font-semibold bg-[#0096FF] rounded-lg shadow cursor-pointer hover:shadow-lg hover:bg-[#1F51FF] " onClick={()=>navigate('/login')}>Login</button>
      </div>
    </motion.div>
  )
}

export default Nav
