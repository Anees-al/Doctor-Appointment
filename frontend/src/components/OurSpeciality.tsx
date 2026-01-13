

const OurSpeciality = () => {
   const department:{ name: string, num: number }[]=[
    {name:'Urology',num:20},
    {name:'Orthopedic',num:20},
    {name:'Cardiologist',num:20},
    {name:'Dentist',num:20},
    {name:'Neurology',num:20},
    {name:'Pediatrics',num:20},
    {name:'Psychiatrist',num:20},
    {name:'ENT',num:20},
    
   ]
    
  return (
    <div className="flex flex-col bg-white mt-5 w-full h-auto p-4">
      <div className="flex flex-col items-center justify-center mt-10 ">
        <h1 className="text-2xl text-white bg-gradient-to-r from-[#0096FF] to-[#00EDFF] px-4 py-2 rounded-lg font-semibold">Our speciality</h1>
        <p className="mt-5 text-xl sm:text-4xl font-semibold ">Medical Support For <span className="bg-gradient-to-r from-[#0096FF] to-[#00EDFF] bg-clip-text text-transparent">Every Need</span> </p>

        
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-4 gap-4 mt-10 justify-items-center">
             {department.map(dep=>
             (
                <div className="flex flex-col  px-4 w-[300px] h-[100px] py-2 bg-gray-100 border border-gray-400 rounded-lg justify-center items-center shadow-lg">
                    <p className="text-xl font-semibold">{dep.name} </p>
                    <p className="text-sm font-semibold text-gray-900">{dep.num} Doctors </p>
                    </div>
             )

             )}
        </div>
    </div>
  )
}

export default OurSpeciality
