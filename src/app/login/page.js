"use client";
import React, { useState, useEffect } from "react";
import axios from "axios";
import Link from "next/link";
import { useRouter } from "next/navigation";
import Aos from "aos";
import toast from "react-hot-toast";
import "aos/dist/aos.css";

export default function LoginPage() {
  const router = useRouter();
  useEffect(() => {
    Aos.init();
  }, []);

  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  const loginHandler = async () => {
    try {
      const response = await axios.post("/api/users/login", user);
      toast.success(response.data.message);
      router.push("/");
    } catch (error) {
      toast.error(error.message);
    }
  };

  return (
    <div className="h-screen flex justify-center items-center bg-slate-800">
      <div
        className="size-[430px] p-4  bg-white rounded-xl shadow-xl"
        data-aos="fade-down"
      >
        <h1 className="text-center text-2xl font-bold">Login</h1>
        <hr className="mt-1 mb-3 shadow-lg" />
          <label htmlFor="email" className="mb-1 block font-bold ">
            Email{" "}
          </label>
          <input
            type="email"
            required
            id="email"
            placeholder="email "
            value={user.email}
            onChange={e => {
              setUser({ ...user, email: e.target.value });
            }}
            className="mb-3 border-2 w-full p-2 text-black border-zinc-500"
          />

          <label htmlFor="password" className="mb-1 block font-bold ">
            Password{" "}
          </label>
          <input
            type="password"
            required
            id="password"
            value={user.password}
            onChange={e => {
              setUser({ ...user, password: e.target.value });
            }}
            placeholder="password "
            className="mb-3 border-2 w-full p-2 text-black border-zinc-500"
          />

          <button
            onClick={loginHandler}
            style={{ borderRadius: "50px" }}
            className="bg-blue-500 w-full  hover:bg-purple-500 px-14 m-auto text-white p-2 hover:shadow-2xl mb-4 mt-4"
          >
            Login
          </button>
        <h1>Do't have Account </h1>
        <Link href="/signup">
          <p className="pl-48 hover:text-blue-500 hover:underline">
            {" "}
            go to Sign Up
          </p>
        </Link>
      </div>
    </div>
  );
}
