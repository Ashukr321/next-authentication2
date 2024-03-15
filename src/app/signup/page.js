"use client";
import React, { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";
import axios from "axios";
import Link from "next/link";
import Aos from 'aos'
import 'aos/dist/aos.css'

const SignupPage = () => {
  useEffect(()=>{
    Aos.init();
  })
  //  create object of the useRouter
  const router = useRouter();

  const [user, setUser] = useState({
    username: "",
    email: "",
    password: "",
  });

  const [buttonDisabled, setButtonDisabled] = useState(false);
  const [loading, setLoading] = useState(false);

  const onSignup = async () => {
    try {
      setLoading(true);
      const res = await axios.post("/api/users/signup", user);
      toast.success(res.data.message);
      router.push("/login");
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (
      user.username.length > 0 &&
      user.email.length > 0 &&
      user.password.length > 0
    ) {
      setButtonDisabled(false);
    } else {
      setButtonDisabled(true);
    }
  }, [user]);
  return (
    <div className="h-screen flex justify-center items-center bg-slate-800">
      <div className=" size-[420px] p-4  bg-white rounded-xl shadow-xl" data-aos="fade-down">
        <h1>{loading ? "processing" : ""}</h1>

        <h1 className="text-center text-2xl font-bold mb-2">Signup</h1>

        <label htmlFor="username" className="mb-1 text-xl">
          userName
        </label>
        <input
          type="text"
          required
          id="username"
          placeholder="username"
          className="mb-3 border-2 w-full p-2 text-black border-zinc-500"
          onChange={e => setUser({ ...user, username: e.target.value })}
          value={user.username}
        />

        <label htmlFor="email" className="mb-1 text-xl">
          Email Address
        </label>
        <input
          type="email"
          required
          id="email"
          placeholder="email"
          className="mb-3 border-2 w-full p-2 text-black border-zinc-500"
          onChange={e => setUser({ ...user, email: e.target.value })}
          value={user.email}
        />

        <label htmlFor="password" className="mb-1 text-xl">
          Password
        </label>
        <input
          type="password"
          id="password"
          placeholder="password"
          required

          className="mb-3 border-2 w-full p-2 text-black border-zinc-500"
          onChange={e => setUser({ ...user, password: e.target.value })}
          value={user.password}
        />

        <button onClick={onSignup}
          className="w-full bg-blue-500 text-white p-2 rounded-sm hover:bg-purple-500"
          
          style={{borderRadius:"50px"}}
        >
          {" "}
          {buttonDisabled ? "no Signup" : "Signup"}
        </button>

        <h1 className="mt-3">Already Have a Account</h1>
        <Link href={'/login'} className="pl-48 hover:text-blue-500 hover:underline">Go to Login</Link>
      </div>
    </div>
  );
};

export default SignupPage;
