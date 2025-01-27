"use client";
import Link from "next/link";
import { useRouter } from "next/navigation";
import axios, { Axios } from "axios";
import { useState } from "react";
import toast from "react-hot-toast";



export default function LoginPage() {

  const router = useRouter()

  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  async function onLogin() {
    try{

      const response = await axios.post("/api/users/login", user)
      console.log("Login success", response);
      toast.success("Login success")
      router.push("/profile")
      

    } catch(error){
      toast.error("Wrong username or password")
      
    }
  }

  return (
    <div className="flex items-center justify-center flex-col">
      <h1 className="text-2xl">Login</h1> <br /> <br />
      <div>
        <div>
          <label htmlFor="email" className="text-xl">
            Email:
          </label>{" "}
          <br />
          <input
            type="email"
            className="text-black p-1 rounded-md w-lg"
            id="email"
            value={user.email}
            onChange={(e) =>
              setUser({
                ...user,
                email: e.target.value,
              })
            }
          ></input>
        </div>
        <br />
        <div>
          <label htmlFor="password" className="text-xl">
            Password:
          </label>{" "}
          <br />
          <input
            type="password"
            className="text-black p-1 rounded-md w-lg"
            id="password"
            value={user.password}
            onChange={(e) =>
              setUser({
                ...user,
                password: e.target.value,
              })
            }
          ></input>
        </div>
        <br />
        <div>
          <button
            onClick={onLogin}
            className="text-xl self-center p-1 width-md rounded-md border-gray-500"
          >
            Login
          </button>
          <br />
          <Link href={"/signup"}>Go to Sign up page</Link>
        </div>
      </div>
    </div>
  );
}
