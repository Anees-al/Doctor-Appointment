

import { RiDoubleQuotesL } from "react-icons/ri";
import { useServer } from "../context";


const ClientReview = () => {
  
  const {users}=useServer()


const sortedcomments=users?.filter((user)=>(user.comments && user.comments.trim().length > 0))
    






  return (
    <div className="flex flex-col gap-7 justify-center items-center p-10 h-auto">
      <h1 className="px-4 py-2 bg-gradient-to-r from-[#0096FF] to-[#00EDFF] text-white font-semibold text-lg w-[200px] rounded-lg shadow-lg ">Client Reviews</h1>
      <p className="text-xl sm:text-4xl font-semibold ">
What Our  <span className="bg-gradient-to-r from-[#0096FF] to-[#00EDFF] bg-clip-text text-transparent">Our Patients Say About Us</span> </p>



<div className="flex flex-col sm:flex-row gap-10">
{sortedcomments?.map(comment=>(
    <div className="flex  flex-col w-[300px] h-[350px] text-gray-500  rounded-lg border shadow-lg hover:shadow-xl border-gray-600 p-5 hover:bg-[#0096FF] hover:text-white bg-white">
        <RiDoubleQuotesL size={50} color="#0096FF"/>  <RiDoubleQuotesL size={50} color="white"/>
     <p className="text-sm font-semibold ">{comment.comments}</p>

     <p className="text-xl font-semibold  mt-5 ">{comment.username}</p>
    </div>
))}
</div>
    </div>
  )
}

export default ClientReview
