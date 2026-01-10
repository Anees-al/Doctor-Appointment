

const Nav = () => {

    const navItems:string[]=['Home','About','Service','Contact']
  return (
    <div className="flex flex-row justify-between p-4 bg-white">
      <div>
          <h1 className="text-3xl font-bold">Medi<span className="text-[#0096FF]">Core </span></h1>
      </div>

      <div className="hidden sm:flex flex-row gap-8">
     {navItems.map((items)=>(
        <p className=' relative inline-block hover:text-[#0096FF] cursor-pointer leading-tight
    after:absolute after:left-0 after:bottom-[7px] 
    after:h-[2px] after:w-0 after:bg-[#0096FF]
    after:transition-all after:duration-300 hover:after:w-full'>{items}</p>
     ))}
      </div>


      <div>
          <button className="hidden sm:flex px-4 py-2 text-white font-semibold bg-[#0096FF] rounded-lg shadow cursor-pointer hover:shadow-lg hover:bg-[#1F51FF]">Appointment</button>
      </div>
    </div>
  )
}

export default Nav
