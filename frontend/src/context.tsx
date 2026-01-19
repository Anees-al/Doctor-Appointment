import axios from "axios";
import { useContext,createContext, useState, useEffect } from "react";
import {type ReactNode } from "react";


interface User {
  _id: string;
  name: string;
  email: string;
}


interface Doctor {
     _id: string;
  doctorname: string;
  department: string;
  doctorimage: string;
  fees: number;
  languages: string[];
  qualification: string[];
  experience: number;
  available:boolean;

}

interface ApiContextType {
  BASE_URL: string;
  users: User[] | null;
  setUsers: React.Dispatch<React.SetStateAction<User[] | null >>;
  doctors: Doctor[]  | null;
  setDoctors:React.Dispatch<React.SetStateAction<Doctor[] | null >>;
}

const ApiContext = createContext<ApiContextType | undefined>(undefined);
interface ApiProviderProps {
  children: ReactNode;
}


export const ApiProvider=({children}:ApiProviderProps)=>{
    const BASE_URL=import.meta.env.VITE_API_BASE_URL ??`https://doctor-appointment-backend1-s2f5.onrender.com`;
    const [users,setUsers]=useState<User[] | null>(null);
    const [doctors,setDoctors]=useState<Doctor[] | null>(null);



    useEffect(()=>{
        const fetchUsers=async()=>{
             try {
                const Userres=await axios.get(`${BASE_URL}/api/user/getallusers`);
                const Doctorres=await axios.get(`${BASE_URL}/api/doctor/getalldoctors`)
                setUsers(Userres.data.users);
                setDoctors(Doctorres.data.doctors)
                
             } catch (error) {
                console.log(error)
             }
        }

        fetchUsers()
},[])


    return(
        <ApiContext.Provider value={{BASE_URL,users,setUsers,doctors,setDoctors}}>
            {children}
        </ApiContext.Provider>
    )
}


export const useServer = () => {
  const context = useContext(ApiContext);
  if (!context) {
    throw new Error("useServer must be used within an ApiProvider");
  }
  return context
}