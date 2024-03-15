"use client";
import React, { useEffect } from "react";
import axios from "axios";
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";
import Aos from 'aos';
import 'aos/dist/aos.css'
import Link from "next/link";

const LogoutBtn = () => {
  const router = useRouter();
  const logoutHandler = async () => {
    try {
      await axios.get("/api/users/logout");
      toast.success("Logout successful");
      router.push("/login");
    } catch (error) {
      toast.error(error.message);
    }
  };

  return (
    <>
      <button
        onClick={logoutHandler}
        style={{ borderRadius: "50px", boxShadow:"2px 2p 10px 10px #fff" }}
        className="px-16  py-3 bg-purple-500 text-white hover:bg-orange-400"
      >
        Logout
      </button>
    </>
  );
};

const ProfileDetails= ()=>{
  const [data, setData] = React.useState({});
  const fetchProfile = async ()=>{
    
    try {
      const res= await axios.get('/api/users/profile');
      const data  =  await res.data.user;
      setData(data)
    } catch (error) {
      toast.error(error.message)
    }
  }
  useEffect(()=>{
    fetchProfile();
    Aos.init();
  },[])
  return (
    <>
      <div className="h-screen flex bg-slate-800 w-full justify-center items-center">
          <div className="w-[300] p-10 bg-white rounded-xl h-[240]" data-aos="zoom-in">
            <h1 className="text-3xl">username: <span className="text-purple-500">{data.username}</span></h1>
            <p className="mt-4 text-orange-400"> Email:<span className="text-purple-500 ml-4">{data.email}</span></p>
            <Link href={'/'} className="mx-auto">
              <button className="bg-purple-500 px-14 py-3 w-full mt-3 text-white"> go to home</button>
            </Link>
            <Link href={'/contact'} className="mx-auto">
              <button className="bg-purple-500 px-14 py-3 w-full mt-3 text-white"> contact</button>
            </Link>
          </div>
         
      </div>
    </>
  )
}
export {LogoutBtn,ProfileDetails}

