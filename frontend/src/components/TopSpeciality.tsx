

const TopSpeciality = () => {
    const doctor:{ name: string, department:string,place:string }[]=[
               {name:'Remiya',department:'Orthopedic',place:"Kollam"},
               {name:'Anoop',department:'Nuerology',place:"Thiruvanathapuram"},
               {name:'Anees',department:'Cardiology',place:"Thiruvanathapuram"},
               {name:'James',department:'ENT',place:"Kochi"},
    ]
  return (
    <div className="flex flex-col items-center py-6 bg-gradient-to-r from-[#F0F9FF] to-[#B3F5FF] w-full h-auto">
        <p className="text-2xl text-white bg-gradient-to-r from-[#0096FF] to-[#00EDFF] px-4 py-2 rounded-lg font-semibold w-[150px] text-center">Our Team</p>
        <p className="mt-5 text-xl sm:text-4xl font-bold ">Top Specialists <span className="bg-gradient-to-r from-[#0096FF] to-[#00EDFF] bg-clip-text text-transparent">Dedicated to Your Care</span></p>


        <div className="flex flex-col sm:flex-row gap-8 mt-10">
            {doctor.map(doc=>(
                <div className="flex  flex-col bg-white rounded-lg w-[300px]  h-[350px] shadow-lg"></div>
            ))}
        </div>
    </div>
  )
}

export default TopSpeciality
