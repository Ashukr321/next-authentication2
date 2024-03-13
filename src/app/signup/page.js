"use client";
import Link from "next/link";
import { use, useEffect, useState } from "react";
import Aos from 'aos'
import 'aos/dist/aos.css'
import {toast} from "react-hot-toast";
import axios from "axios";
import { useRouter } from "next/navigation";
export default function SignUpPage() {
//   create  the object of the  usrRouter 
  const router = useRouter();

  useEffect(()=>{
    Aos.init();
  },[])
  const { user, setUser } = useState({
    name: "",
    email: "",
    password: "",
  });

  const singupHandler = async()=>{
     
  }


  return (
    <div className="h-screen flex justify-center items-center bg-slate-800">
      <div className="w-[360px] p-4 bg-white rounded-xl shadow-xl " data-aos="fade-down">
        <h1 className="text-center font-bold mb-2 text-2xl text-blue-500">Sign Up</h1>
        <hr className="font-bold mb-4 " />
        <form  onSubmit={singupHandler}>

          <label htmlFor="name" className="block mb-1">
            Name
          </label>
          <input
            type="text"
            id="name"
            required

            className="border-2  border-zinc-500 text-black p-1 mb-3 w-full"
            placeholder="Name"
          />

          <label htmlFor="email" className="block mb-1">
            Email
          </label>
          <input
            type="email"
            id="email"
            required
            className="border-2  border-zinc-500 text-black p-1 mb-3 w-full"
            placeholder="Email"
          /> 

<label htmlFor="password" className="block mb-1">
            Password
          </label>
          <input
            type="password"
            id="password"
            required
            className="border-2  border-zinc-500 text-black p-1 mb-3 w-full"
            placeholder="Email"
          /> 

          <button className="block bg-blue-500 text-white m-auto px-14 hover:shadow-2xl  py-2 border mt-4 hover:bg-purple-700 hover:text-white" style={{borderRadius:"50px"}} >Submit</button>


        </form>
        <h1 className="mt-3">Already have a Account</h1>
        <Link href={'/login'}>
        <p className="ml-48 mb-4 hover:underline hover:text-blue-500">go to login</p>
        </Link>
        
      </div>
    </div>
  );
}
