import { useState , type ChangeEvent, type FormEvent} from "react"
import Footer from "../components/Footer"
import Nav from "../components/Nav"
import axios from 'axios'
import {toast} from 'react-toastify'
import { useNavigate } from "react-router-dom"
import doctorlogin from '../assets/logindoctor.jpg'
interface FormData {
  username: string;
  email: string;
  password:string;
  confirmpassword:string;
}

const Login = () => {
  
    const [state,setState]=useState('sign up');
    const [formdata,setformdata]=useState <FormData>({
      username:'',
      email:'',
      password:'',
      confirmpassword:''
    })
   const navigate=useNavigate()

   const handleInputChange=(e:ChangeEvent<HTMLInputElement>)=>{
    setformdata({...formdata,[e.target.name]:e.target.value})
  } 

    const handlechange = () => {
    setState(prev => prev === 'login' ? 'sign up' : 'login');
    
    setformdata({
        username: '',
        email: '',
        password: '',
        confirmpassword: ''
    });
};

    const handleSubmit=async(e:FormEvent<HTMLFormElement>)=>{
      e.preventDefault()
      try {
        let url= state==='login'?'http://localhost:5000/api/user/login':'http://localhost:5000/api/user/createuser'
      

        const res= await axios.post(url,formdata);
        if(res.data.success){
          const userData=res.data.newUser ||res.data.existingUser;
          localStorage.setItem('user', JSON.stringify(userData));
          if (res.data.token) {
        localStorage.setItem('token', res.data.token);
    }
           {state==='login'?toast.success('successfully logined'):toast.success('welcome to medicode')}
           navigate('/')
           
        setformdata({
          username:'',
          email:'',
          password:'',
          confirmpassword:''
        })
        
        }
      } catch (error:any) {
        toast.error('not success')
      }
    }

  return (
    <div className="flex flex-col">
    <Nav/>

    <div className="flex flex-row h-[800px]  ">

    <div className="hidden sm:flex flex-col w-1/2 h-min-screen">
        <img src={doctorlogin} alt="" className="w-full h-full"/>
    </div>


    <div className="flex flex-col items-center mt-10 ">

        <div className="flex flex-col w-[350px]  sm:w-[500px] h-auto p-10 ml-5 sm:ml-30 border border-gray-500 rounded-lg shadow-lg bg-white items-center">
  <form className="flex flex-col gap-2 p-5" onSubmit={handleSubmit}>
                  {state==='sign up'?<p className="text-2xl font-semibold">Sign Up</p>:<p className="text-2xl font-semibold">Log In</p>}

                  {state==='sign up'?<input type="text"  placeholder="enter your name" name="username" value={formdata.username} className="p-2 w-[300px] border rounded-lg border-gray-400"  onChange={handleInputChange}/>:''}
                  <input type="email"  placeholder="enter your email" name="email" value={formdata.email} className="p-2 w-[300px] border rounded-lg border-gray-400"  onChange={handleInputChange} />
                  <input type="password"  placeholder="set your password" name="password" value={formdata.password} className="p-2 w-[300px] border rounded-lg border-gray-400" onChange={handleInputChange}/>
                  {state==='sign up'?<input type="password"  placeholder="conform yoir password" value={formdata.confirmpassword} name="confirmpassword" className="p-2 w-[300px] border rounded-lg border-gray-400" onChange={handleInputChange}/>:''}
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
