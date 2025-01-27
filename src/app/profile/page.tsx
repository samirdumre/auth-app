"use client";

import axios from "axios";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import toast from "react-hot-toast";

export default function ProfilePage() {
  const router = useRouter();

  const [userId, setUserId] = useState(null);

  async function logout() {
    try {
      await axios.get("/api/users/log out");
      // toast.success("Logout successful")
      router.push("/login");
    } catch (err: any) {
      // console.error("Error logging out", err.message);
      toast.error(err.message);
    }
  }

  async function getUserDetails() {
    const res = await axios.get("/api/users/me");
    console.log(res.data);
    setUserId((userId) => res.data.data._id);
  }

  return (
    <div className="h-screen flex justify-center items-center flex-col text-2xl">
      <div>
        <h1>Profile Page</h1>
        <hr />
        <h2>{userId ? <Link href={`/profile/${userId}`}></Link> : null}</h2>
      </div>
      <br />
      <div>
        <button
          onClick={logout}
          className="bg-blue-500 p-2 text-white font-bold rounded-md"
        >
          Logout
        </button>
      </div>
    </div>
  );
}
