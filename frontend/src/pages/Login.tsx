import { useState } from "react"
import Footer from "../components/Footer"
import Nav from "../components/Nav"


const Login = () => {
    const [state,setState]=useState('sign up');

    const handlechange=()=>{
        state==='login'?setState('sign up'):setState('login')
    }


  return (
    <div className="flex flex-col">
    <Nav/>

    <div className="flex flex-row h-[800px]  ">

    <div className="hidden sm:flex flex-col w-1/2 bg-yellow-200 h-min-screen">
        <img src="" alt="" />
    </div>


    <div className="flex flex-col items-center mt-10 ">

        <div className="flex flex-col w-[350px]  sm:w-[500px] h-auto p-10 ml-5 sm:ml-30 border border-gray-500 rounded-lg shadow-lg bg-white items-center">
  <form className="flex flex-col gap-2 p-5" >
                  {state==='sign up'?<p className="text-2xl font-semibold">Sign Up</p>:<p className="text-2xl font-semibold">Log In</p>}

                  {state==='sign up'?<input type="text"  placeholder="enter your name" className="p-2 w-[300px] border rounded-lg border-gray-400" />:''}
                  <input type="email"  placeholder="enter your email" className="p-2 w-[300px] border rounded-lg border-gray-400" />
                  <input type="password"  placeholder="set your password" className="p-2 w-[300px] border rounded-lg border-gray-400" />
                  {state==='sign up'?<input type="password"  placeholder="conform yoir password" className="p-2 w-[300px] border rounded-lg border-gray-400" />:''}
                  {state==='sign up'?<button type="submit" className="flex items-center justify-center w-[300px] p-2 bg-blue-500 text-white font-semibold rounded-lg shadow-lg mt-6">Sign Up</button>:<button type="submit" className="flex items-center justify-center w-[300px] p-2 bg-blue-500 text-white font-semibold rounded-lg shadow-lg mt-6">Log In</button>}
          </form>
          {state==='sign up'?<p className="text-sm ">if you already have an account <button className="text-blue-600 underline mt-2" onClick={handlechange}>login</button> </p>:<p className="text-sm ">you are new to the site <button className="text-blue-600 underline mt-2" onClick={handlechange}>sing up</button> </p>}
        </div>
            
          
    </div>

    </div>
      <Footer/>
    </div>
  )
}

export default Login
