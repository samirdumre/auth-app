"use client";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { Axios } from "axios";
import { useState } from "react";

async function onLogin() {}

export default function LoginPage() {
  const [user, setUser] = useState({
    email: "",
    password: "",
  });

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
