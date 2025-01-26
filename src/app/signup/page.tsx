"use client";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { Axios } from "axios";
import { useState } from "react";


async function onSignUp() {

}


export default function SignUpPage() {
  const [user, setUser] = useState({
    email: "",
    username: "",
    password: "",
  });

  return (
    <div className="flex items-center justify-center flex-col">
      <h1 className="text-2xl">Signup</h1> <br /> <br />
      <div>
        <div>
          <label htmlFor="email" className="text-xl">
            Email:
          </label> <br />
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
          <label htmlFor="username" className="text-xl">
            Username:
          </label> <br />
          <input
            type="text"
            className="text-black p-1 rounded-md w-md"
            value={user.username}
            id="username"
            onChange={(e) =>
              setUser({
                ...user,
                username: e.target.value,
              })
            }
          ></input>
        </div>
        <br />
        <div>
          <label htmlFor="password" className="text-xl">
            Password:
          </label> <br />
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
          <button onClick={onSignUp} className="text-xl self-center p-1 width-md rounded-md border-gray-500">SignUp</button>
          <br />
          <Link href={"/login"}>Go to Login page</Link>
        </div>
      </div>
    </div>
  );
}
