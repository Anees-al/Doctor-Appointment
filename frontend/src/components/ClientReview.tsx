import { RiDoubleQuotesL } from "react-icons/ri";

const ClientReview = () => {

const comments:{ name: string, comments: string }[]=[
    {name:'Mathew',comments:'I used to dread calling around to find an available slot. This platform made it so easy to see my doctor’s schedule and book a same-day appointment in under two minutes. Truly a lifesaver!'},
    {name:'David',comments:'The automated reminders are fantastic. I never miss an appointment now, and I love that I can sync the booking directly to my phones calendar. Very professional and seamless experience.'},
    {name:'Elena',comments:'It’s hard to find specialists you can trust, but the verified reviews and detailed doctor profiles gave me so much peace of mind. The consultation was excellent, and the check-in process was a breeze.'},
    {name:'Sarah',comments:'When my daughter woke up with a high fever, I was able to find a pediatrician nearby and book a slot instantly. The interface is clean, fast, and works perfectly on mobile'}
]
  return (
    <div className="flex flex-col gap-7 justify-center items-center p-10 h-auto">
      <h1 className="px-4 py-2 bg-gradient-to-r from-[#0096FF] to-[#00EDFF] text-white font-semibold text-lg w-[200px] rounded-lg shadow-lg ">Client Reviews</h1>
      <p className="text-xl sm:text-4xl font-semibold ">
What Our  <span className="bg-gradient-to-r from-[#0096FF] to-[#00EDFF] bg-clip-text text-transparent">Our Patients Say About Us</span> </p>



<div className="flex flex-col sm:flex-row gap-10">
{comments.map(comment=>(
    <div className="flex  flex-col w-[300px] h-[350px] text-gray-500  rounded-lg border shadow-lg hover:shadow-xl border-gray-600 p-5 hover:bg-[#0096FF] hover:text-white bg-white">
        <RiDoubleQuotesL size={50} color="#0096FF"/>  <RiDoubleQuotesL size={50} color="white"/>
     <p className="text-sm font-semibold ">{comment.comments}</p>

     <p className="text-xl font-semibold  mt-5 ">{comment.name}</p>
    </div>
))}
</div>
    </div>
  )
}

export default ClientReview
