"use client"
import axios from 'axios'
import { useRouter } from 'next/navigation'
import React,{useState,useEffect} from 'react'
import toast from 'react-hot-toast'
import Aos from 'aos'
import 'aos/dist/aos.css'
const page = () => {
  useEffect(()=>{
    Aos.init();
  })
  const router = useRouter();
  const [user,setUser] = useState({
    name:'',
    email:'',
    message:'',
    subject:'',
    contact_number:''
  })
  const sendEmail = async (e)=>{
    e.preventDefault();
    try {
      const res = await axios.post('/api/users/sendemail',user)
      toast.success(res.data.message)
      router.push('/')
    } catch (error) {
      toast.error(error.message)
    }
  }

  return (
    <div className='h-screen px-4 bg-slate-800 flex justify-center items-center'>
       <div className="w-[370px] p-4 bg-white rounded-xl h-[240]" data-aos="zoom-in">
        <h1 className='font-bold text-center text-xl'>contact us</h1>
        <form action="" onSubmit={sendEmail}>
          <label htmlFor="name">Name*</label>
          <input type="text" required id='name' placeholder='name'  value={user.name} onChange={e=>setUser({...user,name:e.target.value})} className='p-2 border w-full mt-1 mb-3 border-zinc-600' />

          <label htmlFor="email">Email</label>
          <input type="email" id='email' placeholder='email'  value={user.email} onChange={e=>setUser({...user,email:e.target.value})} className='p-2 border w-full mt-1 mb-3 border-zinc-600' />


          <label htmlFor="subject">Subject*</label>
          <input type="text" id='subject' placeholder='subject'  value={user.subject} onChange={e=>setUser({...user,subject:e.target.value})} className='p-2 border w-full mt-1 mb-3 border-zinc-600' />


          <label htmlFor="message">Message*</label>
          <textarea id='message' placeholder='message'  value={user.message} onChange={e=>setUser({...user,message:e.target.value})} className='p-2 border w-full mt-1 mb-3 border-zinc-600' />

          <label htmlFor="contact_number">Contact Number*</label>
          <input type="text" id='contact_number' placeholder='contact number'  value={user.contact_number} onChange={e=>setUser({...user,contact_number:e.target.value})} className='p-2 border w-full mt-1 mb-3 border-zinc-600' />
          <button type='submit' className='bg-purple-500 w-full p-2 hover:bg-orange-400 text-white'>send</button>
          </form>
       </div>
    </div>
  )
}

export default page